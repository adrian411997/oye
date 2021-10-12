const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://github.com/adrian411997/datos/blob/main/datos.json', true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        let res = document.querySelector('#res');
        res.innerHTML = '';
        let canciones = datos.canciones;
        let ordenado = canciones.sort(function(a, b) {
            return a.reproducciones - b.reproducciones;
        })
        for (let i = 0; i < 3; i++) {
            let mayor = ordenado.pop();
            res.innerHTML += `
        <div class="col-xl-12" id="cancion" style="align-items: center;display:flex; justify-content: space-between; border-bottom: solid 1px white;">
            <div class="col-3 d-none d-sm-block">
                <p class="neon">${mayor.nombre}</p></td>
            </div>
            <div class="col-9" id="musica">
                <audio src=${mayor.ruta} controls></audio>
            </div>
        </div>
        `
        }
    }

}
