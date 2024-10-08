const multer = require('multer');

const armazernarArquivo = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {          
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: armazernarArquivo });

module.exports = upload;