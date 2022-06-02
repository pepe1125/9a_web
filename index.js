var Minecraft = 4500
var GtaV = 5000
var BattlefieldV = 4500 
var WarThunder = 15000 
var RocketLeague = 2500 
var CallofDutyModernWarfare = 3500 
var CallofDutyWarzone = 7999
var ApexLegends = 7599 
var Valorant = 4999 

function termek01()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Gta V', GtaV);
}

function termek02()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Minecraft', Minecraft);
}

function termek03()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('War Thunder', WarThunder);
}

function termek04()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Rocket League', RocketLeague);
}

function termek05()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Call of Duty: Modern Warfare', CallofDutyModernWarfare);
}

function termek06()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Call of Duty: Warzone', CallofDutyWarzone);
}

function termek07()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Battlefield V', BattlefieldV);
}

function termek08()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Apex Legends', ApexLegends);
}

function termek09()
{
    alert("Ezt a terméket a kosárba tettük!");
    localStorage.setItem('Valorant', Valorant);
}


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

