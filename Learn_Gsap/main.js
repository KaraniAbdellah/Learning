// Start Learning GSAP
/*
    // Defference Between Tweens & Timeline
        Tween: A single animation.
        Timeline: A container for multiple tweens.
        Easing: Controls the speed of animations (e.g., slow start, fast end).
        Plugins: Add extra features like scrolling, morphing, or 3D effects.
        GSAP Core Methods: For controlling animations, like .play(), .pause(), .reverse().

    // Tweens
    from: Starts from a state you set and ends at the current state.
    to: Starts from the current state and moves to a state you set.
    fromTo: You set both start and end states.

    // Time Line
        do a lot of actions in same time with a duration
    
    // Plugins
        there is a lot of plunigs
        check out: https://gsap.com/docs/v3/Plugins
*/

document.addEventListener("DOMContentLoaded", function (event) {

    /* Start Tweens */
    gsap.to(".code-box", {
        x: 300,
        duration: 3,
        ease: "back",
        backgroundColor: "red"
    });

    gsap.from(".code-box", {
        duration: 2,
        x: 100,
        opacity: 0.2
    });

    gsap.fromTo(".code-box",
    {
        opacity: 0,
        scale: 0.5,
        y: 100,
    },
    {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
    }
    );


    /* Start TimeLine */
    const tl = gsap.timeline();
    tl.to(".box1", {y: 100, opacity: 1, duration: 1 }, "first")
        .to(".box2", {y:100, opacity: 1, duration: 1 }, "second")
        .to(".box3", {y: 100, opacity: 1, duration: 1 }, "third");
    
    // We do not have an organization here
    gsap.to(".box1", { x: 100, opacity: 1, duration: 1 });
    gsap.to(".box2", { x: 100, opacity: 1, duration: 1 });
    gsap.to(".box3", { x: 100, opacity: 1, duration: 1 });
    


    // Plugins
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".bar", {
      width: "100%",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true // true links the animation to your scroll
      }
    });

});
