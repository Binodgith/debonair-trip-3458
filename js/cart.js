cart_i = [
    
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/3/539a903NYKAC00000160_1.jpg",
  
      name: "Nykaa All Day Matte Long Wear Liquid Foundation With Pump",
  
      mrp: "599",
  
      star: "4",
  
      rating: "1345",
  
      shade: "15 shade",
  
    },
      
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/7/27129_h-8901030732799m.jpg",
  
      name: "Lakme Absolute Skin Natural Mousse Mattreal Foundation - Medium Caramel",
  
      mrp: "850",
  
      star: "4",
  
      rating: "26455",
  
      shade: "9 shade",
  
    },
  
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/6902395685692.1.jpg",
  
      name: "Maybelline New York Super Stay Full Coverage Foundation - Natural Ivory 112",
  
      mrp: "600",
  
      star: "4",
  
      rating: "24140",
  
      shade: "6 shade",
    },
  
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/4/84f31cf8904330902626_1.jpg",
  
      name: "Kay Beauty Hydrating Foundation - 175N Deep",
  
      mrp: "960",
  
      star: "4.4",
  
      rating: "4018",
  
      shade: "20 shade",
    },
  
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/3/536ba8d6902395774280_1.jpg",
  
      name: "Maybelline New York Fit Me Matte+Poreless Liquid Foundation 16H Oil Control SPF22, 128 Warm Nude",
  
      mrp: "503",
  
      star: "4.4",
  
      rating: "18545",
  
      shade: "16 shade",
    },
  
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/5/25dc29a773602010752_rv__1.jpg",
  
      name: "M.A.C Studio Fix Powder Plus Foundation - NW45",
  
      mrp: "2900",
  
      star: "4.5",
  
      rating: "8930",
  
      shade: "38 shade",
    },
  
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/1/71bb2388901526584109_1.jpg",
  
      name: "Maybelline New York Fit Me 12hr Oil Control Compact - Toffee",
  
      mrp: "191",
  
      star: "4.4",
  
      rating: "29515",
  
      shade: "6 shade",
    }
  
]




document.querySelector("#cart_item_c").innerText=cart_i.length

total_price=cart_i.reduce(function(acc,ele){
    return acc+Number(ele.mrp)
},0)
document.querySelector("#total_amount").innerText=total_price

document.querySelector("#coupon_apply").addEventListener("click", function(){
  coupon_box=document.querySelector("#coupon").value
  if(coupon_box=="@nka30"){
    discount=(total_price*30)/100
    document.querySelector("#total_amount").innerText=discount

    coupon_note= document.querySelector("#coupon_note")
    coupon_note.innerText="Your coupon has Applied and you saved for Rs. "+(total_price-discount)
    
    coupon_countainer=document.querySelector("#cart_summary>div:nth-child(2)")
    coupon_countainer.style.margin="30px auto"
    coupon_countainer.style.padding="15px"
    coupon_countainer.style.visibility="visible"
  }
})
cart_i.map(function(ele){

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
    p_shade.innerText=ele.shade

    let p_price=document.createElement("p");
    p_price.innerText="Rs ."+ele.mrp
    
    del=document.createElement("p")
    del.innerHTML='<i class="fa fa-trash-o"></i>'

    div1.append(p_image)
    div2.append(p_name)
    div2.append(p_shade)
    div3.append(del)
    div3.append(p_price)

    item_container.append(div1,div2,div3)
    document.querySelector("#cart_items").append(item_container)
})
