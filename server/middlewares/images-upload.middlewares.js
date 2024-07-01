const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.config");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "AmazonImages",
    format: async (req, file) => "jpg",
    public_id: (req, file) => file.originalname.split(".")[0],
  },
});

const upload = multer({ storage: storage });

const imagesUpload = upload.fields([{ name: "productImages", maxCount: 10 }]);

module.exports = imagesUpload;
