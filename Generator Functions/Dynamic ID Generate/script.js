function* generFunc() {
    let i = 100;
    while (i<110) {
        i++;
        yield i
    }

}

const sG = generFunc();

function newFunc() {
    document.getElementById("newId").innerHTML = sG.next().value;
    console.log(sG.next().value);
}

