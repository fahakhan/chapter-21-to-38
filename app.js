var firstName=prompt("enter your first name")
var lastName=prompt("enter your last name")
var fullName=firstName+lastName;
alert("congratulations you wrote your full Name"+ " " +fullName)


var mobilemod=prompt("enter your favourite mobile model")
var length= mobilemod.length;
alert("length of string"+ " "+ length);

var pak= "pakistani";
var index=pak.indexOf('n')
alert(index)

var a="Hellow world";
var index=a.lastIndexOf('l');
alert(index);

var a="pakistani";
var index=a.charAt(3)
alert(index)

var a = "hyderabad";
var index=a.replace("hyder" , "Islam")
alert(index)

var msg="Ali and Sami are best friends. They play cricket and football together"
var newmsg=msg.replace(/&/g , "and");
alert(newmsg)

var anum="472";
var div=document.getElementById('type')
alert( "Value: " + anum + "  " + " Type: " + typeof(anum));
console.log("Value: " + anum +" Type: " + typeof(anum) );
var index=parseInt(anum);
var div =document.getElementById('type')
alert("Value: " + index + "  "+"Type: " + typeof(index));
console.log("Value: " + index + " "+"Type: " + typeof(index) );

var input=prompt("enter your value")
input=input.toUpperCase();
alert(input);

var input=prompt("enter your value");
var firstchar=input.slice(0,1);
var otherchar=input.slice(1);
firstchar=firstchar.toUpperCase();
otherchar=otherchar.toLowerCase();
var input=firstchar+otherchar;
alert(input)

function uc() {
    var uc = document.getElementById('uppercase').value;
    var div = document.getElementById('up');
    div.innerHTML = div.innerHTML + uc.toUpperCase();
}
function tc() {
    var sentence = document.getElementById('titlecase').value;
    sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    var div = document.getElementById('tcase');
    div.innerHTML = div.innerHTML + sentence.join();
}



function numtostr() {
    var num = 47.2;
    var div = document.getElementById('nts');
    div.innerHTML = div.innerHTML + "Value: " + num + "<br> Type: " + typeof(num) + "<br>";
    var integer = num.toString();
    var int = integer.split(".");
    int = int.join("");
    var div = document.getElementById('nts');
    div.innerHTML = div.innerHTML + "Value: " + int + "<br> Type: " + typeof(int) + "<br>";

}


function split() {
    var university = "University of Karachi";
    var array = university.split("");
    for (var i = 0; i < university.length; i++) {
        var div = document.getElementById('splitt');
        div.innerHTML = div.innerHTML + array[i] + "<br>";
    }

}

function lastchar() {
    var word = document.getElementById('laastchar').value;
    var div = document.getElementById('lc');
    div.innerHTML = div.innerHTML + "Last Character : " + word.charAt(word.length - 1);
}


function occurrencecheck() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    var sen = sentence.split(" ");
    var count = 0;
    for (var i = 0; i < sen.length - 1; i++) {
        if (sen[i] == "the" || sen[i] == "The" || sen[i] == "THE") {
            count++;
        }
    }
    var div = document.getElementById('oc');
    div.innerHTML = div.innerHTML + "Text: The quick brown fox jumps over the lazy dog <br>";
    var div = document.getElementById('oc');
    div.innerHTML = div.innerHTML + "There are " + count + " occurences of 'the' <br>";
} 