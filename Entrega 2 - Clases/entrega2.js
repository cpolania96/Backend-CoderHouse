class Usuario {
    constructor(nombre, apellido, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas

    }
    getFullName = () => `${this.nombre} ${this.apellido}`
    addMascota = () => { }
    // countMascotas = () => this.mascotas.lenght()
    addBook = () => { }
    getBookNames = () => `${this.libros}`
}



const usuario1 = new Usuario("Camilo", "Polania", ["Sapiens: De humanos a dioses", "Asi hablaba Zaratustra", "El anticristo", "Reencarnación", "Mein Kampf"])
console.log(usuario1.getFullName())
console.log(usuario1.libros)
