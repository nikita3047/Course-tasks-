let menu = document.querySelectorAll(".menu"),
    menuitems = document.querySelectorAll(".menu-item"),
    col2 = document.querySelectorAll(".column")[1],
    title = document.querySelectorAll(".title"),
    answer = document.querySelectorAll("#prompt");

let li = document.createElement("li");
li.textContent = "Пятый пункт";
li.classList.add("menu-item");
menu[0].appendChild(li);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
menu[0].insertBefore(menuitems[2], menuitems[1]);
col2.removeChild(document.querySelector(".adv"));
title[0].textContent = "Мы продаем только подлинную технику Apple";
answer[0].textContent = prompt("Как вы относитесь к технике Apple?");