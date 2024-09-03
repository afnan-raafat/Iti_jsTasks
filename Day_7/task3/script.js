
function setCookie(key, value, expirationDate){
        expirationDate ||= curDate; // expirationDate = expirationDate || curDate;
        document.cookie = key+"="+value+";expires="+expirationDate;
    }

function getCookie(key) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=");
        if (key === cookie[0]) {
            return cookie[1];
        }
    }
    return null;
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var color = document.getElementById('color').value;

    
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);

    setCookie('name', name, expireDate);
    setCookie('age', age, expireDate);
    setCookie('gender', gender, expireDate);
    setCookie('color', color, expireDate);

   
    window.location.href = 'welcome.html';
});
