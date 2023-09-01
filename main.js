//alert()
let url;
const links = document.querySelectorAll("nav1 a")
//console.log(links)

for(let link of links){
    link.addEventListener('click', setURL)
}

function setURL(evt){
    evt.preventDefault();
    //console.log("click");
    //console.log(evt.target.dataset.pagina);
    url = evt.target.dataset?.pagina
    if(url != undefined){
        pedirPagina(url + ".html");
    }else {
        pedirPagina('contacto.html')
    }

}

function pedirPagina(url){
    //console.log(url);
    fetch(url)
        .then((res)=>{
            return res.text();
        })
        .then((pagina)=>{
            //console.log(pagina)
            document.querySelector('main').innerHTML = pagina;
        })
        .catch((err)=>{
            swal("Bienvenido a la seccion de dictantes",
             "En esta seccion vas a poder conocer a los profesionales que dictan el U-align");
        })
}


document.addEventListener('DOMContentLoaded', setURL)