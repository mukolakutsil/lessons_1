    var money, time;

    function start() {
        money = +prompt("Ваш б'юджет на місяць?"),
        time = prompt("Ведіть дату в форматі YYYY-MM-DD");
       
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш б'юджет на місяць?");
        }
    }

    start();


    var appData = {
        badget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : true
    };
           
    function chooseExpenses() {
        for(var i = 0; i < 2; i++) {     
            var a = prompt("Ведіть росходи за цей місяць"),
                b = prompt("Скільки ви витратите?");
        
        
        if( (typeof(a) === "string" && typeof(a))!= null && (typeof(b))!= null && a!="" 
             && b!="" && a.length < 50){
            console.log("God");
            appData.expenses[a] = b;
            break;
        } else {
         i = i - 1;
        
    }
 }
    }

    chooseExpenses();

    function detectLevel() {
    if(money < 3000) {
        console.log("Мало грн")
    } else if(money > 3000 && money < 6000 ) {
        console.log("Достатньо грн")
    } else if(money > 6000) {
        console.log("Багато грн")
    } else{
        console.log("Щось пішло не так(")
    }
}
    detectLevel();

    function detectDayBudget() {
    var manyDey =  (money/30).toFixed();
    var bdg1D = alert("Б'юджет на 1 день : " + manyDey);
    }
    detectDayBudget();

    function checkSavings() {
        if(appData.savings === true) {
            let save = +prompt("Ведіть суму ваших зберігань"),
                parcent = prompt("Під які проценти?");
                appData.monthIncome = save/100/12*parcent;
                alert("Дохід в місяць з вашого депозиту: " + (appData.monthIncome).toFixed());
             
        }
    }
    checkSavings();

    function chooseOptExpenses() {
        for(var j = 1; j <= 3; j++) {
           var qestunsh = prompt("Необовязкові витрати?");
           appData.optionalExpenses[j] = qestunsh;
        }
    }
    chooseOptExpenses();