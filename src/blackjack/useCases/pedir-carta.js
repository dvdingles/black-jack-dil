
 /**
  * Pide una carta de la baraja, es decir su numero y su letra, y deja a la baraja sin esa carta
  * @param {Array<String>} deck  
  * @returns {String} regresa una carta de la baraja
  */
 
export const pedirCarta = ( deck ) => {
 
    if( !deck || deck.length === 0 ) throw new Error('El deck es obligatorio y es un array que no puede estar vacío')

    const carta = deck.pop();
    return carta;
}