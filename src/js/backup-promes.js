import './styles.css';
//aqui marcaria un error por que buscarHeroe ya esta definida entonces se le asigna un alias 
import { buscarHeroe as buscarHeroeCallback } from './callbacks.js';
import { buscarHeroe } from './promesas';

const heroe1 = 'capi';
const heroe2 = 'spider';


//en una funcion de callback por estandar se manejan dos parametros, el parametro de error y el response o respuesta a la petición del callback
/* buscarHeroe(heroe1,( err , heroe1 ) => {
    if( err ){ return console.error(err) ; }
    buscarHeroe(heroe2,( err , heroe2 ) => {
        if( err ){ return console.err(err); }
        console.log(`Enviando a ${ heroe1.nombre } y a ${heroe2.nombre} a la mision`);
    })
}); */ 

buscarHeroe(heroe1).then(heroe1 => {
    buscarHeroe(heroe2).then(heroe2 =>{
        console.log(`Enviando a: ${heroe1.nombre} y a ${heroe2.nombre} a la mision`);
    })
})

//Existe otra forma de ejecutar esta promesa sin necesidad de anidarlas.
//En el caso de ([heroe1,heroe2]) estamos aplicando desestructuracion de arreglos
Promise.all([buscarHeroe(heroe1),buscarHeroe(heroe2)]).then(([heroe1,heroe2])=>{
    console.log(`Enviando a: ${heroe1.nombre} y a ${heroe2.nombre} a la misionsisima`);
}).catch(reject=>{
    console.error(reject);
})

console.log('Fin del programa');