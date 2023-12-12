var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+30+"px"
crsr.style.top=dets.y+"px"
blur.style.left=dets.x- 200 +"px"
blur.style.top=dets.y- 200 +"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid  rgb(131, 191, 75)"
        crsr.style.backgroundColor=" rgb(131, 191, 75)"
    })
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img ,#about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:2
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 42%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 42%",
        scrub:3
    }
})

var card=document.querySelectorAll("#cards-container .card")
card.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid  rgb(131, 191, 75)"
        crsr.style.backgroundColor=" rgb(131, 191, 75)"
    })
});

/*gsap.from(".box",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 68%",
        scrub:1
    }
})*/

gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        //markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})

var box=document.querySelectorAll("#box-container .box")
card.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid  rgb(131, 191, 75)"
        crsr.style.backgroundColor=" rgb(131, 191, 75)"
    })
});