document.querySelector("form").addEventListener("submit",subm)
document.querySelector("#register_container>i").addEventListener("click",function(){
    window.location.href="../html/index.html"
})
function subm(){
    emails=document.querySelector("#email").value
    pwd=document.querySelector("#password").value

    email=JSON.parse(localStorage.getItem("email"))
    password=JSON.parse(localStorage.getItem("password"))

    if(email==emails && pwd==password){
        window.location.href="../html/index.html"
    }

}