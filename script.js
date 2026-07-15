// ==============================
// TYPING ANIMATION
// ==============================

const typingText = document.getElementById("typing-text");

const roles = [
    "Data Analyst",
    "Python Developer",
    "SQL Developer",
    "Machine Learning Engineer",
    "Power BI Developer",
    "Business Intelligence Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,212,255,.25)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";

    }

});


// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==============================
// ACTIVE NAV LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// FADE IN ANIMATION
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==============================
// RIPPLE EFFECT ON BUTTONS
// ==============================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        let circle = document.createElement("span");

        circle.classList.add("ripple");

        this.appendChild(circle);

        let x = e.clientX - this.offsetLeft;
        let y = e.clientY - this.offsetTop;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// FOOTER YEAR
// ==============================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Garvit Sardana. All Rights Reserved.`;

}


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("%cWelcome Recruiter 👋", "color:#00d4ff;font-size:24px;font-weight:bold;");
console.log("Designed & Developed by Garvit Sardana");

/*=========================
SKILL BAR ANIMATION
=========================*/

const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            progressBars.forEach(bar=>{

                const width = bar.textContent;

                bar.style.width = width;

            });

        }

    });

});

skillObserver.observe(document.querySelector("#skills"));
/*=========================
CONTACT FORM
=========================*/

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you for contacting me!\n\nI will reply to you soon.");

    form.reset();

});