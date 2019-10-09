var Imagenes = [];
Imagenes ["Cauchín"] = "vaca.png";
Imagenes ["Pokacho"] = "pollo.png";
Imagenes ["Tocinauro"] = "cerdo.png";

 var Coleccion = [];
 Coleccion.push (new Pakiman ("Cauchín", "Tierra", 100, 30));
 Coleccion.push (new Pakiman ("Pokacho", "Gravedad", 80, 50));
 Coleccion.push (new Pakiman ("Tocinauro", "Grasa", 120, 40));

 for (var Pochos of Coleccion){
   Pochos.mostrar();
 }
