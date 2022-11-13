alert("hello world")
alert("welcome to my website")

var English = +prompt("English", "Enter your marks")
var Islamiat = +prompt("Islamiat", "Enter your marks")
var Urdu = +prompt("Urdu", "Enter your marks")
var Maths = +prompt("Maths", "Enter your marks")
var Science = +prompt("Science", "Enter your marks")
var Totalmarks = English+Islamiat+Urdu+Maths+Science;
var percentage = (Totalmarks/500)*100
console.log(percentage)


var age = prompt("Enter your Age");
var studentcard = false;

if(age > 18){
    console.log("Student Allow")
}
else if (studentcard == true){
    console.log("Student Allow")
}
else{
    console.log("student not Allow")
}



var officer = true;
var assistant = true;

if(officer == true){
    console.log("Docment Submitted to officer");
}
else if (assistant == true){
    console.log("Docment submitted to assistant");
}
else{
    console.log("wapsi")
}





var marks = prompt("marks")
if(marks >=50 && marks <=60){
    console.log("c")
}
else if(marks >=65 && marks <=70){
    console.log("B")
}
else if(marks >=75 && marks <=80){
    console.log("A")
}
else{
    console.log("A+")
}


var fruit1 = "orange";
var fruit2 = "watermelon";
var fruit3 = "mango";
var fruit4 = "apple";
var fruit5 = "graps";

 var fruit = ["orange" ,"watermelon" ,"mango" ,"apple" ,"graps"];
 console.log(fruit[2])

 var a = ["a","b","c","d","e"]
a.push("s")
a.pop("s")
a.shift("s")
a.unshift("s")
var b = a.slice(1,2)
console.log(b)
a.splice(2,0,"sheriyar","Affan","Nasir","Shahzaib")
console.log(a)

var i = a.indexOf("d")
console.log(a[i])

var b = a.length;
console.log(b)

for (var i = 0; i <10; i++){
    console.log("2 x "+ (i+1) +"="+2*(i+1))
}

