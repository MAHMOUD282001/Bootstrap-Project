window.addEventListener('scroll',function(){
    const header = document.querySelector('nav');
    header.classList.toggle("stickly", window.scrollY>0);
});




let heart = document.querySelectorAll(".add #heart");


heart.forEach( h =>{

    h.addEventListener("click", function(){
    
        
        let firstChild = h.firstChild;
        
        let prefix = firstChild.getAttribute("data-prefix");
        
        if(prefix == "far"){
            
            document.querySelector(".after").innerHTML++;
            
            firstChild.classList.add("fas");
            
            prefix = "fas";
            
        }
        
        else if(prefix == "fas"){
            
            document.querySelector(".after").innerHTML--;
            
            firstChild.classList.add("far");
            
            prefix = "far";
            
        }
        
        
    })
    
    
})


let cart = document.querySelectorAll("#cart");


cart.forEach( car =>{

    car.addEventListener("click", function(){
        
        let fChild = car.firstChild;
        
        let prfix = fChild.getAttribute("data-prefix");
        
        if(prfix == "far"){
            
            document.querySelector(".before").innerHTML++;
            
            fChild.classList.add("fas");
            
            prfix = "fas";
            
        }
        
        else if(prfix == "fas"){
            
            document.querySelector(".before").innerHTML--;
            
            fChild.classList.add("far");
            
            prfix = "far";
            
        }
        
        
    })
    
    
})
