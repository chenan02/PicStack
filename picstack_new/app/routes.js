/*
var mongoose = require('mongoose');
//var Pic = require('Pic');
var Pic = mongoose.model('Pic');
var Comment = mongoose.model('Comment');

var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/pics', function(req, res, next) {
	Pic.find(function(err, pics) {
		if(err) {return next(err);}
		res.json(pics);
	});
});


router.param('pic', function(req, res, next, id) {
	var query = Pic.findById(id);
	query.exec(function (err, pic) {
		if(err) {return next(err);}
		if(!pic) {return next(new Error('cannot find pic'));}
		req.pic = pic;
		return next();
	});
});
router.get('/pics/:pic', function(req, res, next) {
	res.json(req.pic.url);
});
router.put('/pics/:pic/upvote', function(req, res, next) {
	req.pic.upvote(function(err, pic){
    if (err) { return next(err); }

    res.json(pic);
  });
});
router.put('/pics/:pic/downvote', function(req, res, next) {
	req.pic.downvote(function(err, pic){
    if (err) { return next(err); }

    res.json(pic);
  });
});
router.delete('/pics/:pic', function(req, res, next) {
	var victim = req.pic;
	victim.remove(function (err) {
		if(err) {return next(err);}
		res.json('');
	});
});


router.get('/upload', function(req, res, next) {
	res.render('upload');
});

router.post('/upload', function(req, res, next) {
//router.post('/pics', function(req, res, next) {
	//res.redirect('/upload');
	//var tmp_path = req.files.path;
	//var target_path = './pics' + req.files.name;
	fs.readFile(req.files.fileUpload.path, function(err, data) {
		if(err) {return next(err);}
		var newPath = './pics'+ req.files.fileUpload.name;
		fs.writeFile(newPath, data, function(err) {
			if(err) return next(err);
			res.send('fuck');
		});
	});

});

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/


var Pic = require('./models/pic');
var fs = require('fs');


    module.exports = function(app) {
    
        app.get('/api/pics', function(req, res, next) {
            Pic.find(function(err, pics) {
                if(err) {return next(err);}
               // console.log(pics);
                res.json(pics);
            });
        });


        app.param('pic', function(req, res, next, id) {
            var query = Pic.findById(id);
            query.exec(function (err, pic) {
                if(err) {return next(err);}
                if(!pic) {return next(new Error('cannot find pic'));}
                req.pic = pic;
                return next();
            });
        });
        app.get('/api/pics/:pic', function(req, res, next) {
            res.json(req.pic.url);
        });
        app.put('/api/pics/:pic/upvote', function(req, res, next) {
            req.pic.upvote(function(err, pic){
            if (err) { return next(err); }

            res.json(pic);
          });
        });
        app.put('/api/pics/:pic/downvote', function(req, res, next) {
            req.pic.downvote(function(err, pic){
            if (err) { return next(err); }

            res.json(pic);
          });
        });
        app.delete('/api/pics/:pic', function(req, res, next) {
            var victim = req.pic;
            victim.remove(function (err) {
                if(err) {return next(err);}
                res.json('');
            });
        });


        app.get('/api/upload', function(req, res, next) {
            res.render('upload');
        });

        app.post('/api/upload', function(req, res, next) {
        //router.post('/pics', function(req, res, next) {
            //res.redirect('/upload');
            //var tmp_path = req.files.path;
            //var target_path = './pics' + req.files.name;
            fs.readFile(req.files.fileUpload.path, function(err, data) {
                if(err) {return next(err);}
                var newPath = './pics'+ req.files.fileUpload.name;
                fs.writeFile(newPath, data, function(err) {
                    if(err) return next(err);
                    res.send('fuck');
                });
            });
        });
        
        //frontend routes ============================
        app.get('*', function(req, res) {
           res.sendFile('./index.html');
           // res.sendFile(__dirname/public/index.html'); 
        });
                //res.sendFile('/Users/Andrew/Documents/side_projects/picstack_new/public/index.html'); // load our public/index.html file
  //      });

    };
