function poblarDatosPaises() {
    var url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            // crearListaPaises(paises)
            adicionarDatosTablaPaises(paises)

        });

    /*function adicionarDatosTablaPaises(paises) {
        var tabla = document.getElementById("tablaPaises")

        for (const pais of paises) {
            var fila = tabla.insertRow(-1)
            var columnaNombre = fila.insertCell(0)
            var columnaCapital = fila.insertCell(1)
            var columnaRegion = fila.insertCell(2)

            columnaNombre.innerHTML = pais.name.official
            columnaCapital.innerHTML = pais.capital[0]
            columnaRegion.innerHTML = pais.region
        }

    }*/

    function adicionarDatosTablaPaises(paises) {
        var tabla = document.getElementById("tablaPaisesBonificacion")

        for (const pais of paises) {
            var fila = tabla.insertRow(-1)
            var columnaNombre = fila.insertCell(0)
            var columnaCapitales = fila.insertCell(1)
            var columnaMonedas = fila.insertCell(2)
            var columnaBandera = fila.insertCell(3)
            var columnaPoblacion = fila.insertCell(4)

            columnaNombre.innerHTML = pais.name.official
            columnaCapitales.innerHTML = pais.capital[0]
            columnaMonedas.innerHTML = pais.currencies
            columnaBandera.innerHTML = pais.region
            columnaPoblacion.innerHTML = pais.population
        }

    }

}