const cards = document.querySelectorAll('.card');


window.onload=shuffle();
let iscardflipped=false;
let frontcard,backcard;
let count=0, moves=0;
let screenlock=false;



function flipcards(){
    if (screenlock) return;
    if(this== frontcard) return;
    this.classList.add('flip');
    if(!iscardflipped){
        iscardflipped=true;
        frontcard=this;
       
        return;
    }else{
       iscardflipped=false;
       backcard=this;
       
       match();
    }
    
   }

   const match =function (){

   
  /* console.log(frontcard.dataset.info);
   console.log(backcard.dataset.info);*/

   if(frontcard.dataset.info==backcard.dataset.info)
   {
       frontcard.classList.add("disabled");
       backcard.classList.add("disabled");
}
   
   else{
       screenlock=true;
       setTimeout(() =>{
       frontcard.classList.remove('flip');
       backcard.classList.remove('flip');
       reset();
       },800);
       
   }
  /* console.log(count);*/
   
   }

   const reset= function (){
       [iscardflipped,screenlock]=[false,false];
       [frontcard,backcard]=[null,null];
   }
   
  function shuffle(){
      cards.forEach(card1=>{
          let pos=Math.floor(Math.random()*16);
          card1.style.order=pos;
      });
  }

cards.forEach(card1 => card1.addEventListener('click',flipcards));
