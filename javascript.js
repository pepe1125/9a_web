var termek01 = 15500
var termek02 = 6999
var termek03 = 29880


function hozzaad(termek) {
    db = Number(prompt('Mennyit kérsz?'))
    localStorage.setItem(termek,db)
}

function torles() {
    localStorage.clear()
}


function reg(username, password, password2)
{
    if(username != " ")
    {
        if(password != " ")
        {
            if(password == password2)
            {

                localStorage.setItem(username, password)
                alert("Regisztráció sikeres.")
            } 
        }
    }
}

function bej(user, pass)
{
    if (user != " ")
    {
        if (pass != " ")
        {
            if()
            {
                alert("Belépés sikeres!");
            }    
        }
    }
    else 
    {
        alert("Nincs ilyen felhasználó");
    }
}
