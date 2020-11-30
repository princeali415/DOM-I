const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// HEADER 

// nav 
const services = document.querySelector('a:nth-of-type(1)');
const product = document.querySelector('a:nth-of-type(2)');
const vision = document.querySelector('a:nth-of-type(3)');
const features = document.querySelector('a:nth-of-type(4)');
const about = document.querySelector('a:nth-of-type(5)');
const contact = document.querySelector('a:nth-of-type(6)');

services.textContent = siteContent.nav['nav-item-1']
product.textContent = siteContent.nav['nav-item-2']
vision.textContent = siteContent.nav['nav-item-3']
features.textContent = siteContent.nav['nav-item-4']
about.textContent = siteContent.nav['nav-item-5']
contact.textContent = siteContent.nav['nav-item-6']

// cta Section 

let code = document.getElementById('cta-img');
code.setAttribute('src', siteContent['cta']['img-src'])

const imgC = document.querySelector('#cta-img')
const textC = document.querySelector('.cta-text h1')
const lineB = document.createElement('br')
const btn = document.querySelector('button')

textC.textContent = siteContent.cta.h1
textC.appendChild(lineB)
btn.textContent = siteContent.cta.button
textC.appendChild(lineB)

//main-section 

const topC = document.querySelector('.top-content');
topC.querySelector('.text-content h4').textContent = siteContent['main-content']['features-h4']
topC.querySelector('.text-content p').textContent = siteContent['main-content']['features-content']
topC.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['about-h4']
topC.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('.middle-img');
middleImg.src = 'img/mid-page-accent.jpg'

const bottomC = document.querySelector('.bottom-content');
bottomC.querySelector('.text-content h4').textContent = siteContent['main-content']['services-h4']
bottomC.querySelector('.text-content p').textContent = siteContent['main-content']['services-content']
bottomC.querySelector('.text-content:nth-of-type(2) h4').textContent = siteContent['main-content']['product-h4']
bottomC.querySelector('.text-content:nth-of-type(2) p').textContent = siteContent['main-content']['product-content']
bottomC.querySelector('.text-content:nth-of-type(3) h4').textContent = siteContent['main-content']['vision-h4']
bottomC.querySelector('.text-content:nth-of-type(3) p').textContent = siteContent['main-content']['vision-content']

//Contact

const contactInfo = document.querySelector('.contact');
contactInfo.querySelector('h4').textContent = siteContent.contact['contact-h4']
contactInfo.querySelector('p').textContent = siteContent.contact['address']
contactInfo.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone']
contactInfo.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email']

// footer

const footerInfo = document.querySelector('footer');
footerInfo.querySelector('p').textContent = siteContent['footer']['copyright']