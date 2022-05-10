window.onload = () =>
  //cuando termina de cargar la pag carga una funcion anonima ()
  {
    let personaje = ["El gato", "El perro", "El chivo", "El pez", "El loro"];
    let accion = ["enterro mi tarea","rompio mi cuaderno","orino mi lapiz","ensucicio mi camisa","cerro la puerta"];
    let tiempo = ["luego de la clase","justo ahora","hace un rato","junto antes de la clase","cuando llegue"];

    var person1 = (document.querySelector("#mensaje1").innerHTML =
      personaje[Math.floor(Math.random() * personaje.length)]);
    var accion1 = (document.querySelector("#mensaje2").innerHTML =
      accion[Math.floor(Math.random() * accion.length)]);
    var tiempo1 = (document.querySelector("#mensaje3").innerHTML =
      tiempo[Math.floor(Math.random() * tiempo.length)]);

    console.log(person1);
    console.log(accion1);
    console.log(tiempo1);
  };
