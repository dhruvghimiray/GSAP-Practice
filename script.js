// practice 1

//animates from the current position to specefied position or property
// gsap.to("#box1", {
//   x: 200,
//   duration: 2,
//   ease: "power2.inOut",
//   delay: 1,
//   rotate: 270,
//   repeat: -1, //thsi will set repeat time to infinity.. for fixed time, set it to any other number-1
//   yoyo: true, //this will make animation go back and forth
//   repeatDelay: 1, //this will make the animation wait for 1 second before repeating
// });

// // animation h1 fade in effect

// gsap.from("h1", {
//   opacity: 0,
//   duration: 2,
//   ease: "power2",
//   delay: 1,
//   y: 20,
//   stagger: 0.5, // runs on all the provided tags one by one instead of all at once (parameter is the amount of time for the elements)
// });

// using timeline toautomatically run animation one after another

// practice 2

// var tl = gsap.timeline();

// tl.from("h3", {
//   y: -20,
//   opacity: 0,
//   duration: 1.5,
//   ease: "power2",
// });

// tl.from("h4", {
//   y: -20,
//   opacity: 0,
//   duration: 1.5,
//   ease: "power2",
//   stagger: 0.5,
// });

// tl.from("#tipsy", {
//   opacity: 0,
//   duration: 1.5,
//   scale: 0.2,
//   ease: "power2",
// });

gsap.to("#box2 h1", {
  transform: "translateX(-80%)",
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    // markers:true
    start: "top 0%",
    end: "top -120%",
    scrub: 2,
    pin: true,
  },
});

var Path = `M 10 150 Q 250 150 490 150`;
var initialPath = `M 10 150 Q 250 150 490 150`;

var string = document.getElementById("string");

string.addEventListener("mousemove", (dets) => {
  Path = `M 10 150 Q ${dets.x} ${dets.y} 490 150`;

  gsap.to("svg path", {
    attr: {
      d: Path,
    },
    duration: 0.2,
    ease: "power2",
  });
});

string.addEventListener("mouseleave", () => {

  gsap.to("svg path", {
    attr: {
      d: initialPath,
    },
    duration: 1,
    ease: "elastic.out(1,0.1)",
  });
});
