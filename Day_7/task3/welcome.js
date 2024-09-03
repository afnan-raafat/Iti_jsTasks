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

function setCookie(key, value, expirationDate){
    expirationDate ||= curDate; 
    document.cookie = key+"="+value+";expires="+expirationDate;
}

function showWelcomeMessage() {
    var name = getCookie('name');
    var gender = getCookie('gender');
    var visitCount = getCookie(name + ' visits') || 0;

    var genderImage = document.getElementById('genderImage');
     /// الصورة 
    if (gender === 'male') {
        genderImage.src = './boy.jpg';
    } else if (gender === 'female') {
        genderImage.src = './girl.jpg';
    }

    var mm = document.getElementById('welcomeMessage');
   mm.innerText = 'Welcome, ' + name + '!';
    visitCount = Number(visitCount) + 1;
    document.getElementById('visitCount').innerText = 'You have visited this page ' + visitCount + ' times with the same name.';

    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);
    setCookie(name + ' visits', visitCount, expireDate);
}
showWelcomeMessage();
