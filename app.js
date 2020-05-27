const argv = require('yargs').argv;
    // .command('listar','Imprime en consola la tabla de multiplicar', {
    //     base: {
    //         demand: true,
    //         alias: 'b',
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10
    //     }
    // })
    // .help
    // .argv;
let argv2 = process.argv;


console.log(argv.base);
console.log(argv2);
// const {crearArchivo} = require('./multiplicar/multiplicar.js');









// let comando = argv._[0];

// switch( comando ) {
//     case 'listar':
//         console.log('Listar');
//     break;

//     case 'crear':
//         console.log('crear');
//     break;

//     default:
//         console.log('Comando no reconocido');

// }







// let base = '5';
// const multiplicar = require('./multiplicar/multiplicar');
// multiplicar.crearArchivo(base)

// console.log(process.argv);
// let argv2 = process.argv;
// El argv(argumentos) te muestra los parametros que envias al cmd
// console.log(argv.base);
// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);




// crearArchivo(base)
// .then( archivo => {
//     console.log(`Archivo creado: ${archivo}`);
// })
// .catch(e => {
//     console.log(e);
// });





// let data = '';

// for( let i=1; i<=10; i++ ){
//     data += (`${base} * ${i} = ${base*i}\n`);
// }



// fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
//     if (err) throw err;
//     console.log('El archivo ha sido creado');
//   });

    