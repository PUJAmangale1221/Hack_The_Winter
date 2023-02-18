let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var doctors = setInterval(doctorsatwork, 10)
var clients = setInterval(happyClients, 10)
var beds = setInterval(bedsavailable, 10)
var hospitals = setInterval(hospitalsavailable, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;
function doctorsatwork() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 140) {
        clearInterval(doctors)
    }
}
function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 1040) {
        clearInterval(clients)
    }
}
function bedsavailable() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 500) {
        clearInterval(beds)
    }
}
function hospitalsavailable() {
    count4++
    document.querySelector("#number4").innerHTML = count4
    if (count4 == 80) {
        clearInterval(hospitals)
    }
}