export async function registrarUsuario(datosUsuario) {

    const url= "http://localhost:8000/usuarios"
    let peticion= {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(datosUsuario)
    }
    let respuestaInicial=await fetch(url,peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios
}

export async function buscarUsuario() { 

    const url= "http://localhost:8000/usuarios"

    let peticion= {
        method:"GET"
    }

    let respuestaInicial=await fetch(url,peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios
}