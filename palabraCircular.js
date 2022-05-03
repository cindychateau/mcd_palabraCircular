/*
 * palabraLarga = matamoscas
 * palabraBusqueda = mosca
 * palabraLarga = matamoscasmatamoscas
 * palabraLarga = MATAMOSCASMATAMOSCAS
 * palabraBusqueda = MOSCA
 * index = 4
 * RETURN TRUE
 * 

palabraLarga = matamoscas
palabraBusqueda = asma
palabraLarga = MATAMOSCASMATAMOSCAS
palabraBusqueda = ASMA
i = 0
(M === A) NO

i = 1
(A === A)
indicePalabraLarga = 1
j = 0
(palabraBusqueda[0] !== palabraLarga[1]) -> (A !== A)
indicePalabraLarga = 2
j = 1
(palabraBusqueda[1] !== palabraLarga[2]) -> (S !== T)

i = 2
(T === A)

i = 3
(A === A)
indicePalabraLarga = 3
j = 0
(palabraBusqueda[0] !== palabraLarga[3]) -> (A !== A)
indicePalabraLarga = 4
j = 1
(palabraBusqueda[1] !== palabraLarga[4]) -> (S !== M)

i = 4
(M === A)

i = 5
(O === A)

i = 6
(S === A)

i = 7
(C === A)

i = 8
(A === A)
indicePalabraLarga = 8
j = 0
(palabraBusqueda[0] !== palabraLarga[8]) -> (A !== A)
indicePalabraLarga = 9
j = 1
(palabraBusqueda[1] !== palabraLarga[9]) -> (S !== S)
indicePalabraLarga = 10
j = 2
(palabraBusqueda[2] !== palabraLarga[10]) -> (M !== M)
indicePalabra = 11
j = 3
(palabraBusqueda[3] !== palabraLarga[11]) -> (A !== A)
 */
function palabraCircular(palabraLarga, palabraBusqueda) {

    palabraLarga += palabraLarga; //Estoy poniendo dos veces la palabra larga
    palabraLarga = palabraLarga.toUpperCase();

    palabraBusqueda = palabraBusqueda.toUpperCase();

    let index = palabraLarga.indexOf(palabraBusqueda); //No necesitamos
    console.log(index);
    //Recorremos la palabra larga
    for(let i=0; i<palabraLarga.length; i++){
        //Comparamos con la primera letra de la palabra que buscamos
        if(palabraLarga[i] === palabraBusqueda[0]) {
            let indicePalabraLarga = i;
            let j;
            for(j=0; j<palabraBusqueda.length; j++){
                if(palabraBusqueda[j] !== palabraLarga[indicePalabraLarga]) {
                    break;
                }

                indicePalabraLarga++;
            }

            if(j === palabraBusqueda.length){
                return true;
            }

        }
    }

    return false;

    //return(index >= 0 ? true : false);

}

console.log(palabraCircular("matamoscas", "mosca"));