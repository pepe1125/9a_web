'use strict';

var ara = 0

document.write('<br>')
document.write('<table border=2px; class=table-bordered>')
document.write('<tr><th>Termék neve</th><th>Ára</th></tr>');
if(localStorage.getItem('Gta V')){
    document.write('<tr><td>Gta V</td><td>'+GtaV+' '+'Ft</td></tr>')
    var termek1 = ara+GtaV
}
else {
    termek1 =ara+0
}
if(localStorage.getItem('Minecraft')){
    document.write('<tr><td>Minecraft</td><td>'+Minecraft+' '+'Ft</td></tr>')
    var termek2 = ara+Minecraft
} 
else {
    termek2 = ara+0
}
if(localStorage.getItem('War Thunder')){
    document.write('<tr><td>War Thunder</td><td>'+WarThunder+' '+'Ft</td></tr>')
 var termek3 = ara+WarThunder
}
else{
    termek3 = ara+0
}
if(localStorage.getItem('Rocket League')){
    document.write('<tr><td>Rocket League</td><td>'+RocketLeague+' '+'Ft</td></tr>')
 var termek4 = ara+RocketLeague
} 
else{
    termek4 = ara+0
}
if(localStorage.getItem('Call of Duty: Modern Warfare')){
    document.write('<tr><td>Call of Duty: Modern Warfare</td><td>'+CallofDutyModernWarfare+' '+'Ft</td></tr>')
 var termek5 = ara+CallofDutyModernWarfare
}
else {
    termek5 = ara+0
}
if(localStorage.getItem('Call of Duty: Warzone')){
    document.write('<tr><td>Call of Duty: Warzone</td><td>'+CallofDutyWarzone+' '+'Ft</td></tr>')
 var termek6 = ara+CallofDutyWarzone
} 
else {
    termek6 = ara+0
}
if(localStorage.getItem('Battlefield V')){
    document.write('<tr><td>Battlefield V</td><td>'+BattlefieldV+' '+'Ft</td></tr>')
 var termek7 = ara+BattlefieldV
}
else{
    termek7 = ara+0
}
if(localStorage.getItem('Apex Legends')){
    document.write('<tr><td>Apex Legends</td><td>'+ApexLegends+' '+'Ft</td></tr>')
 var termek8 = ara+ApexLegends
}
else{
    termek8 = ara+0
}
if(localStorage.getItem('Valorant')){
    document.write('<tr><td>Valorant</td><td>'+Valorant+' '+'Ft</td></tr>')
 var termek9 = ara+Valorant
}
else{
    termek9 = ara+0
}

var osszeg = termek1+termek2+termek3+termek4+termek5+termek6+termek7+termek8+termek9
document.write("<tr><th>Összesen</th><th id=osszesen></th></tr>")
document.write('</table>')
document.getElementById('osszesen').innerHTML = osszeg+' '+'Ft'
