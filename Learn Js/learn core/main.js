// Practice Form Validation

var form = document.getElementById("register");
form.addEventListener("submit", function(event) {
    var phone_input = document.getElementById("phone").value;
    var phone_regex = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    if (phone_regex.test(phone_input)) {
        return true;
    }
    event.preventDefault();
    return false;
});





