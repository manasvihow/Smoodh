gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();





function menuAnimation(){
    var menu = document.querySelector("#menu");
menu.addEventListener("mouseenter", function(){
    gsap.to(menu, {
        transform: "rotate(5deg)",
        duration: 0.5
    })
})
menu.addEventListener("mouseleave", function(){
    gsap.to(menu, {
        transform: "rotate(-10deg)",
        duration: 0.5
    })
})
}
menuAnimation();

function cartAnimation(){
    var cart = document.querySelector("#cart");
cart.addEventListener("mouseenter", function(){
    gsap.to(cart, {
        transform: "rotate(-5deg)",
        duration: 0.5
    })
})
cart.addEventListener("mouseleave", function(){
    gsap.to(cart, {
        transform: "rotate(10deg)",
        duration: 0.5
    })
})
}
cartAnimation();

function flowerAnimation(){
    
var flower = document.querySelector(".flower-button");
var flowerContainer = document.querySelector(".flower-container");
var shop = document.querySelector("#shop");
var rotationTween;
    flower.addEventListener("mouseenter", function() {
        // Kill any existing tweens
        if (rotationTween) rotationTween.kill();
        
        // Start a new rotation tween
        rotationTween = gsap.to(flowerContainer, {
            rotation: "+=360",
            duration: 7,
            ease: "none",
            repeat: -1
        });
        gsap.to(shop, {
            scale: 1.1,
            duration: 0.5,
            transform: "rotate(-2deg)"
        })
    });
    flower.addEventListener("mouseleave", function() {
        if (rotationTween) {
            // Get the current rotation speed
            var currentSpeed = rotationTween.timeScale();
            
            // Stop the continuous rotation
            rotationTween.kill();
            
            // Create a new tween for deceleration
            gsap.to(flowerContainer, {
                rotation: "+=180", // Continue rotating for about half a turn
                duration: 7.1,
                ease: "power1.out",
                onUpdate: function() {
                    // Gradually reduce the speed
                    this.timeScale(currentSpeed * (1 - this.progress()));
                }
            });
        }
        gsap.to(shop, {
            scale: 1,
            duration: 0.5,
            transform: "rotate(2deg)"
        })
    });
}
flowerAnimation();


function page1Scroll(){    

var logo = document.querySelector("#logo");
gsap.to(logo, {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 85%",
        
        toggleActions: "play none none reverse"
    }
})
}
page1Scroll();



function cylindersLeft() {
    const cylindersLeftElements = document.querySelectorAll("#cylinders-left");
    const cylinderWidth = 11;
    const totalCylinders = 20;

    cylindersLeftElements.forEach(cylindersLeft => {
        gsap.set(cylindersLeft, { width: `${totalCylinders * cylinderWidth}vw` });

        gsap.to(cylindersLeft, {
            xPercent: -100, 
            duration: 30,
            ease: "linear",
            repeat: -1, 
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0) 
            }
        });
    })    
}
cylindersLeft();

function cylindersRight() {
    const cylindersRightElements = document.querySelectorAll("#cylinders-right"); // Select all elements with the class
    const cylinderWidth = 11;
    const totalCylinders = 20;

    cylindersRightElements.forEach(cylindersRight => {
        gsap.set(cylindersRight, { width: `${totalCylinders * cylinderWidth}vw` });

        gsap.to(cylindersRight, {
            xPercent: 100, 
            duration: 30,
            ease: "linear",
            repeat: -1, 
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0) 
            }
        });
    });
}
cylindersRight();


var faq = document.querySelector("#faq");




const boxes = document.querySelectorAll('.box');

function boxAnimation(){
    let activeAnimation = null; // Variable to track the active animation

boxes.forEach(function(box, index) {
    const image = document.querySelector('#image' + index + ' img'); // Corrected selector
    const imageContainer = document.querySelector('#image' + index); // Corrected selector

    box.addEventListener("mouseenter", function() {
        // Instantly hide the image
        gsap.set(image, { opacity: 0 });

        // Set background image instantly
        gsap.set(imageContainer, { 
            backgroundImage: `url('./assets/background${index}.jpg')`,
            scale: 1.2 
        });

        {
            // Start the zoom-out animation
            activeAnimation = gsap.to(imageContainer, { 
                scale: 1, 
                duration: 1.5, 
                ease: 'power2.out', 
                onComplete: () => {
                    // Reset activeAnimation when complete
                    activeAnimation = null;
                }
            });
        }
    });

    box.addEventListener('mouseleave', () => {
        // Start zoom-in effect when leaving
        if (activeAnimation) {
            activeAnimation.timeScale(1); // Reset speed
        }
        activeAnimation = gsap.to(imageContainer, {
            scale: 1.1, // Zoom in a little
            duration: 0.5, // Duration for zoom-in effect
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.set(imageContainer, { backgroundImage: "none", scale: 1 });  // Remove background and reset scale
                gsap.set(image, { opacity: 1 }); // Show the image again
                activeAnimation = null; // Reset activeAnimation when complete
            }
        });
    });
});
}
boxAnimation();


function cardsAnimation() {
    const cards = document.querySelectorAll(".card"); // Select all elements with the class

    cards.forEach(card => {

        gsap.to(card, {
            xPercent: 100, 
            ease: "linear", 
            scrollTrigger: {
                trigger: "#page7",
                scroller: "#main",
                start: "top 70%",
                scrub: 2
            },
            modifiers: {
                xPercent: gsap.utils.wrap(-100, 0) 
            }
        });
    });
}
cardsAnimation();



function faqAnimation(){
    var faq = document.querySelector("#faq");
faq.addEventListener("mouseenter", function(){
    gsap.to(faq, {
        transform: "rotate(5deg)",
        duration: 0.5
    })
})
faq.addEventListener("mouseleave", function(){
    gsap.to(faq, {
        transform: "rotate(-10deg)",
        duration: 0.5
    })
})
}
faqAnimation();