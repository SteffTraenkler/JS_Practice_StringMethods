console.log("Lev1_1");

let firstName = "Daisuke";
let lastName = "Andou";

console.log(firstName.length);
console.log(lastName.length);

let fullName = `$firstName $lastName`;
console.log(fullName.length);

console.log(" ");
console.log("Lev1_2");
const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.'
console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

console.log(" ");
console.log("Lev1_3");
var txt2 = 'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.'
console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

console.log(" ");
console.log("Lev1_7");
const text = 'Sam is good at codingschool';
console.log(text);
console.log(text.replace("good", "bad"));
console.log(text.replace("Sam", "Susi"));
console.log(text.replace("codingschool", "tennis"));

var bad = text.replace("good", "bad");
var Susi = text.replace("Sam", "Susi");
var tennis = text.replace("codingschool", "tennis");

document.write(text + "<br>");
document.write(bad + "<br>");
document.write(Susi + "<br>");
document.write(tennis + "<br>");

console.log(" ");
console.log("Lev1_8");
const text8 = 'Sam is going to school';
console.log(text8.indexOf("school"));
let x = document.getElementById("whatTheFuck");

const words = text8.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

x.innerHTML = `Lev1_8 <br> <br>` + text8.toUpperCase() + `<br>` + text8.replace("to", "at").toLowerCase() + `<br>` + text8.toUpperCase("Sam", "school") + `<br>` + text8.substring(0, 3).toUpperCase() + text8.substring(3, 16) + text8.substring(16, 22).toUpperCase() + `<br>` + text8.substring(0, 3).toLowerCase() + text8.substring(3, 16).toUpperCase() + text8.substring(16, 22) + `<br>` + words.join(" ") + `<br> <br> Lev1_7`;

