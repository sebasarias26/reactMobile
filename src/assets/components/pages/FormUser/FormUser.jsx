import { useState,useEffect } from 'react'
import React from 'react'
import { registrarUsuario } from '../../../../services/serviciosUsuario.js';

function FormUser() {
// las variables de estado guardan un valor en la memoria, y cada varible de estado tiene dos componentes, un nombre para leerla y un nombre para escribirla, por lo general es ponerle "nombre de variable. Set nombre de variable"

    const [nombreUsuario, setNombreUsuario] = useState(''); // En los () es con lo que va a iniciar esa variable
    const [edadUsuario, setEdadUsuario] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [contraseñaUsuario, setContraseñaUsuario] = useState('');
    const [ciudadUsuario, setCiudadUsuario] = useState('');
    const [fechaRegistro, setFechaRegistro] = useState('');
    const [telefonoUsuario, setTelefonoUsuario] = useState('');

    const [formularioEnviado, setFormularioEnviada] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState("");

    //Use effect para controlar el llamado del api

    useEffect(function(){
        if(formularioEnviado==true) {
            console.log('me voy para el back a consumir')
            // console.log(datosFormulario)
            .then(function(respuestaBack){
                console.log(respuestaBack)
            })
            setFormularioEnviada(false)
        }
    }, [formularioEnviado])

    function procesarFormulario(event){
        event.preventDefault(); // Evitar que el formulario se recargue
        let datosUsuario = {
            nombre: nombreUsuario,
            edad: edadUsuario,
            correo: correoUsuario,
            contraseña: contraseñaUsuario,
            ciudad: ciudadUsuario,
            gechaRegistro: fechaRegistro,
            telefono: telefonoUsuario
        }
        setDatosFormulario(datosUsuario);
        setFormularioEnviada(true);
    }

  return (
    <>
        <br />
        <div className="container-form my-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="registerUser">Registro de Usuario</h3>
                    <form className='p-5 border rounded shadow' onSubmit={procesarFormulario}>
                        <div className="row">
                            <div className="col-12">
                                
                                <label className='form-label'>Nombre: </label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={nombreUsuario}
                                    onChange={(event) =>
                                     setNombreUsuario(event.target.value)}
                                />

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Edad:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={edadUsuario}
                                    onChange={(event) =>
                                        setEdadUsuario(event.target.value)}
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Correo:</label>
                                <input 
                                    type="mail" 
                                    className="form-control" 
                                    value={correoUsuario}
                                    onChange={(event) =>
                                        setCorreoUsuario(event.target.value)}    
                                />

                            </div>
                        </div>

                        
                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Contraseña:</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    value={contraseñaUsuario}
                                    onChange={(event) =>
                                        setContraseñaUsuario(event.target.value)}    
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Ciudad:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={ciudadUsuario}
                                    onChange={(event) =>
                                        setCiudadUsuario(event.target.value)}    
                                />

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Fecha de Registro:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={fechaRegistro}
                                    onChange={(event) =>
                                        setFechaRegistro(event.target.value)}    
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Teléfono:</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={telefonoUsuario}
                                    onChange={(event) =>
                                        setTelefonoUsuario(event.target.value)}    
                                />

                            </div>
                        </div>
                        <button type="submit" className='btn btn-outline-success my-5 w-100'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormUser