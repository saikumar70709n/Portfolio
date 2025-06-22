gsap.registerPlugin(ScrollTrigger);

gsap.from("header", { 
    duration: 1, 
    y: "-100%", 
    ease: "bounce" 
});

gsap.from("#about h2, #about p", { 
    scrollTrigger: "#about",
    duration: 1, 
    x: "-50%", 
    opacity: 0, 
    ease: "power4.out",
    stagger: 0.3 
});

gsap.from(".project", { 
    scrollTrigger: "#projects",
    duration: 1, 
    y: 50, 
    opacity: 0, 
    stagger: 0.3, 
    ease: "power2.out" 
});

gsap.from("#contact h2, #contact p", { 
    scrollTrigger: "#contact",
    duration: 1, 
    x: "50%", 
    opacity: 0, 
    ease: "power3.out",
    stagger: 0.2 
});

// Responsive Adjustments (Mobile)
if (window.innerWidth < 768) {
    gsap.from("header h1", { 
        duration: 1, 
        scale: 0.8, 
        opacity: 0, 
        ease: "power3.out" 
    });

    gsap.from("#about p", { 
        scrollTrigger: "#about",
        duration: 1.2, 
        x: "0%", 
        opacity: 0, 
        ease: "power4.out" 
    });
}

// Smooth Scroll Effect (Optional)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.out"});
    });
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;
  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
