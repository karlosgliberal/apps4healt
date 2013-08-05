var express = require('express'),
    nodemailer = require('nodemailer'),
    path = require('path');
    


var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.post('/correo', function(req, res){
 console.log('hola');
 var correo = req.body;

 res.json({flag: true})
   var mailOptions = {
       from: "apps4health.es@gmail.com", // sender address
       to: correo.email,
       subject: "[Formulario inscripción apps4health]" + correo.nombreApellidos,
       html: "Inscrito desde el formuario de apps4healts.es<br> Nombre y Apellidos: "+ correo.nombreApellidos +"<br> Correo:" + correo.email+ " <br> Teléfono:"+ correo.telefono+ "<br> Alojamiento:" + correo.alojamiento+ "<br> Precedencia:" + correo.procedencia + "<br> Bio persona:" + correo.bio + " <br> Proyecto:" + correo.proyecto + " <br> App libre:" + correo.appLibre + "<br>",
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
      }else{
        console.log("Message sent: " + response.message);
      }
   });
})


app.get('/', function(req, res){
  res.render('index', { title: 'Express' });
})


app.listen(4000);
console.log('Listening on port 4000');

