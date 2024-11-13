import React from 'react'
import { useState, useEffect } from 'react'

function ListadoUsuarios() {
    //Simulando un conjunto de datos que viene del Backend
    //El use effect se activa cuando se ejecuta una acción, está alerta al momento en que un estado cambie
    
    let usuarios=[
        {   id: 5,
            nombre: "Sebastian Poveda Arias",
            telefono: "52263985",
            ciudad: "Medallo"
        },
        {
            id: 6,
            nombre: "Andrea Sandoval",
            telefono: "52263985",
            ciudad: "Medallo"
        },
        {
            id: 7,
            nombre: "Maria Perez",
            telefono: "52263985",
            ciudad: "Medallo"
        },
        {
            id: 8,
            nombre: "Juan Perez",
            telefono: "52263985",
            ciudad: "Medallo"
        },
        {
            id: 9,
            nombre: "Pedro Perez",
            telefono: "52263985",
            ciudad: "Medallo"
        }
    ]

    const[datosApi, setDatosApi] =useState(null);
    const[estadoCarga, setEstadoCarga] =useState(true);

    // Programo el use effect para garantizar que llamara el servicio y voy a traer los datos

    useEffect(function(){},[
        function(){
            //ACA SE LLAMA AL SERVICIO (back)
            //Se carga la variable de estado con los datos del servicio, y se cambia la variable de estado de la carga
            setDatosApi(usuarios)
            setEstadoCarga(false)
        }
    ])

    return (
    <>
        <br /><br /><br /><br />
        {
            console.log(datosApi)
        }
        <h3>LISTADO DE USUARIOS</h3>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                {/* vamos a pintar una lista de objetos */
            usuarios.map(function(usuario){
                return(
                    <div className="col">
                        <div className="card h-100 shadow p-5">
                            <h5>{usuario.nombre}</h5>
                            <h4>Ciudad: {usuario.ciudad}</h4>
                        </div>
                    </div>
                )
            })
        }
            </div>
        </div>
    </>
  )
}

export default ListadoUsuarios