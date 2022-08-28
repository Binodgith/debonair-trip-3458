document.querySelector("form").addEventListener("submit",subm)
document.querySelector("#register_container>i").addEventListener("click",function(){
    window.location.href="index.html"
})

function subm(event){
    event.preventDefault()
    names=document.querySelector("#name").value
    emails=document.querySelector("#email").value
    genders=document.querySelector("#gender").value
    pwd1=document.querySelector("#password1").value
    pwd2=document.querySelector("#password2").value

    if(pwd1==pwd2){
        localStorage.setItem("email",JSON.stringify(emails))
        localStorage.setItem("password",JSON.stringify(pwd1))
        // window.history.back()
        window.location.href="index.html"
        
    }
    else{
        alert("password  Mismatch!")
    }

}