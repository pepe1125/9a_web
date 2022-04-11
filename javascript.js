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
                let options = 
                {
                  "adatok":[username, password, "1nev", "2jelszo"]
                }
                let str = JSON.stringify(options)
                
            }
        }
    }
}


function bej(user, pass)
{
    let options = 
    {
        "adatok":[username, password, "1nev", "2jelszo"]
    }
        console.log(options);
        let obj = JSON.parse(options);
        console.log(obj);
    if(console.log(obj.adatok[0]) == user)
    {
        if(console.log(obj.adatok[1]) == pass)
        {
            alert("Belépés sikeres.");
        }
        else 
        {
            alert("Belépés sikertelen.");
        }
    }
}