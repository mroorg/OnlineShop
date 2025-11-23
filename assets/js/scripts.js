 function hamber_menu(){
    const btnhamber=document.querySelector('.fa-bars');
    const basketshop=document.querySelector('.basketshop');
    let status=false

    btnhamber.addEventListener('click',function(){
      basketshop.classList.toggle('activeBasket')
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


 hamber_menu()