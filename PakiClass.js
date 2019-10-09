class Pakiman{
  constructor(name, type, life, attack){
    this.Imagen = new Image();
    this.nombre = name;
    this.tipo = type;
    this.vida = life;
    this.ataque = attack;

    this.Imagen.src = Imagenes[this.nombre];
  }
  hablar(){
    alert (this.nombre);
  }
  mostrar(){
    document.body.appendChild (this.Imagen);
    document.write ("<p>");
    document.write ("<strong>", this.nombre, "</strong>");
    document.write ("<br/> Vida : ", this.vida, "<br/>");
    document.write (" Ataque : ", this.ataque, "<br/>");
    document.write (" Tipo : ", this.tipo, "<br/>", "<hr />");
    document.write ("</p>");
  }
}
