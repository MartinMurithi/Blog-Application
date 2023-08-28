const multer = require("multer");
const maxFileSize = 1024 * 1024 * 3;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/webp") {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type, only jpg, jpeg and png are allowed!!"),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: maxFileSize,
  },
  fileFilter: fileFilter,
});


module.exports = upload;
