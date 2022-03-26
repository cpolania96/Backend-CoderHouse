const Contenedor = require('./contenedor')
const productos = require('./productos')
// const productos2 = require('./productos')

const Producto1 = new Contenedor('productos.txt')
// Producto1.leerArchivo()
// Producto1.deleteAll()

const main = async () => {
    await Producto1.deleteAll()
    // await Producto1.save({ title: "Limpiador otico", price: 40000, tumbnail: "img" })
    // await Producto1.save({ title: "Bálsamo curativo", price: 80000, tumbnail: "img2" })
    // await Producto1.getById(1)
    // await Producto1.deleteById(1)
    // await Producto1.getAll()


}
main()
