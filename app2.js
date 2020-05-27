const argv = require('yargs')
.command('listar','Imprime en consola la tabla de muntiplicar',{
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.help()
.argv;

const {crearArchivo} = require('./multiplicar/multiplicar.js');
const {listarTabla} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then( archivo => {
            console.log(`Archivo creado: ${archivo}`);
        })
        .catch(e => {
            console.log(e);
        })
        break;
    
    case 'crear':
            crearArchivo(argv.base)
            .then( archivo => {
                console.log(`Archivo creado: ${archivo}`);
            })
            .catch(e => {
                console.log(e);
            });
        break;
    
    default:
        console.log('Comando no reconocido');

}

console.log(argv);
// console.log(`Base: ${argv.base}, límite: ${argv.l}`);


//.command('EL PARAMETRO A MANDAR POR CMD', 'EL HELP QUE TE IMPRIME')