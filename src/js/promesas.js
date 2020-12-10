const heroes = {
    capi:{
        nombre:'Capitán America',
        poder:'Aguantar Inyecciones sin morir'
    },
    iron:{
        nombre:'Ironman',
        poder:'Absurda Cantidad de Dinero'
    },
    spider:{
        nombre:'Spiderman',
        poder:'La mejor reaccion alergica a las picaduras de las arañas'
    }
}

/* export const buscarHeroe = (id)=>{
    const heroe = heroes[id];
    //las promesas reciben como parametro un callback
    return new Promise((resolve,reject )=>{
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el ID ${id}`);
        }
    });
} */

const promesaLenta = (id)=>{
    const heroe = heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){ setTimeout(()=>{ resolve(heroe); },3000);}
    });
}

const promesaMediana = (id)=>{
    const heroe = heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){ setTimeout(()=>{ resolve(heroe); },1500);}
    });
}

const promesaRapida = (id)=>{
    const heroe = heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){ setTimeout(()=>{ resolve(heroe); },1000);}
    });
}

export {
    promesaLenta,
    promesaMediana,
    promesaRapida,
}



