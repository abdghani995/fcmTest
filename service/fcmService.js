 var FCM = require('fcm-node');
 var path = require('path');
 var config = require(path.join(__dirname, '..', 'bin', 'config'));

 var serverKey = config.serverKey //put your server key here 
 var fcm = new FCM(serverKey);


 exports.messagePass = function(req, res, next) {
     console.log(req.body);
     var message = {
         to: req.body.token,
         //  collapse_key: 'your_collapse_key',

         notification: {
             title: req.body.title,
             body: req.body.body
         },

         data: {
             my_key: config.WebApiKey,
             //  my_another_key: 'my another value'
         }
     };

     fcm.send(message, function(err, response) {
         if (err) {
             console.log("Something has gone wrong!");
             res.status(500);
             res.send(err);
             return next();
         } else {
             console.log("Successfully sent with response: ", response);
             res.status(200);
             res.send(response);
             return next();
         }
     });
 }