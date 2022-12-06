/**
 * 
 * @param {String} carta ejemplo: '3C'
 * @return {HTMLImageElement} 
 * Retorna añade un Tag IMG en el HTML para mostrar la carta
 *  
 */


export const crearCartaHTML = ( carta ) => {

    if( !carta ) throw new Error('el argumento carta es obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta


}