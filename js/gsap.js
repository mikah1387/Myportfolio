// // ScrollTrigger.create({
//   trigger:'.div2',
//      start: 'bottom bottom',
//      end : 'bottom top',
//      markers : true,
//      scrub:7,
     
//      toggleClass :'fixed'
//         })



//********timeline */
// let tl = gsap.timeline({

//   scrollTrigger: {
//     trigger:'.square2 ',
//      start:'top 100%',
//      end:'top top',
//      markers:true,
//      scrub:4,
    
//   }
// });

// tl.to(".square", {
//    scale:2, 
//    backgroundColor:'red',
 
// })
//   .to(".square", {
//     scale:1.5,  
//   backgroundColor:'white'
// })
// .to(".square", {
//   scale:1,  
//   backgroundColor:'green'
// })





// gsap.to(".square ", {
//   //  duration:1,
//    backgroundColor:'black',
//    color:'white',
   
//    ease: "power4",
//    scrollTrigger :{

//      trigger:'.square ',
//      start:'center 5%',
//      end:'bottom top',
//     //  scrub:2,
//     //  pin:'.square',
//     //  pinSpacing: false,
//      toggleActions : "play pause none reset" ,
//      //                  onenter onleave  
//      markers : true,
//     //  toggleClass : { targets:'.square', className : 'scale'}
   

//       } 
  
//   });



  // gsap.to(".div2 ", {

  //  //  duration:1,
  //  backgroundColor:'white',
    

  //   scrollTrigger :{
 
  //     trigger:'.square2 ',
  //     start:'top 50%',
  //     end:'top top',
     
  //     toggleActions : "play none none reverse" ,
  //     //                  onenter onleave  
  //     markers : true,
  //    //  toggleClass : 'scale',
      
 
  //      } ,
     
    
  //  });

//   gsap.utils.toArray("span").forEach((span) => {

//       ScrollTrigger.create({

//        trigger:span,
//        start:'top 30%',
//        end:'top top',
//        markers : true,
//        toggleClass : 'active',
//       })
     
//       })
  
// let tl = gsap.timeline({paused:true})

   
//     tl.to('h1', {
//       x:300,

//       color: 'red'
//     }).to(
//       'h1', {

//        scale:1.1,

//         color: 'white'
//       }
//     )    
      

// document.querySelector('h1').addEventListener('click', function(e){

//   if (tl.isActive()){
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     return false

//   }
//   tl.reversed() ? tl.play() : tl.reverse()
// })

