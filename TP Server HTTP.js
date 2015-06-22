var http = require("http");
var os = require('os');
var requests = 0;

var requestListener = function (req, res) {
   
  //Pregunto si el browser me esta pidiendo el favicon,
  //ya que el navegador siempre hace 2 peticiones.
  if (req.url !== '/favicon.ico') {
  requests++;
  }

  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  //lo pongo en res.end para que se vea en el navegador.
  res.end( "PID: " + process.pid + 
  " - Title : " + process.title +
  " - Request N: " + requests + 
  " - OP System: " + os.platform() + 
  " - Arch: " + os.arch())
};

var server = http.createServer(requestListener);
//declaro la variable para crear el server.
server.listen(8000,function(){
  //uso el console.log como Callback para que me avise cuando
  //el server esta efectivamente escuchando.
  console.log('Server running at http://127.0.0.1:8000/');
});
