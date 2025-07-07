const roles = [
     
    "Software Engineer",  
    "Full-Stack Developer",
    "Web Developer",
    "Frontend Developer",
   
    "Backend Developer",
    //"Power BI Developer" 
];


let currentRoleIndex = 0;
const dynamicRoleElement = document.getElementById("dynamicRole");

function typeRole(role) {
    let index = 0;
    dynamicRoleElement.textContent = "";
    const typingInterval = setInterval(() => {
        if (index < role.length) {
            dynamicRoleElement.textContent += role.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeRole(roles[currentRoleIndex]);
            }, 2000);
        }
    }, 100);
}

typeRole(roles[currentRoleIndex]);

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    this.style.display = "none";
    document.getElementById("successContainer").style.display = "block";
    document.getElementById("successMessage").style.opacity = "1";
    this.reset();
    setTimeout(() => {
        document.getElementById("successContainer").style.display = "none";
    }, 3000);
});

function revealTimelineItems() {
    const items = document.querySelectorAll(".timeline-item");
    const triggerBottom = window.innerHeight * 0.85;
    items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealTimelineItems);
revealTimelineItems();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("year").textContent = new Date().getFullYear();

function updateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById("current-time").textContent = now.toLocaleTimeString([], options);
}
setInterval(updateTime, 1000);
updateTime();

function showProjectInfo(project) {
    const projectInfo = document.getElementById("project-info");
    const projectDescription = document.getElementById("project-description");

    if (project === 'project1') {
        projectDescription.textContent = "This project showcases my personal portfolio website, developed using HTML, CSS, Bootstrap, and JavaScript. It is fully responsive and highlights my skills and projects.";
    } else if (project === 'project2') {
        projectDescription.textContent = "This project involves data analysis using Python and SQL to evaluate employee performance and trends. It includes data visualization and reporting.";
    }

    projectInfo.style.display = "block";
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "60px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
}
