function submitForm() {
    var form = document.getElementById("myForm");
    var choice = form.elements["choice"].value;
    document.getElementById("result").innerHTML = "You chose: " + choice + " ... name the place ";
}
