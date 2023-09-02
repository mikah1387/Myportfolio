let body = document.querySelector('body')
let background1 = document.querySelector('.color1')
let background2 = document.querySelector('.color2')
let background3 = document.querySelector('.color3')

background1.addEventListener('click', function(){

  body.style.backgroundColor = "#010130"
})
background2.addEventListener('click', function(){

  body.style.backgroundColor = "#354f52"
})
background3.addEventListener('click', function(){

  body.style.backgroundColor = "#1F1F1F"
})




// Animation gsap
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline()
tl.to(".describ .p", {
   y:100,
  
   opacity: 1,
   duration:1.2,
  //  ease: "power4"

 })
  .to(".child1", {
    y:0,
    x:-20,
    ease: "power0"

 })
  .to(".child2", {
  y:0,
  x:-20,

  ease: "power0"
  
  })
  .to([".describ .mycard",".navbar2"], {
    scale:1,
    x:0,
    opacity: 1,
    duration:1,
  
    ease: "power0"
    
    }).to(".round", {
      
      x:0,
      opacity: 1,
      duration:1,
      ease: "power0"
      
      })

  
 gsap.to(".about_p1, .presentation h2", {
   
       y:-130,
       ease: "power4",
       duration:1.4,


       scrollTrigger :{
  
       trigger:'.presentation h2',
       start:'0% 100%',
       end:'0% 80%',
      //  markers:true,
       toggleActions : "play none none reverse" 
      //  scrub:4,
     }

 }
 )   
 gsap.to(".about_p2 ", {
   
  y:-100,
  ease: "power4",
  duration:1.4,


  scrollTrigger :{

  trigger:'.about_p2 ',
  start:'0% 100%',
  end:'0% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
}


}
)  
gsap.to(".cv h2, .cv .h3 ", {
   
  y:-100,
  ease: "power4",
  duration:1.4,


  scrollTrigger :{

  trigger:'.cv h2 ',
  start:'50% 100%',
  end:'0% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)  
gsap.to(".cv .exp-1 ", {
   
  x:0,
  y:0,
  opacity:1,
  ease: "power4",
  duration:2,


  scrollTrigger :{

  trigger:'.cv .exp-1 ',
  start:'90% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)  
gsap.to(".cv .exp-2 ", {
   
  x:0,
  y:0,
  opacity:1,
  ease: "power4",
  duration:2,


  scrollTrigger :{

  trigger:'.cv .exp-2 ',
  start:'90% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 
gsap.to(".cv .exp-3 ", {
   
  x:0,
  y:0,
  opacity:1,
  ease: "power4",
  duration:2,


  scrollTrigger :{

  trigger:'.cv .exp-3 ',
  start:'90% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 

gsap.to(".services h2, .services h3 ", {
   
  
  y:0,
  opacity:1,
  ease: Power2.easeOut,
  duration:2,


  scrollTrigger :{

  trigger:'.services h2 ',
  start:'100% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 
gsap.to(".services .serv_detail_1, .services .serv_detail_3", {
   
  
  y:0,
  opacity:1,
  ease: Power2.easeOut,
  duration:2,


  scrollTrigger :{

  trigger:'.services .serv_detail_2 ',
  start:'100% 100%',
  end:'100% 60%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 

gsap.to(".services .serv_detail_2", {
   
  
  
  opacity:1,
  ease: Power2.easeOut,
  duration:1,
  delay:1.5,


  scrollTrigger :{

  trigger:'.services .serv_detail_2 ',
  start:'100% 100%',
  end:'100% 60%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 

gsap.to(".skills h2 , .skills h3", {
   
  
  
  y:0,
  ease: Power2.easeOut,
  duration:1,
 


  scrollTrigger :{

  trigger:'.skills h2',
  start:'0% 100%',
  end:'0% 60%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)
gsap.to(".all-skill .skill_1 , .all-skill .skill_5", {
   
  x:0,
  y:0,
  opacity:1,
  ease: Power3.easeOut,
  duration:2,
 
  scrollTrigger :{

  trigger:'.all-skill',
  start:'20% 100%',
  end:'20% 60%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)
gsap.to(".all-skill .skill_2 , .all-skill .skill_6", {
   
  y:0,
  opacity:1,
  ease: Power3.easeOut,
  duration:2,
  scrollTrigger :{

  trigger:'.all-skill',
  start:'20% 100%',
  end:'20% 60%',

  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)
gsap.to(".all-skill .skill_4 ", {
  x:0,
  opacity:1,
  ease: Power3.easeOut,
  duration:2,
  scrollTrigger :{
  trigger:'.all-skill',
  start:'20% 100%',
  end:'20% 60%',
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)
gsap.to(".all-skill .skill_3 ", {
  y:0,
  opacity:1,
  ease: Power3.easeOut,
  duration:2,
  scrollTrigger :{
  trigger:'.all-skill',
  start:'20% 100%',
  end:'20% 60%',
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
)
gsap.to(".mesprojects h2,.mesprojects h3 ", {
   
  
  y:0,
  opacity:1,

  ease: Power4.easeOut,
  duration:2,


  scrollTrigger :{

  trigger:'.mesprojects h2',
  start:'100% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 

gsap.to(".mesprojects .project_1", {
   
  
  y:0,
  opacity:1,
  ease: Power4.easeOut,
  duration:2,
  scrollTrigger :{

  trigger:'.mesprojects .project_1',
  start:'0% 100%',
  end:'0% 70%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 
gsap.to(".mesprojects .project_2,.mesprojects .project_3,.mesprojects .project_4,.mesprojects .project_5", {
   
  
  y:0,
  x:0,
  opacity:1,
  ease: Power4.easeOut,
  duration:2,
  scrollTrigger :{

  trigger:'.mesprojects .project_2',
  start:'90% 100%',
  end:'90% 80%',
  // markers:true,
  toggleActions : "play none pause reverse " 
 //  scrub:4,
   }

  }
) 

gsap.to(".mesprojects .project_6", {
   
  
  scale:1,
  opacity:1,
  ease: Power4.easeOut,
  duration:2,
  scrollTrigger :{

  trigger:'.mesprojects .project_6',
  start:'10% 100%',
  end:'10% 70%',
  // markers:true,
  toggleActions : "play none pause reverse " 
 //  scrub:4,
   }

  }
)
gsap.to(".mestarif h2,.mestarif  h3 ", {
   
  
  y:0,
  opacity:1,

  ease: Power4.easeOut,
  duration:2,


  scrollTrigger :{

  trigger:'.mestarif h2',
  start:'100% 100%',
  end:'80% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 

gsap.to(".mestarif .price1,.mestarif .price2", {
   
  
  x:0,
  opacity:1,
  rotate:0,
  

  ease: Power4.easeOut,
  duration:2,


  scrollTrigger :{

  trigger:'.mestarif .price1',
  start:'40% 100%',
  end:'40% 80%',
  // markers:true,
  toggleActions : "play none none reverse" 
 //  scrub:4,
   }

  }
) 




