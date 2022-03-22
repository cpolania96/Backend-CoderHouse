const fs = require('fs');
const productos = require('./productos')

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo
    }
    async readFile() {
        try {
            const contenido = await fs.promises.readFile(this.archivo, 'utf-8')
            return (
                JSON.parse(contenido))
        } catch (error) {
            console.log(error);
        }
    };

    async save(producto) {

        try {
            let contenido = await this.readFile()
            console.log(contenido)
            producto.id = contenido[contenido.length - 1].id + 1
            console.log(producto);
            let addContenido = contenido.push(producto)
            await fs.promises.writeFile(this.archivo, JSON.stringify(addContenido))
            console.log('Escrito correctamente')
            console.log(`El id del archivo es ${producto.id}`)
        } catch (error) {
            console.log(error)
        }
    }
    async getById() {

    }
    async getAll() {

    }
    async deletebyId() {

    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archivo, "[]")
            console.log('Contenido borrado');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Contenedor







