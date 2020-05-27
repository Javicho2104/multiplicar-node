//Requires
const fs = require('fs');

const num = 2;

let listarTabla = (base, limite) => {
    return new Promise ( (resolve,reject) => {
        if( !Number(base) && !Number(limite) ){
            reject(`El valor introducido ${base} o ${limite} no son nuermos`);
        }

        let data = '';

        for(let i=1; i<=limite; i++){
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if(err){
                reject(err);
            }else{
                resolve(`tabla-${base}/${limite}.txt`);
            }
        });
    });
}


let crearArchivo = (base) => {
    return new Promise ( (resolve,reject) => {

        if( !Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for( let i=1; i<=10; i++ ){
            data += (`${base} * ${i} = ${base*i}\n`);
        }



        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err){
                reject(err);
            }else{  
                resolve(`tabla-${base}.txt`);
            }
         });
    });
}


module.exports = {
    crearArchivo,
    listarTabla,
    num
}




