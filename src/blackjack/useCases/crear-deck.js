import _ from "underscore";


/**
 * Crea una nueva baraja 
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspecialesDeCartas ejemplo ['A','J','Q','K']
 * @returns {Array<String>} regresa una nueva baraja
 */

export const crearDeck = ( tiposDeCarta, tiposEspecialesDeCartas) => {
    
    if ( !tiposDeCarta || tiposDeCarta === 0 ) throw new Error ('Los tipos de carta son obligatorios y son un arreglo de strings')
    

    let deck         = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspecialesDeCartas ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

