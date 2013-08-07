var express = require('express'),
    nodemailer = require('nodemailer'),
    Firebase = require('firebase'),
    FirebaseTokenGenerator = require('firebase-token-generator'),
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
  app.use(express.favicon(__dirname + '/public/favicon.ico')); 
  app.use(express.static(path.join(__dirname, 'public')));
});

app.post('/correo', function(req, res){
 var correo = req.body;
 res.json({flag: true})
   var mailOptions = {
       from: "apps4health.es@gmail.com", // sender address
       to: "karlosgliberal@gmail.com, diazitxaso@gmail.com, aitor@investic.net",
       subject: "[Formulario inscripción apps4health] " + correo.nombreApellidos,
       html: "Inscrito desde el formuario de apps4healts.es<br> Nombre y Apellidos: "+ correo.nombreApellidos +"<br> Correo: " + correo.email+ " <br> Teléfono: "+ correo.telefono+ "<br> Alojamiento: " + correo.alojamiento+ "<br> Procedencia: " + correo.procedencia + "<br> Bio persona: " + correo.bio + " <br> Proyecto: " + correo.proyecto + " <br> App libre: " + correo.appLibre + "<br>",
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
      }else{
        console.log("Message sent: " + response.message);
      }
   });

   var mailOptionsUsuarios = {
       from: "apps4health.es@gmail.com", // sender address
       to: correo.email,
       subject: "Inscripción hackathón Apps4Health ",
       html: "Acabas de inscribirte en la hackathón Apps4Health que tendrá lugar el sábado 28 de septiembre de 2013 en el Espacio Open, Antigua fábrica de galletas Artiach, Ribera de Deusto 70B, 1º48014, Zorrotzaurre, Bilbao. <br> En breve alguien de la organización del evento se pondrá en contacto contigo para terminar de formalizar tu participación. <br> Gracias por tu interés <br> Saludos <br> El equipo Apps4Health",
    }
    
    smtpTransport.sendMail(mailOptionsUsuarios, function(error, response){
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

