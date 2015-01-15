
//Drone controle
var arDrone = require("ar-drone");
var dronsito = arDrone.createClient();
function bateria(){
	console.log("Bateria: "+ dronsito.battery());
}
function despegar(){
	dronsito.config("control:altitude_max",100000);
	dronsito.takeoff();

}
function rotar(){
	dronsito.stop();
	dronsito.calibrate(0);
}
function subir(){
	dronsito.stop();
	dronsito.up(1);
}
function aterrizar(){
	dronsito.stop();
	dronsito.land();
}
var express = require("express");
var web = express();
var servidor;
//Express y Sevidor Web
servidor = web.listen(8080, function(){
	console.log("Iniciando Servidor de Dronsito");

});
web.get("/", function(req, res){
	console.log("Home");
	bateria();
	res.sendfile("index.html");
});
web.get("/despegar", function(req, res){
	console.log("Despegar");
	bateria();
	despegar();
	rotar();
	subir();
	res.sendfile("index.html");
});
web.get("/aterrizar", function(req, res){
	console.log("Atrrizare");
	bateria();
	aterrizar();
	res.sendfile("index.html");
});