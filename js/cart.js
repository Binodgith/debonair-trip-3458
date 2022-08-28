cart_i=JSON.parse(localStorage.getItem("cart_data"))

document.querySelector("#cart_summary>.order_summary button").addEventListener("click",function(){
  location.href="payment.html"
})

document.querySelector("#cart_item_c").innerText=cart_i.length

total_price=cart_i.reduce(function(acc,ele){
    return acc+Number(ele.mrp)
},0)
document.querySelector("#total_amount").innerText=total_price
localStorage.setItem("total_price", total_price)

document.querySelector("#coupon_apply").addEventListener("click", function(){
  coupon_box=document.querySelector("#coupon").value
  if(coupon_box=="@nka30"){
    discount=(total_price*30)/100
    document.querySelector("#total_amount").innerText=discount
    localStorage.setItem("total_price", discount)

    coupon_note= document.querySelector("#coupon_note")
    coupon_note.innerText="Your coupon code has Applied  and  You are savig Rs. "+(total_price-discount)+" on this Order"
    
    coupon_countainer=document.querySelector("#cart_summary>div:nth-child(2)")
    coupon_countainer.style.margin="30px auto"
    coupon_countainer.style.padding="15px"
    coupon_countainer.style.visibility="visible"
  }
})
cart_i.map(function(ele,i){

    let item_container=document.createElement("div");
    item_container.setAttribute("id","item_container");

    div1=document.createElement("div");
    div2=document.createElement("div");
    div3=document.createElement("div");

    let p_image=document.createElement("img");
    p_image.setAttribute("src",ele.image);
    let p_name=document.createElement("h3");
    p_name.innerText=ele.name
    let p_shade=document.createElement("p");
    p_shade.innerText=ele.shade+" Shade"

    let p_price=document.createElement("p");
    p_price.innerText="Rs ."+ele.mrp
    
    del=document.createElement("p")
    del.innerHTML='<i class="fa fa-trash-o"></i>'
    del.addEventListener("click",function(event){
         event.target.parentNode.remove()
        cart_i.splice(i,1)
        localStorage.setItem("cart_data",JSON.stringify(cart_i) )
        location.reload()
    })

    div1.append(p_image)
    div2.append(p_name)
    div2.append(p_shade)
    div3.append(del)
    div3.append(p_price)

    item_container.append(div1,div2,div3)
    document.querySelector("#cart_items").append(item_container)
})
