let currentIndex = 0;

buttonHandler();
GetImageName();

function buttonHandler() {
    var points = 0;
    var sumpoints = 0;
    var allButtons = document.querySelectorAll('button[class=klikkelheto-tartalom]');
    console.log("found it", allButtons.length);
    var clicked;
    var uniqdate = Date.now();

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            clicked = this.innerHTML;
            console.log("You clicked:", clicked);
            sumpoints = sumpoints + 1;
            console.log("First letter=" + GetFirstLetter(document.getElementById("mnistImage").src));
            console.log("GetImageName" + GetImageName());
            if (this.innerHTML == GetImageName()) {
                points = points + 1;
                console.log("asd" + points);
            }
            fetchData().then(arr => {
                var pic_url = arr[getRandomInt(5000)];
                var prev_pic = document.getElementById("mnistImage").src;
                document.getElementById("mnistImage").src = "auth/img/mnist/" + pic_url;
                console.log(pic_url);
                InsertData(prev_pic.split('\\').pop().split('/').pop(), clicked, uniqdate);
            });

            currentIndex++; // Increment the current index
            document.getElementById("currentIndex").innerText = currentIndex;

            console.log(points + "/" + sumpoints);
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function InsertData(url, answer, testID, uid = 1) {
    fetch('/meres', {
        method: 'POST',
        body: JSON.stringify({
            pictureurl: url,
            answer: answer,
            UID: uid,
            testID: testID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json());
}

function GetText(text) {
    console.log("Current: " + text);
}

function fetchData() {
    return fetch('/api', {})
        .then(response =>
            response.json());
}

function GetImageName() {
    filename = document.getElementById("mnistImage").src.replace(/^.*[\\\/]/, '').charAt(0);
    return filename;
}

function GetFirstLetter(str) {
    str = str.split('\\').pop().split('/').pop().charAt(0);
    return str;
}
