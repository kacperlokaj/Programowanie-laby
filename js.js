//Zadanie 1
//a
var a=10;
var b=20;
let add=a+b;
let sub=a-b;
let nul=a*b;
let div=b/a;
let mod=b%a;

console.log(add);
console.log(sub);
console.log("wynik mnożeniato: "+nul);
console.log(div);
console.log(mod);

//b

document.getElementById("addR").innerHTML=add;

//Zadanie 2 - pole
var s1=30;
var s2=20;
var s3=40;

var p=(s1+s2+s3)/2;
var area=Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
console.log("Pole trójkąta wynosi: "+area);

document.getElementById("areaR").innerHTML="Pole trójkąta o bokach:  "+s1+","+s2+","+s3+" wynosi:"+area;

//Zadanie 3

// const num=Math.ceil(Math.random()*10);
// const gnum = prompt("Podaj liczbe: ");

// if(num == gnum){
//     console.log("Dobra robota! ");
//     document.getElementById("addR").innerHTML="Trafiłeś";
// }else{
//     console.log("Nie trafiłeś :/ ")
//     document.getElementById("addR").innerHTML="Szkoda nie trafiłeś :/ . Dobra liczbą była:"+num;
// }

//Zadanie 4

const num1=parseFloat(prompt("Podaj pierwszą liczbę ; "))
const num2=parseFloat(prompt("Podaj drugą liczbę ; "))
const num3=parseFloat(prompt("Podaj trzecią liczbę ; "))

if( num1 >= num2 && num1 >= num3){
    console.log("Pierwsza liczba jest największa"+num1)
    document.getElementById("areaR").innerHTML="Pierwsza liczba jest najwieksza i jest nią:"+num1;
}else if(num2 >= num1 && num1 >= num3){
    console.log("Druga liczba jest największa"+num2)
    document.getElementById("areaR").innerHTML="Druga liczba jest najwieksza i jest nią:"+num2;
}else {
    console.log("Trzecia liczba jest największa"+num3)
    document.getElementById("areaR").innerHTML="Trzecia liczba jest najwieksza i jest nią:"+num3;
}