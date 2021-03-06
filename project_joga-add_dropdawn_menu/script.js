window.addEventListener("DOMContentLoaded", function() {
    
let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

   function hideTabContent(a) {
       for(let i = a; i < tabContent.length; i++) {
           tabContent[i].classList.remove("show");
           tabContent[i].classList.add("hide");
       }
   }

   hideTabContent(1);

   
   function showTabContent(b) {
       if(tabContent[b].classList.contains("hide")) {

        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
    }
       
   }

   info.addEventListener("click", function(e) {
       let target = e.target;

       if(target && target.classList.contains("info-header-tab")) {
           for( let i = 0; i < tab.length; i++) {
               if(target == tab[i]) {
                   hideTabContent(0);
                   showTabContent(i);   
                   break;
               }
           }
       }

   });

   
// TIMER    

  let deadline = "2020-03-20";

     function getTimeRemaining(endtime) {
         let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor((t/1000) % 60),
         minutes = Math.floor((t/1000/60) % 60),
         hours = Math.floor((t/(1000*60*60)));

         return{
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
         };
     }

    function setClock(id, endtime) {
         
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
    
                function addZero(num){
                            if(num <= 9) {
                                return '0' + num;
                            } else return num;
                        }
    
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    
        }
    
        setClock('timer', deadline);
    });

    class User {
        constructor(name, id) {
            this.name = name;
            this.id = id;
            this.humen = true;
        }

        hello() {
            console.log('Hello ${this.name} !!!');
        }
    }

    let Mukola = new User("Mukola", 20);
    console.log(Mukola);

    Mukola.hello();

// Modall



 let more = document.querySelector(".more"), 
     overlay = document.querySelector(".overlay"),
     close = document.querySelector(".popup-close"),
     btn = document.querySelector(".description-btn");


     
    class Modall {

      constructor(name) {
          this.name = name;
      }

        open() {

         overlay.style.display = "block";
         name.classList.add("more-splash");
         document.body.style.overflow = 'hidden';
        }

        clos() {
         overlay.style.display = "none";
         more.classList.remove("more-splash");
         document.body.style.overflow = '';
        }
    }

     more.addEventListener("click", function() {
       new Modall(more).open();
     });

     btn.addEventListener("click", function() {
        new Modall(btn).open();
       
     });

     close.addEventListener("click", function () {
         new Modall(close).clos(); 
     });

     

     
    

