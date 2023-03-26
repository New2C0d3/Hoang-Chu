

document.getElementById("Submit").onclick = function(){
let a;
let b;
let c;
a = document.getElementById("Number1").value;
a = Number(a);
b = document.getElementById("Number2").value;
b = Number(b);
    if(a == "" || b == ""){
        alert("Please enter BOTH numbers!");
    }
    else{
        
        c = a + b;
        document.getElementById("Result").innerHTML = "Result: " + c;
    }
}