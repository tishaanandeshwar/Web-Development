const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (window.innerWidth <= 995) {
            nav.classList.remove('active');
        }
    });
});

// Active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        
        formStatus.innerHTML = `✨ Thank you ${name}! I'll get back to you soon. ✨`;
        formStatus.style.color = '#b74b4b';
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.innerHTML = '';
        }, 4000);
    });
}

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendMessageBtn = document.getElementById('sendMessage');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
    });
}

if (closeChatbot) {
    closeChatbot.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });
}

// Chatbot Responses
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('skill') || msg.includes('technologies') || msg.includes('tech stack')) {
        return "Tisha is skilled in: Python, Java, C++, Generative AI, Prompt Engineering, Vertex AI, MCP, Spring Boot, Web Scraping, DSA, Git, VS Code, and Kaggle.";
    }
    else if (msg.includes('project') || msg.includes('work')) {
        return "Tisha's main projects: 1) AI-Driven Government Tender Aggregator (2026) - Scrapes tenders using OCR, 2) Transport Management System (2025) - Java/Spring Boot, 3) Data Structures Library, 4) AI-Powered Applications using GenAI.";
    }
    else if (msg.includes('education') || msg.includes('study') || msg.includes('college')) {
        return "Tisha is currently pursuing B.E. Computer Science at J D College of Engineering & Management, Nagpur (Expected 2028). She completed her HSC in Science from Shri Mahavir Marwadi Junior College.";
    }
    else if (msg.includes('hackathon') || msg.includes('competition')) {
        return "Tisha participated in: innovateXSprint 1.0 at GH Raisoni College (12 March 2026) and Hackathonix 2.0 at KDK College (9 March 2026).";
    }
    else if (msg.includes('certification') || msg.includes('certificate')) {
        return "Tisha holds certifications from L&T (Linux, Java, Spring Boot), IIT Kharagpur (KSHITIJ 2026), Kaggle, Google, Coursera, NVIDIA, and Google Cloud Skills Boost.";
    }
    else if (msg.includes('hobby') || msg.includes('interest') || msg.includes('like')) {
        return "Tisha enjoys learning Japanese language, sketching, and practicing Data Structures & Algorithms on coding platforms.";
    }
    else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
        return "You can email Tisha at tishanandeshwar@gmail.com or connect via LinkedIn, GitHub, Twitter, or Instagram. Links are in the home section!";
    }
    else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! 👋 I'm Tisha's AI assistant. Ask me about her skills, projects, education, certifications, or hobbies!";
    }
    else {
        return "I can tell you about Tisha's skills, projects, education, hackathons, certifications, or hobbies. What would you like to know?";
    }
}

function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === '') return;
    
    addMessage(userMessage, true);
    chatbotInput.value = '';
    
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, false);
    }, 500);
}

if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

document.addEventListener('click', function(e) {
    if (window.innerWidth <= 995) {
        if (!nav.contains(e.target) && !document.querySelector('.logo').contains(e.target)) {
            nav.classList.remove('active');
        }
    }
});

console.log('Portfolio loaded successfully!');
