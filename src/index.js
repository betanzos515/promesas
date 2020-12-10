import { buscarHeroe, buscarHeroeAsync } from './js/async';
//import { obtenerHeroeAwait } from './js/await';
//import { obtenerHeroeAwait, obtenerHeroesArr} from './js/await';
import { promesaLenta, promesaMediana, promesaRapida } from './js/promesas';
import {heroeIfAwait, heroesCiclo, obtenerHeroeAwait} from './js/await'

const idHeroe1 = 'capi';
const idHeroe2 = 'spider';
const idHeroe3 = 'iron';

//race recibe un arreglo de promesas pero solo devuelve el then de la primera en resolverse
/* Promise.race( [ promesaLenta(idHeroe1), promesaMediana(idHeroe2), promesaRapida(idHeroe3) ] ).then(console.log);

//promise.all recibe un arreglo de promesas y se ejecuta solo si todas han sido satisfactorias
Promise.all([promesaLenta(idHeroe1), promesaMediana(idHeroe2), promesaRapida(idHeroe3)]).then(console.log); */

//buscarHeroe(idHeroe1).then(console.log).catch(console.warn);
//buscarHeroeAsync(idHeroe3).then(console.log).catch(console.warn);

/* console.time('await');
obtenerHeroeAwait('capi7').then((heroe)=>{
    console.table(heroe);
    console.timeEnd('await');
}); */

heroesCiclo();
heroeIfAwait('iron')
