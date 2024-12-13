// gsap.registerPlugin(SplitText);

let section = document.getElementById("section"),
  // title = document.getElementById("title"),
  // mark = title.querySelector("span"),
  dot = document.querySelector(".dot"),
  text = document.querySelector(".title1"),
  monk = document.querySelector(".monkey"),
  // radi = document.querySelector(".circledot"),
  text1 = document.querySelector(".title2"),
  tri = document.querySelector(".tria");

// let x = window.innerWidth;
// let y = window.innerHeight;
// console.log(y);
// // gsap.set(radi, {
// //   attr: { r: "100%" },
// // });
// const s1x = 5 * x;
// const s1y = -((5 / 2) * y);
// const s2x = 5 * x;
// const s2y = 5 * y;
// const s3x = -5 * x;
// const s3y = 5 * y;
// const pointStart = "50%,25% 25%,75% 75%,75%";
// const pointStart = `${s1x},${s1y} ${s2x},${s2y} ${s3x},${s3y}`;
// console.log(pointStart);

// const p1x = eval(x / 2);
// const p1y = eval(y / 2);
// const endPoint = `${p1x},${p1y} ${p1x},${p1y} ${p1x},${p1y}`;
gsap.set(
  tri,
  {
    scale: 7,
    transformOrigin: "center ",
  }
  // xPercent: 50,
  // yPercent: 50,
  // width: "142vmax", // ensures it fills every part of the screen.
  // height: "142vmax",
  // xPercent: -50, // center the dot in the section area
  // yPercent: -50,
  // top: "50%",
  // left: "50%",
);
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "bottom top",
    markers: true,
    scrub: 0.5,
    pin: section,
    duration: 2,
    pinSpacing: true,
    invalidateOnRefresh: true,
  },
  defaults: { ease: "none" },
});
// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: section,
//     start: "400",
//     end: "bottom top",
//     markers: true,
//     scrub: 0.5,
//     pin: section,
//     pinSpacing: true,
//     invalidateOnRefresh: true,
//   },
//   defaults: { ease: "none" },
// });

tl1
  .fromTo(
    tri,
    {
      scale: 7,
      transformOrigin: "center ",
    },
    {
      scale: 0,
      transformOrigin: "center ",
      duration: 4,
    }
  )

  .fromTo(
    text,
    {
      x: 0,
      y: 150,
    },
    {
      x: 0,
      y: 0,
      duration: 2,
    },
    "-=3"
  )
  .fromTo(
    monk,
    {
      x: 0,
      y: 500,
    },
    {
      x: 0,
      y: 0,
      duration: 1,
    },
    "-=2"
  )
  // .fromTo(split.char, { y: 100, opacity: 0, stagger: 0.1 })

  .fromTo(
    text1,
    {
      x: 0,
      y: 150,
    },
    {
      x: 0,
      y: 0,
      duration: 2,
    },
    "-=1"
  );
// let split = new SplitText(text, { type: "chars" });
// // let animation = gsap.from(split.char, { y: 100, opacity: 0, stagger: 0.1 });
// gsap.set(dot, {
//   // width: "170vmax",
//   // height: "200vmax",
//   width: "142vmax", // ensures it fills every part of the screen.
//   height: "142vmax",
//   xPercent: -50, // center the dot in the section area
//   yPercent: -50,
//   top: "50%",
//   left: "50%",
// });

// .to(title, { opacity: 1 })

// tl1
//   .fromTo(
//     dot,
//     {
//       x: 0,
//       y: 0,
//       ease: "power3.in",
//       scale: 1,
//     },
//     {
//       scale: 0,
//       // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
//       // xPercent: -50,
//       // yPercent: -50,
//       // x: () => {
//       //   let markBounds = mark.getBoundingClientRect(),
//       //     px = markBounds.left + markBounds.width * 0.54; // dot is about 54% from the left of the bounds of the character
//       //   return px - section.getBoundingClientRect().width / 2;
//       // },
//       // y: () => {
//       //   let markBounds = mark.getBoundingClientRect(),
//       //     py = markBounds.top + markBounds.height * 0.73; // dot is about 73% from the top of the bounds of the character
//       //   return py - section.getBoundingClientRect().height / 2;
//       // },
//     }
//   )
