let name = prompt (`Prenom :`)

function sayHello(firstname, hour){


    let messageJour = `Bonjour ${firstname} !`
    let messageNuit = `Bonsoir ${firstname} !`

    if (hour >= 18){
        /* console.log(messageNuit) */
        document.querySelector('h1').innerText = messageNuit;
    }
    else {
        /* console.log(messageJour) */
        document.querySelector('h1').innerText = messageJour;
    }

//message = message + firstname = Bonjour ! Beyonce,  Donc pas dingue
/* message = `Bonjour ${firstname} !`
console.log(message) */

}

/* let firstname = 'Beyonce'
sayHello(firstname, 11)
sayHello(firstname, 18)
sayHello(firstname, 17) */

sayHello (name, 21)