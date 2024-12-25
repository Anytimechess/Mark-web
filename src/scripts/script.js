// Toggle Menu Function for Mobile
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Slider functionality for Recent Projects (left and right sliding)
// let currentSlide = 0;
// const slides = document.querySelectorAll('.project-card');
// const totalSlides = slides.length;

// document.getElementById('slide-left').addEventListener('click', () => {
//     changeSlide(-1);
// });
// document.getElementById('slide-right').addEventListener('click', () => {
//     changeSlide(1);
// });

// function changeSlide(direction) {
//     currentSlide += direction;
//     if (currentSlide < 0) currentSlide = totalSlides - 1; // Loop to last slide
//     if (currentSlide >= totalSlides) currentSlide = 0; // Loop to first slide

//     // Adjust the position of project cards
//     const offset = -currentSlide * 340; // Assuming each card is 340px wide
//     document.querySelector('.projects-container').style.transform = `translateX(${offset}px)`;
// }

// Smooth Scrolling to sections
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Form Validation for Get in Touch
const form = document.querySelector('.get-in-touch form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Process the form (here, just log for now)
    console.log("Form submitted with values:", { name, email, phone, message });
    alert('Your message has been sent!');
    form.reset();
});


// generating cards
let arr=[
    {
        imgName:"construction",
        cardTitle:"Construction",
        cardBody:"Built to last, designed to impress. Our furniture is crafted with the highest quality materials and attention to detail, ensuring durability and style that will stand the test of time."
    },
    {
        imgName:"interior",
        cardTitle:"Interior",
        cardBody:"Our furniture is designed to be as functional as it is beautiful. With a wide range of styles and sizes, you can find the perfect piece to fit your space and your lifestyle."

    },
    {
        imgName:"furniture",
        cardTitle:"Furniture",
        cardBody:"Our furniture is designed to be as functional as it is beautiful. With a wide range of styles and sizes, you can find the perfect piece to fit your space and your lifestyle."
    },
    {
        imgName:"real-estate",
        cardTitle:"Real Estate",
        cardBody:"your perfect space awaits"
    },
    {
        imgName:"neon-light",
        cardTitle:"Neno Lights",
        cardBody:"Illuminate your space with style and sophistication. Our lighting fixtures are designed to be as beautiful as they are functional, adding a touch of elegance to any room."
    },
    {
        imgName:"teamup-investment",
        cardTitle:"Team Up Investments",
        cardBody:"Partnering for a brighter future"
    }
]

// let servicesContainer=document.querySelector(".services-cards");
// console.log(servicesContainer);
// let htmlAcc=``;
// arr.forEach((card)=>{
//     htmlAcc+=`
//       <div class="carousel-item active" data-bs-interval="3000">
//         <div class="services-card">
//           <img class="services-card-img" src="../src/images/servicesImgs/${card.cardTitle}.jpg" alt="">
//           <div class="services-card-header">
//             <p class="services-card-text">construction</p>
//           </div>
//           <div class="services-card-body">
//             <p>Built to last, designed to impress. Our furniture is crafted with the highest quality materials and attention to detail, ensuring durability and style that will stand the test of time.</p>
//           </div>
//           <div class="services-card-footer">
//             <button class="learn-more">Learn More</button>
//           </div>
//         </div>
//         `
// })
// servicesContainer.innerHTML=htmlAcc;



// let carouselContainer=document.querySelector(".carousel-inner");
// let htmlAcc=``;
// arr.forEach((ServiceCard)=>{
//     htmlAcc+=`
//     <div class="carousel-item active" data-bs-interval="3000">
//     <div class="services-card">
//       <img class="services-card-img" src="../src/images/servicesImgs/${ServiceCard.imgName}.jpg" alt="">
//       <div class="services-card-header">
//         <p class="services-card-text">${ServiceCard.cardTitle}</p>
//       </div>
//       <div class="services-card-body">
//         <p>${ServiceCard.cardBody}</p>
//       </div>
//       <div class="services-card-footer">
//         <button class="learn-more">Learn More</button>
//       </div>
//     </div>
//     `
// })
// console.log(htmlAcc);
// carouselContainer.innerHTML=htmlAcc;