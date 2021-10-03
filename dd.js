let box = document.querySelectorAll(".box");
let savolsoni = document.querySelector(".sanoq");
let glass = document.querySelector(".glass");
let question = document.querySelector(".questions");
let natijam = document.querySelector("#natijam");
let natija2 = document.querySelector(".natija");
let abs = document.querySelector(".abs");



let aa = "";
box.forEach(box => {
    box.addEventListener("click", function() {
        glass.style.display = "none"
        question.style.display = "block";
        aa = this.className;
        aa = aa.slice(4, 6)
        console.log(aa);
        find(aa)

    })
})

sanoq = 1;
let result = 0;

let an1 = document.querySelector("#question");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");


function zz1() {
    sanoq++;
    result++;
    if (sanoq <= 5) {
        savolsoni.textContent = sanoq + "/5"
        find(aa);
    } else {
        question.style.display = "none";
        natija2.style.display = "block";
        natijam.textContent = "5 ta savoldan " + result + " ta tog`ri javob"
    }
}

function restart() {
    location.reload();
}

function zz2() {
    sanoq++;
    if (sanoq <= 5) {
        savolsoni.textContent = sanoq + "/5"
        find(aa);
    } else {
        question.style.display = "none";
        natija2.style.display = "block";
        natijam.textContent = "5 ta savoldan " + result + " ta tog`ri javob"
    }
}

abs.addEventListener("click", function() {
    question.style.display = "none";
    natija2.style.display = "block";
    natijam.textContent = "5 ta savoldan " + result + " ta tog`ri javob"

})

function zz3() {
    sanoq++;
    if (sanoq <= 5) {
        savolsoni.textContent = sanoq + "/5"
        find(aa);
    } else {
        question.style.display = "none";
        natija2.style.display = "block";
        natijam.textContent = "5 ta savoldan " + result + " ta tog`ri javob"
    }
}

function find(param) {
    switch (param) {
        case "b1":

            switch (sanoq) {
                case 1:
                    an1.innerText = "1 -savol Html bu:"
                    answer1.innerText = "hyper text markup language";
                    answer2.innerText = "dasturlash tili";
                    answer3.innerText = "Home tool markup language";
                    break;
                case 2:
                    an1.innerText = "2 -savol Html da <title> tegining vazifasi"
                    answer1.innerText = "sarlavha qo`yish";
                    answer2.innerText = "yozuv rangi o`zgartirish";
                    answer3.innerText = "orqa fon rangini o`zgartirish";
                    break;
                case 3:
                    an1.innerText = "3 -savol qo`shimcha qator qo`shuvchi teg:"
                    answer1.innerText = "<br>";
                    answer2.innerText = " <hr>";
                    answer3.innerText = "<dr>";
                    break;
                case 4:
                    an1.innerText = "4-savol yozuvni qalin qilib chiqaruvchi teg:"
                    answer1.innerText = "<strong>";
                    answer2.innerText = "<italic>";
                    answer3.innerText = "<em>";
                    break;
                case 5:
                    an1.innerText = "5 -savol htmlda link qaysi teg yordamida beriladi"
                    answer1.innerText = " <a>";
                    answer2.innerText = "<link>";
                    answer3.innerText = "<li>";
                    break;

                default:
                    break;
            }

            break;
        case "b2":

            switch (sanoq) {
                case 1:
                    an1.innerText = "Css ning to`liq nomi"
                    answer1.innerText = "Cascading Style Sheets";
                    answer2.innerText = "Creative Style sheets";
                    answer3.innerText = "Colorful Style Sheets";
                    break;
                case 2:
                    an1.innerText = "Selectorlarning necha xil turi bor"
                    answer1.innerText = "5 xil";
                    answer2.innerText = "3 xil";
                    answer3.innerText = "6 xil";
                    break;
                case 3:
                    an1.innerText = "id selectorining specificity si qancha"
                    answer1.innerText = "1 0 0";
                    answer2.innerText = "0 0 1";
                    answer3.innerText = "0 1 0";
                    break;
                case 4:
                    an1.innerText = "Cambinatorslarning turlari nechta"
                    answer1.innerText = "4 ta";
                    answer2.innerText = "10 ta ";
                    answer3.innerText = "3 ta";
                    break;
                case 5:
                    an1.innerText = "matndagi underlineni olib tashlovchi code"
                    answer1.innerText = "text-decoration:none";
                    answer2.innerText = "text-decoration:no-underline";
                    answer3.innerText = "text:no-underline";
                    break;

                default:
                    break;
            }

            break;
        case "b3":
            switch (sanoq) {
                case 1:
                    an1.innerText = "Savollar yo`q"
                    answer1.innerText = "Empty";
                    answer2.innerText = "Empty";
                    answer3.innerText = "Empty";
                    break;
                case 2:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 3:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 4:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 5:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;


                default:
                    break;
            }
            break;
        case "b4":
            switch (sanoq) {
                case 1:
                    an1.innerText = "Savollar yo`q"
                    answer1.innerText = "Empty";
                    answer2.innerText = "Empty";
                    answer3.innerText = "Empty";
                    break;
                case 2:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 3:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 4:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;
                case 5:
                    an1.innerText = ""
                    answer1.innerText = "";
                    answer2.innerText = "";
                    answer3.innerText = "";
                    break;

                default:
                    break;
            }
            break;

        default:
            break;
    }

}