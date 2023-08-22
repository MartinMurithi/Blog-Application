const multer = require('multer');

const fileSizeLimitErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(500).json({ message: (`${err}`) });
  } else if (err) {
    return res.status(500).json({ message: (`${err}`) })
  }
  next(err);
};

module.exports = fileSizeLimitErrorHandler;