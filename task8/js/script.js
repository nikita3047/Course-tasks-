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
            tabContent[b].classList.remove("hide");
        }
    }

    hideTabContent(1);

    info.addEventListener("click", (event) => {
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

    let deadline = '2020-4-25';

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

    //Модальное окно
    function modalWindow(openModal) {
        let overlay = document.querySelector(".overlay"),
            close = document.querySelector(".popup-close"),
            open = document.querySelectorAll(openModal);

        for (let i = 0; i < open.length; i++) {

            open[i].addEventListener("click", () => {
                overlay.style.display = "block";
                this.classList.add("more-splash");
                document.body.style.overflow = "hidden";
            });

            close.addEventListener("click", () => {
                overlay.style.display = "none";
                this.classList.remove("more-splash");
                document.body.style.overflow = "";
            });
        }
    }

    modalWindow(".more");
    modalWindow(".description-btn");

    //Форма

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!'
    };

    let form = document.querySelector(".main-form"),
        input = document.querySelectorAll("input"),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);
        
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        input.forEach((item) => {
            item.value = '';
        });
    });
});