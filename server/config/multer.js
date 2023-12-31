const multer = require("multer");
const maxFileSize = 1024 * 1024 * 30;

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
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/webp" || file.mimetype === "image/avif") {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type, only jpg, jpeg, png, webp and avif are supported!!"),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fieldNameSize: 500,
    fileSize: maxFileSize,
  },
  fileFilter: fileFilter,
});


module.exports = upload;
