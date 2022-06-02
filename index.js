var Minecraft = 4500
var GtaV = 5000
var BattlefieldV = 4500 
var WarThunder = 15000 
var RocketLeague = 2500 
var CallofDutyModernWarfare = 3500 
var CallofDutyWarzone = 7999
var ApexLegends = 7599 
var Valorant = 4999 




function reg(username, password, password2)
{
    if(username != "")
    {
        if(password != "")
        {
            if(password == password2)
            {
                localStorage.setItem("user", username)
                localStorage.setItem("passw", password)
                alert("Regisztráció sikeres.")
            }
            else
            {
                alert("Sikertelen regisztráció.")
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
    else if(felh !=  localStorage.getItem("user"))
    {
      document.getElementById('uzenet').innerHTML = "Téves felhasználónév vagy jelszó."
    } 
    if (jelsz != localStorage.getItem("passw"))
    {
        document.getElementById('uzenet').innerHTML = "Téves felhasználónév vagy jelszó."
    }
}

