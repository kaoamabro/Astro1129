import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// let tl = gsFap.timeline();
// tl.to('.loading',{width:'100%'})
// ScrollTrigger.create({
    //     animation: tl,
    //     trigger:'header',
    //     endTrigger:'footer',
    //     markers: true,
    //     scrub: 1,
    //     start: 'top top',
    //     end: 'top top'
    // })
gsap.timeline({
    scrollTrigger:{
        trigger:'header',
        endTrigger:'footer',
        markers: true,
        start: 'top top',
        end: 'top top',
        scrub: 1,
    }
}).to('.loading',{width:'100%'});
gsap.timeline({
    scrollTrigger:{
    trigger:'header',
    // markers: true,
    start: 'top',
    scrub: 1,
    }
})
.to('h1',{scale:0});
gsap.timeline({
    scrollTrigger:{
        trigger:'#first',
        // markers: true,
        start: 'top 50%',
        end: '+=50%',
        scrub: 3,
    }
})
.from('#first .right',{y:-200,scale:0.8})
.from('#first .left',{y:200,scale:0.8},0)
.from('#first .title',{scale:0,opacity:0},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'#second',
        // markers: true,
        start: 'top 50%',
        end: '+=50%',
        scrub: 3,
    }
})
.from('#second .right',{x:300,opacity:0})
.from('#second .left',{x:-300,opacity:0},0)
.from('#second .title',{scale:0,opacity:0},0)

