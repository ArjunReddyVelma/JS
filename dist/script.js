function showMessage() {
    return "Hello from JavaScript!";
}

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("message").textContent = showMessage();
});
