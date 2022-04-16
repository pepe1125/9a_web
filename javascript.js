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
                localStorage.setItem("user", username)
                localStorage.setItem("passw", password)
                alert("Regisztráció sikeres.")
            }
        }
    }
}


function bej(felh, jelsz) 
{
    localStorage.getItem("user");
    localStorage.getItem("passw");
    if(felh ==  localStorage.getItem("user")){
        if(jelsz == localStorage.getItem("passw")){
            alert("Belépés sikeres.");
        }
    } 
    else if(felh !=  localStorage.getItem("user")){
      document.getElementById('uzenet').innerHTML = "Téves felhasználónév vagy jelszó."
    } if (jelsz != localStorage.getItem("passw")){
        document.getElementById('uzenet').innerHTML = "Téves felhasználónév vagy jelszó."
    }
}