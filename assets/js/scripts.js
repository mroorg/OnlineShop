const products=[
   {id:1,title:"تستی",price:150000,disc:'گوشی موبایل سامسونگ a51s با حافظه داخلی 256G',img:'assets/img/prducts-testi.png'},
   {id:2,title:"تستی",price:150000,disc:'گوشی موبایل سامسونگ a51s با حافظه داخلی 256G',img:'assets/img/prducts-testi.png'},
   {id:3,title:"تستی",price:150000,disc:'گوشی موبایل سامسونگ a51s با حافظه داخلی 256G',img:'assets/img/prducts-testi.png'}
]
 
 


// Local storge;

const KEY_CARD='shops-card-v1'

function load_cart(){
  const raw= localStorage.getItem(KEY_CARD);
  return raw ? JSON.parse(raw):[];

}

function Savecart(cart){
   localStorage.setItem(KEY_CARD,JSON.stringify(cart));
}


// ***************************************************** 

 
 




 
//  Render products
function renderproducts(){
   const container=document.querySelector('.container .row');
   products.forEach(item=>{
      container.innerHTML+=`

      <div class="card p-2 text-center">
            <div class="card-header">
               <img src="${item.img}" alt="">
                <h4 class="card-title">${item.title}</h4>
            </div>
            <div class="card-body">
                <span>قیمت:${item.price}</span>
                <p class="mt-3">${item.disc}</p>
            </div>
            <div class="card-footer">
              <button class="btn-main-item" onclick='addtobasket(${item.id})'><i class="fa fa-shopping-cart"></i>خرید</button>
            </div>
      </div>
      

      `
   })

}


function renderbasket(){
   const basketshop=document.querySelector('.basketshop .items');
 
 
   basketshop.innerHTML=''
   cart.forEach(item=>{
    
      
      basketshop.innerHTML+=`

         <div class="d-flex flex-row justify-content-between align-items-center gap-1 mt-4">
            <span>نام محصول:${item.title}</span>
            <span class="price">قیمت:${(item.price*item.count).toLocaleString()}</span>
            <div class='d-flex flex-column'>
                <button class="btn btn-outline-success" onclick='btn_inc(${item.id})'>+</button>
                <span>تعداد:${item.count}</span>
                <button class="btn btn-outline-danger" onclick='btn_dec(${item.id})'>-</button>
            </div>
        </div>
               
        `
        
   })

   

   
 
   
}


// ***************************************************** 






let cart=load_cart()


function addtobasket(prductsid){
cart=load_cart()

const product= products.find(p=>p.id===prductsid);
const basketitem=cart.find(p=>p.id===prductsid);
if(basketitem){
   basketitem.count++
   
}else{
   cart.push({...product,count:1});
   
}



  Savecart(cart)   
  renderbasket()
  sumTotal()
  emptybox()
   
}

function btn_inc(prductsid){
   cart=load_cart();
   const product=cart.find(p=>p.id===prductsid);
   product.count++
   Savecart(cart)
   renderbasket()
   sumTotal()
   emptybox()
}


function btn_dec(prductsid){
   cart=load_cart();
   const product=cart.find(p=>p.id===prductsid);
   product.count--
   if(product.count===0){
      cart=cart.filter(p=>p.id!=prductsid);
   }
   Savecart(cart)
   renderbasket()
   sumTotal()
   emptybox()
}


function sumTotal(){
   cart=load_cart();
   const displayTot=document.getElementById('total');
   let total=0;
   cart.forEach(item=>{
      total+=(item.price) * (item.count);
   })

   displayTot.textContent=`مجموع:${total.toLocaleString()}`;

   
   

   
}

function emptybox(){

   cart=load_cart();
    const basketshop=document.querySelector('.basketshop .emptybox');
   if(cart.length===0){
         basketshop.innerHTML=`
     <div class="text-center text-danger p-5">
            <span>سبد خرید شما خالی است<i class="far fa-frown"></i></span>
       </div>
    `
   }else{
      basketshop.innerHTML=''
      renderbasket()
   }
   
}




// hamber menu
 function hamber_menu(){
    const btnhamber=document.querySelector('.fa-bars');
    const hamber_menu=document.querySelector('.hambermenu');
    let status=false

    btnhamber.addEventListener('click',function(){
      hamber_menu.classList.toggle('activehamber')
       if(status===false){
        btnhamber.classList.remove('fa-bars');
        btnhamber.classList.add('fa-xmark');
        status=true

       }else{
        btnhamber.classList.remove('fa-xmark');
        btnhamber.classList.add('fa-bars');
        status=false
       }
       
    })

 }

function toggle_basket(){
   let status=false
   const btnbasket=document.querySelector('.fa-shopping-cart');
   const basketshop=document.querySelector('.basketshop');
   const innerclose=document.querySelector('.fa-close');
   const hamber_menu=document.querySelector('.hambermenu');
   btnbasket.addEventListener('click',function(){
      basketshop.classList.toggle('activebasket');
      if(status===false){
      
        btnhamber.classList.remove('fa-xmark');
        btnhamber.classList.add('fa-bars');
        status=true

       }
      
   });
   innerclose.addEventListener('click',function(){
      basketshop.classList.remove('activebasket');
      if(status===true){
        btnhamber.classList.remove('fa-bars');
        btnhamber.classList.add('fa-xmark');
        status=true
      }
   });
   
}
// ***************************************************** 







window.addEventListener('DOMContentLoaded',function(){
renderproducts()
renderbasket()
hamber_menu()
sumTotal()
 emptybox()
 toggle_basket()



})