
let age = document.getElementById('age');

 


age.addEventListener( "change", function() {


showUser.apply(age, ["Kutsil", "Mukola"]);
    

});
function showUser(surname, name) {
    
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}



 




// showUser(surname, name)) {
	// alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser();

