const Contenedor = require('./contenedor')
const productos = require('./productos')
// const productos2 = require('./productos')

const Producto1 = new Contenedor('productos.txt')
// Producto1.leerArchivo()
// Producto1.deleteAll()

const main = async () => {
    // await Producto1.deleteAll()
    await Producto1.save({ title: "Bálsamo curativo para perros", price: 35000, tumbnail: "img" })

}
main()
