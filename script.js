const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body")
console.log(btns);
btns.forEach(function(btn1){
    console.log(btn1);  
    btn1.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === "orange"){
            body.style.backgroundColor = "orange"
        } else if (e.target.id === "red"){
            body.style.backgroundColor = "red"
        }else if (e.target.id === "green"){
            body.style.backgroundColor = "green"
        } else if (e.target.id === "blue"){
            body.style.backgroundColor = "blue"
        } else if (e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
        }
    })
})