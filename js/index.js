

document.querySelector("#navbar>.cart").addEventListener("click",function(){
    window.location.href="cart.html"
})
document.querySelector("#navbar>img").addEventListener("click", function(){
    window.location.href="index.html"
})
document.querySelector("#navbar>.acc").addEventListener("click", function(){
    window.location.href="register.html"
})

document.querySelector("#navbar>i").addEventListener("click",function(){
    document.querySelector("#category-list2").style.visibility="visible"
})
document.querySelector("#category-list2>div>i").addEventListener("click",function(){
    document.querySelector("#category-list2").style.visibility="hidden"
})

makups=document.querySelectorAll(".makup")
makups.forEach(function(ele){
    ele.addEventListener("click", function(){
        window.location.href="makup.html"
    })
})


skins=document.querySelectorAll(".skin")
skins.forEach(function(ele){
    ele.addEventListener("click", function(){
        window.location.href="skin.html"
    })
})

cart_i= JSON.parse(localStorage.getItem("cart_data"))
cart_length=cart_i.length || 0
 

document.querySelector("#cart_count").innerText=cart_length