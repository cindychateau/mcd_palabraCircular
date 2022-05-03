/*
 * Crea una función que reciba dos números y regrese 
   el máximo comun divisor.
   EJ: 10, 5 -> 5 es el máximo común divisor
   5, 2 -> 1 es el máximo común divisor
   EUCLIDES
   MCD a y b = b y RESTANTE
   a % b = RESTANTE
   A Y B = B y RESTANTE

    n1 = 10
    n2 = 5
    residuo = 0
    RETURN 5

    n1 = 5
    n2 = 2
    residuo = 3

    n1 = 2
    n2 = 1

    n1 = 8
    n2 = 2


    n1 = 2
    n2 = 8

    n1 = 8
    n2 = 2
 */
function maximo_comun_divisor( n1, n2 ){
    let residuo = n1 % n2;
    console.log(residuo);
    if( residuo == 0 ){
        return n2;
    }
    else{
        n1 = n2;
        n2 = residuo;
        return maximo_comun_divisor( n1, n2 );
    }
}

console.log( maximo_comun_divisor( 2, 8 ) );