var money = prompt("Ваш б'юджет на місяць?"),
    // money1 =  prompt("Ваш б'юджет на місяць?"),
    time = prompt("Ведіть дату в форматі YYYY-MM-DD");
    // time1 = prompt("Ведіть дату в форматі YYYY-MM-DD");

   
    var appData = {
        badget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : [],
        savings : false
    };

    appData.expenses[money] = time;
    var bdg1D = alert("Б'юджет на 1 день : " + money/30);
    console.log(appData);