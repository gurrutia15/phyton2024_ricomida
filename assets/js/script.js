const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



let enviarCorreo = ()=> {
    alert("El correo fue enviado correctamente...")
}

 let enviarCorreo2 = ()=>{
    alert("El correo fue enviado correctamente...")
 }

     
let cambioColor = ()=>{
    document.getElementById('ingredientes').style.color='#dc3545'
}
let cambioColor2 = ()=>{
    document.getElementById('preparacion').style.color='#dc3545'
}


        
$(".cnombre").click(function(){
    $(".ctexto").toggle()
})

