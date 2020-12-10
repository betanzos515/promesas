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


export const buscarHeroe = ( id, callback )=>{
    const heroe = heroes[id];
    if(heroe){
        callback(null,heroe);
    }else{
        callback(`No se ah encontrado el personaje con el id ${id}` );
    }
}