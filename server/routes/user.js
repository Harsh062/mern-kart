const multer = require('multer');
const user = require('../models/user');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('File type not supported'), false);
    }
    
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024*1024*5
    }
});

module.exports = app => {
    app.post('/api/upload', upload.single('productImage'), (req, res) => {
        console.log('req.file: ', req.file);
        let newUser = new user();
        newUser.profileImageUrl = req.file.path;
        newUser.save()
        .then((res) => {
            console.log('profileimageurl saved successfully: ', res);
        })
        .catch(err => {
            console.log('error while saving profile image url');
        })
        res.send('Image uploaded successfully');
    })
}