
function add() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = (parseInt(a)+parseInt(b));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

function sub() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = (parseInt(a)-parseInt(b));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

function mul() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = (parseInt(a)*parseInt(b));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

function div() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = (parseInt(a)/parseInt(b));
    document.getElementById('op').innerHTML = parseInt(res);
    console.log(res);
}

function mod() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = (parseInt(a)%parseInt(b));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

function pow() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    res = Math.pow(parseInt(a),parseInt(b));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

function fact(x) {
    var y=1;
    for(var i=1;i<=x;i++)
    {
        y=y*i;
    }
    return y;
}

function ncr() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    var n = fact(a);
    var r1 = fact(a-b);
    var r = fact(b);
    res = (parseInt(n)/(parseInt(r1)*parseInt(r)));
    document.getElementById('op').innerHTML = res;
    console.log(n);
    console.log(r1);
    console.log(r);

}


function npr() {
    let  a = document.querySelector(".ipdesc1").value;
    let  b = document.querySelector(".ipdesc2").value;
    let res;
    var n = fact(a);
    var r1 = fact(a-b);
    res = (parseInt(n)/parseInt(r1));
    document.getElementById('op').innerHTML = res;
    console.log(res);
}

