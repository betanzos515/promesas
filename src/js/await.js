
import { buscarHeroeAsync, buscarHeroe} from "./async";

const heroesId = ['capi','iron','spider'];

const heroesPromesas = heroesId.map(buscarHeroe);

export const obtenerHeroesArr = async ()=>{
    /* const heroesArr = [];
    for(const id of heroesId){
        heroesArr.push( buscarHeroe(id) ); 
    }
    
    return await Promise.all(heroesArr); */
        return await Promise.all(heroesId.map(buscarHeroe));
}

export const obtenerHeroeAwait = async (id)=> {

    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        
        console.log('catch !!!');
        return {
            nombre:'Sin Nombre',
            poder:'Sin Poder'
        }
    }
} 

export const heroesCiclo = async ()=>{
    console.time('heroes');
    const heroes = await Promise.all(heroesPromesas); //que pasaria si nosotros queremos realizar las peticiones una por una
    //puedieramos dar solucion de la siguiente forma
    heroes.forEach(heroe=>{
        //console.log(heroe);
    });
    //existe una forma de resumir el PromiseAll y al mismo tiempo recorrer con un ciclo como podemos ver estamos haciendo uso del await mientras se realizan las iteraciones
    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }

    //console.table(heroes);
    console.timeEnd('heroes');
}

export const heroeIfAwait = async(id)=>{
    if( (await buscarHeroeAsync(id)).nombre ==='Ironman' ){
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaaaa');
    }
}