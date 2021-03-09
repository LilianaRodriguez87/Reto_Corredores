function addItem(){
    
    if(nombre1 === "" || nombre2 === "" || edad1 === "" || edad2 === "" || tiempo1 === "" || tiempo2 === "" ) {
        swal ("Todos los campos son obligatorios")
    }
    else if(tiempo1 < tiempo2){
        swal({
            title: `Nombre: ${nombre1} Edad: `,
            text: "You clicked the button!",
            icon: "success",
          })
    }
}
