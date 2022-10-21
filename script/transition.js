var imagenes=["7cascadas.jpg","terones.jpg","zapato.jpg","ongamira.jpg"]
var fondo=document.getElementById("fondo");
var index=0;
function cambiarFondo()
{
    
    if(index<=2)
    {
        index=index+1;
    }
    else
    {
        index=0;
    }
    var url="url('imagenes/"+imagenes[index]+"')"
    fondo.style.backgroundImage=url;
    fondo.style.transition="1s all";
    tiempo=window.setTimeout('cambiarFondo()',5000)
}
cambiarFondo();