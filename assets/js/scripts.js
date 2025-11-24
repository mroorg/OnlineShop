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
   products.forEach((item)=>{
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






// ***************************************************** 





renderproducts()
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
   
   
}



// hamber menu
 function hamber_menu(){
    const btnhamber=document.querySelector('.fa-bars');
    const basketshop=document.querySelector('.hambermenu');
    let status=false

    btnhamber.addEventListener('click',function(){
      basketshop.classList.toggle('activehamber')
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
// ***************************************************** 




 hamber_menu()
