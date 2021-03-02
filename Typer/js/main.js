var charList;
var log = [];
var wordcount;

getSentence();

function getSentence() {
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
        .then(response => response.json())
        .then(data => {
            var string = data.quotes[0].text;

            charList = [...string];
            var output = "";

            for (let i = 0; i < charList.length; i++) {
                output += "<span>" + charList[i] + "</span>";
            }

            wordcount = string.split(" ").length;
            document.querySelector(".form-control").value = "";
            document.querySelector(".sentence").innerHTML = output;
        })
};

function readSentence(e) {
    log = [...e.value];

    for (let i = 0; i < log.length; i++) {
        if (log[i] == charList[i]) {
            document.querySelector(".sentence").children[i].className = "bg-success";
        } else {
            document.querySelector(".sentence").children[i].className = "bg-danger";
        }
    }

    for (let i = log.length; i < charList.length; i++) {
        document.querySelector(".sentence").children[i].className = "";
    }

    if (JSON.stringify(log) == JSON.stringify(charList)) {

        getSentence();
    }
}