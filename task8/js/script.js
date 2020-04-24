window.addEventListener("DOMContentLoaded", () => {

    //Табы

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.add("show");
            tabContent[b].classList.show("hide");
        }
    }

    hideTabContent(1);

    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Таймер

    let deadline = '2000-4-23';

    function getTimeRemaining(endtime) {
        let tmp = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((tmp / 1000) % 60),
            minutes = Math.floor((tmp / 1000 / 60) % 60),
            hours = Math.floor(tmp / 1000 / 60 / 60);

        return {
            'total': tmp,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.querySelector('#' + id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let tmp = getTimeRemaining(endtime);
            hours.textContent = ((tmp.hours < 10) ? '0' : '') + tmp.hours;
            minutes.textContent = ((tmp.minutes < 10) ? '0' : '') + tmp.minutes;
            seconds.textContent = ((tmp.seconds < 10) ? '0' : '') + tmp.seconds;

            if (tmp.total < 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
});