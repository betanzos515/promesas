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

export const buscarHeroe = ( id )=>{
    const heroe = heroes[id];
    return new Promise((resolve, reject)=>{
        if(heroe){
            setTimeout(()=>resolve(heroe),1000);
        }else{
            reject(`No existe el héroe con el id ${ id }`);
        }
    });
}

//async transforma a una funcion asincrona con solo poner async en la firma del metodo
export const buscarHeroeAsync =async ( id )=>{
    const heroe = heroes[id];
    if(heroe){
        return heroe;
    }else{
        throw Error(`No existe un héroe con el id ${id}`);
    }
}