
document.addEventListener("DOMContentLoaded", function() {

    var greetButton = document.getElementById("greetButton");

    
    greetButton.addEventListener("click", function() {
        showGreeting();
    });
});


function showGreeting() {
    var name = document.getElementById("name").value;

    if (name.trim() !== "") {
        var greeting = "Hello, " + name + "!";
        document.getElementById("greeting").innerText = greeting;
    } else {
        alert("Please enter your name!");
    }
}
