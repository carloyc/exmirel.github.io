//const save = () => {
//const nombre = document.getElementById("result")
//const name = document.getElementById("name").value
// const username = document.getElementById("username").value

//console.log(name)
//console.log(username)

//    result.innerHTML = `Hola ${name} tu nombre de usuario es ${username}`
//}

const jsonMovie = [
    {
        name: "Bob Esponja",
        createBy: "1999-05-12",
        author: "john cena",
        address: {
            street: "Palo escrito",
            Number: 8
        }
    },
    {
        name: "Spiderman",
        createBy: "2021-05-12",
        author: "Sony"
    }
]
console.log(jsonMovie[0].name);

const s = () => {
    fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
}





const profile = {
    username: "CarloYC",
    name: "Carlo",
    surname: "carmona",
    secondsurname: "Ruiz",
    address: {
        street: "Palo Escrito",
        Number: 10,
        longlat: {
            longitude: 166123,
            latitude: 123455
        }
    },
    school: {
        name: "Universidad Tecnologica Emiliano Zapata",
    },
    phone: "7971109248",
    email: "carlocaru06@gmail.com",
    photo: "https://media.giphy.com/media/RIW67PlKDqV3MM39Dq/giphy.gif"

}
const { username, name, surname, secondsurname, email, photo, address: { longlat: { longitude, latitude } } } = profile
console.log(username)
console.log(name)
console.log(surname)
console.log(secondsurname)
console.log(email)
console.log(longitude)
console.log(latitude)
console.log(photo)
const save = () => {
    const nombre = document.getElementById("result")




    result.innerHTML = `Hola ${username} tu nombre real es  ${name}  ${surname}  ${secondsurname} tu email: ${email} te ubicas en la latitud ${latitude} y longitud ${longitude} `
}
//nombre, primer apellido, segunso apellido,correo electronico, latitud, longitud

