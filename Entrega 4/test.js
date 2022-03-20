const Contenedor = require('./contenedor')
const productos = require('./productos')


const Producto1 = new Contenedor('productos.txt')

Producto1.save(productos[0])

