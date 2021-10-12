function mostrar() {
    var peticion = new XMLHttpRequest();
    peticion.open("GET", "../datos.json");
    peticion.onload = function() {
        var arreglo = JSON.parse(this.responseText);
        var arreglo1 = arreglo.canciones;
        let res = document.querySelector('#res');
        res.innerHTML = '';
        var normal = arreglo.canciones
        console.log(normal)
        console.log(arreglo1)
        $("#res").empty();
        var texto = $("#search").val();
        for (i = 0; i < normal.length; i++) {
            var nombreCancion = normal[i].nombre
            console.log(nombreCancion)
            console.log(arreglo1)
            var icono = normal[i].icono
            var musica = normal[i].ruta
            if (texto == "") {
                res.innerHTML += `
        <div class="col-lg-4 col-md-5 col-sm-12 contenido">
          <div class="card m-3 bg-light p-3">
            <img src="./imagenes/${arreglo1[i].icono}" class="card-img-top w-50 m-auto" alt="icono cancion">
            <div class="card-body">
                <h4 class="card-title text-dark text-center pb-2">${arreglo1[i].nombre}</h4>
                <audio src="${arreglo1[i].ruta}" controls class='w-100'></audio>
            </div>
          </div>
        </div>
        `
            } else if (nombreCancion.indexOf(texto) != -1) {
                $("#res").empty();
                res.innerHTML = `<div class="row mt-4"style="justify-content: space-between; text-align:center;"><div class="col-12" style="padding:1%;"><img src=${icono} style ="width: 100px; height:100px" ><p style="color: white; font-size: 30px">${nombreCancion}</p><audio src=${musica} controls></div>`
            }
        }
    }
    peticion.send()
}
$("document").ready(function() {
    $("#search").keyup(function(e) {
        if (e.which == "13") {
            mostrar()
        }
    })
})