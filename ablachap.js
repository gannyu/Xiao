var aray = [
    "123.jpg", "ddtwqf5-4c734a7e-97b5-4895-8d94-113e821b805f.jpg",
    "z3184051442013_22d59c7703881ff9c92a9774fae3b443.jpg",
];
var i = 0;
var simile = document.getElementById("ss");

function chiu() {
    i--;
    if (i < 0) {
        i = aray.length - 1;
        number.innerText = 2;
    }
    simile.src = "img/" + aray[i];
    number.innerText--;

}

function chius() {
    i++;
    if (i >= aray.length) {
        i = 0;
        number.innerText = 0;
    }
    simile.src = "img/" + aray[i];
    number.innerText++;
}