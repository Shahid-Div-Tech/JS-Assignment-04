
let items=["biryani","pizza"]

let totalprice=0

let finalitems=[]

let finalprizes=[]




// Price table
let prices = {
    biryani: 500,
    pizza: 600,
    chicken: 150,
    beef: 200,
    small: 50,
    medium: 100,
    large: 150,
    fatija: 30,
    seekh: 40,
    chickentikka: 60
}


function restitems(food){

     let userwant=prompt("what do you want to eat")
      
   for(let i=0;i<food.length;i++){
    if(food[i]===userwant){

        
      
        restallitems()

    
      
 }

  

   }
}

restitems(items)





function restallitems(){
    let items=+prompt("enter your items \n 1:chicken \n   2:beef");
  
    

    switch(items){
        case 1:
            
            finalitems.push("chicken  ")
             break

         case 2:
               
            finalitems.push("beef  ")
    
            break
    }

    

     size()
}



function size(){

    let s=+prompt("enter a sizes \n  1:small \n 2:medium \n 3:large ");
    switch(s){
        case 1:
            
            finalitems.push("small  ")
             
              break

          case 2:
            
             finalitems.push("medium  ")
              
              break
            
       case 3:
              
             finalitems.push("large  ")
             
            break   
}


flavour();

}


function flavour(){
    let f=+prompt("enter your flavour\n 1:fatija \n 2:seekh \n 3:chickenTikka");

    switch(f){
    
        case 1:
            
           finalitems.push("fatija  ")
          
           
            break   
            
            case 2:
            
            finalitems.push("seekh  ")
            break    


            case 3:
          
             finalitems.push("chickentikka  ")
            break    
    }

    totalcalculation();
}



alert(`your final items is ${finalitems} :`)


function totalcalculation(){
    totalprice = 0; 

    for(let i=0; i<finalitems.length; i++){
        let item = finalitems[i].trim().toLowerCase();
        if(prices[item] !== undefined){
            totalprice += prices[item]; 
        }
    }

    alert(`Total Price: ${totalprice} Rs`)
}