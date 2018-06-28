var nuevaBusqueda = false;
function buscarPalabra(){
    var url = "https://proyectois.herokuapp.com/medias/search";
    var palabraABuscar = $('#barra-Navegacion').val();
    
    if(palabraABuscar != "" ){   
        $("#cargando").modal();
        if(nuevaBusqueda){
            sessionStorage.setItem("busquedaRealizada",palabraABuscar);    
            location.reload();
        }

        var elementoABuscar = palabraABuscar.split(" ");     
        for(var i = 0; i < elementoABuscar.length; i++)
        url = url + elementoABuscar[i];   
        
        sessionStorage.setItem("datoBusquedaLocal",url);    
        enviarPeticionDeBusqueda(url);
        nuevaBusqueda = true;
    }else{
        $("#errorModal").modal();
        mostrarError(10);
    }
}