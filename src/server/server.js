(function() {
    var app, config, serveStatic;
    var multer = require('multer');
    var express=require('express');
    app=express();
    serveStatic=require('serve-static');
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    })

    var upload = multer({ storage: storage })

    config=require('./config');
    app.use(serveStatic(config.bowerPath));
    app.use(serveStatic(config.rootPath + "/client"));

    app.post('/api/upload',upload.single('file'), function(req, res){
        console.log(req);
        res.send(200);
    });

    app.listen(process.env.PORT || 3000);
    console.log("Listening on http://localhost:" + (process.env.PORT || '3000') );


}).call(this);


