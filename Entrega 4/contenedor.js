const fs = require('fs');
const productos = require('./productos')

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }
    async leerArchivo() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8')
            return console.log(contenido);
        } catch (error) {
            console.log(error);
        }

    };

    async save(producto) {
        const getId = () => {
            const length = 8
            const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            let resultado = ' '
            const charactersLength = letras.length;
            for (let i = 0; i < length; i++) {
                resultado += letras.charAt(Math.floor(Math.random() * charactersLength));
            }
            return resultado
        }
        const id = getId()
        const addID = { id: id, ...producto }
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(addID))
            setTimeout(() => {
                console.log('Escrito correctamente');
                console.log(`El id del archivo es${id}`)
            }, 2000)
        } catch (error) {
            console.log(error);
        }
    }
    // async getById(id,) {
    //     const producto = contenido.find(id === contenido)
    //     return (
    //         producto
    //     )

    // }
}

module.exports = Contenedor







