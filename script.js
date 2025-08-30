(function (){
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main-div"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main-div", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector("#main-div").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

})();


var cur = document.querySelector(".cursor");
var mainDiv = document.getElementById("main-div");


mainDiv.addEventListener("mousemove", function(dets) {
    cur.style.left = dets.x + 10 + "px";
    cur.style.top = dets.y + 10 + "px";

})

function defaultCursor() {
    cur.style.width ="20px";
    cur.style.height = "20px";
    cur.style.borderRadius = "50%";
    cur.style.backgroundColor = "#edbfff";
    cur.style.position = "fixed";
    cur.style.zIndex = "9";
    cur.style.mixBlendMode = "difference";
}

var videodiv = document.querySelector(".page1 video");
videodiv.addEventListener("mouseenter", function(dets) {
    cur.style.height = "20px";
    cur.style.display = "flex";
    cur.style.alignItems = "center";
    cur.style.justifyContent = "center";
    cur.style.width = "80px";
    cur.innerHTML = "<span style= ' color : #111; font-size: 16px; font-family : PP mori; font-weight: 500; padding: 3px'>Sound On</span>";
    cur.style.color = "#111";
    cur.style.borderRadius = "50px";
    cur.style.left = dets.x + 10 + "px";
    cur.style.top = dets.y + 10 + "px";
    cur.style.cursor = "pointer";
    cur.style.backgroundColor = "#edbfff";
    cur.style.mixBlendMode = "normal";
})    


videodiv.addEventListener("mouseleave", function() {
    cur.innerHTML = "";
    defaultCursor();
});

const boxdiv = document.querySelectorAll(".box");
boxdiv.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        cur.style.width = "400px";
        cur.style.height = "300px";
        cur.style.borderRadius = "0%";
        cur.style.background = `url(${ele.getAttribute("custom-attr")})`;
        cur.style.backgroundSize = "cover";
        cur.style.backgroundPosition = "center";
        cur.style.mixBlendMode = "normal";
        cur.style.borderRadius = "50px";
    })
    ele.addEventListener("mouseleave", function() {
        cur.style.background = "transparent";
       defaultCursor();    
    })      
}) 


//we can use timeline for this
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "#main-div",
        // markers: true,
        start: "top 20%",
        end: "top 10%",
        scrub: 2
    }
});

//gsap to animate the texts

tl.to(".page1 h1", {
    x: -100
}, "animate")
//same variable animate-txt used to animate both at same time

tl.to(".page1 h2", {
    x: 100
}, "animate")

tl.to(".page1 video", {
    scale: 1.5
}, "animate")

//animation for page 2
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: "#main-div",
        start: "top -140%",
        end: "top -126%",
        scrub: 3
    }
});


tl2.to(".page2", {
    backgroundColor: "#fff",
}, "animate")


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4 ",
        scroller: "#main-div",
        // markers: true,
        start: "top 49%",
        end: "top 10%",
        scrub: 3
    }
});

tl3.to(".page4", {
    backgroundColor: "#111"
}, "animate")




