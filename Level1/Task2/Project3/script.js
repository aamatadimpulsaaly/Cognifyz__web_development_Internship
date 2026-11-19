let addButton = document.getElementById("addbtn");
addButton.onclick = function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sum=num1+num2;
    let result = document.getElementById("res");
    result.value = sum;
};
let subButton = document.getElementById("subbtn");
subButton.onclick = function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let sub=num1-num2;
    let result = document.getElementById("res");
    result.value = sub;
}
let mulButton = document.getElementById("mulbtn");
mulButton.onclick = function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let mul=num1*num2;
    let result = document.getElementById("res");
    result.value = mul;
}
let divButton = document.getElementById("divbtn");
divButton.onclick = function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("res");
    if(num2===0){
        result.value="Infinity"
    }
    else{
        let div=num1/num2;
        result.value = div;
    }
}