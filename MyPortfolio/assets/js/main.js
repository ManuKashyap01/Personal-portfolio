// Menu Show Y Hidden
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close');

// Menu show
//Validate if const exists
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
//Menu Hidden
//Validate if const exists
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

//Remove Menu Mobile
const navLinks=document.querySelectorAll('.nav_link');
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click',linkAction))

// SKILLS
const skillsContent=document.getElementsByClassName('skills_content'),
    skillsHeader=document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass=this.parentNode.className
    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills_content skills_close'
    }
    if(itemClass==='skills_content skills_close'){
        this.parentNode.className='skills_content skills_open'
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

// Qualification Tabs
const tabs=document.querySelectorAll('[data-target]'),
    tabContents=document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')
        tabs.forEach(t=>{
            t.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// Portfolio pagination
let swiper = new Swiper(".portfolio_container", {
        cssMode: true,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});

// Scroll sections Active Link
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop-50;
        var sectionId=current.getAttribute('id')
        
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

// Scroll Up active
const scroll=document.getElementById('scroll-up')
function scrollUpActive(){
    const scrollY=window.pageYOffset
    if(scrollY>=560){
        scroll.classList.add('scroll_active')
    }else{
        scroll.classList.remove('scroll_active')
    }
}

window.addEventListener('scroll',scrollUpActive)

// Dark Light Mode
const themeBtn=document.getElementById('theme-btn');
const darkTheme='dark_theme';
const iconTheme='uil-sun'

// previously Selected Theme(if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

//current theme and icon
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themeBtn.classList.contains(iconTheme)?'uil-sun':'uil-moon'

//Validate if user previously selected a theme
if(selectedTheme){
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeBtn.classList[selectedIcon==='uil-sun'?'add':'remove'](iconTheme)
}

themeBtn.addEventListener('click',()=>{
    //Add/Remove the dark/light icon theme
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    //Save the current theme and icon
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
