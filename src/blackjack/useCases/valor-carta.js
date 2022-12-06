/**
 * Extrae el numero del nombre de la carta.
 * @param {String} carta ejemplo '2C'
 * @returns {Number} ejemplo 2
 */


export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('el parametro CARTA es obligatorio')
 
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}