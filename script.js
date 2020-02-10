    var money = +prompt("Ваш б'юджет на місяць?"),
        time = prompt("Ведіть дату в форматі YYYY-MM-DD");



    var appData = {
        badget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
    };

    add();
       function add() {  
           
        for(var i = 0; i < 2; i++) {     
            var a = prompt("Ведіть росходи за цей місяць"),
                b = prompt("Скільки ви витратите?");
        
        
        if( (typeof(a) === "string" && typeof(a))!= null && (typeof(b))!= null && a!="" 
             && b!="" && a.length < 50){
            console.log("God");
            appData.expenses[a] = b;
            break;
        } else {
         console.log("dwadwa")
         add();
            //    for(var j = 0; j < 2; j++) {
        //     var a = +prompt("Ведіть росходи за цей місяць"),
        //         b = prompt("Скільки ви витратите?");
        //    }
        
        }
    }
 }

    if(money < 2000) {
        console.log("Мало грн")
    } else if(money === 2000 ) {
        console.log("Достатньо грн")
    } else if(money > 2000) {
        console.log("Багато грн")
    };

    var bdg1D = alert("Б'юджет на 1 день : " + money/30);