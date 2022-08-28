total_price=localStorage.getItem("total_price")

document.querySelector("#amount").innerText=total_price

document.querySelector("#payment_container>i").addEventListener("click",function(){
    location.href="index.html"
})

document.querySelector("#payment_container>button").addEventListener("click", function(){
    selected=document.querySelector("#cod_button").checked=true
    selected=true
    if(selected==true){
        popup=document.querySelector("#payment_done")
        popup.style.visibility="visible"
        popup.style.boxShadow ="1px 1px 3px 600px rgba(128, 128, 128, 0.758)"
    }
    
})

document.querySelector("#payment_done>button").addEventListener("click",function(){
    location.href="index.html"
})