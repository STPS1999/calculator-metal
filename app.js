function cal1(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.0062

    document.getElementById('h1').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}
function cal2(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.0079

    document.getElementById('h2').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}

function cal3(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.0068

    document.getElementById('h3').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}

function cal4(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.0065

    document.getElementById('h4').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}
function cal5(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.0079

    document.getElementById('h5').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}

function cal6(){
    let v1=document.getElementById("v1").value
    let v2=document.getElementById("v2").value
    let v3=document.getElementById("v3").value

    let cal = (v1*v2*v3)*0.7293

    document.getElementById('h6').innerHTML = "นํ้าหนักเหล็ก เท่ากับ " + cal.toFixed(2) +"กก."

}






function reload(){
    window.location.reload()
}