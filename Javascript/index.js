let reviews = [
    {
        name : 'Edward Newgate',
        tagline: 'Founder Circle',
        img: './image/dev.png',
        text: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely”'
    },
    {
        name : 'Milad Amiri',
        tagline: 'Web Developer',
        img: './image/milad.jpg',
        text: '“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.”'
    },
    {
        name : 'Jawad Ahmadi',
        tagline: 'Web Designer',
        img: './image/jawad.jpg',
        text: '“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable”'
    },
]

let rightBtn = document.querySelector(".right-btn");
let leftBtn = document.querySelector(".left-btn");
let flexCostumer = document.querySelector(".costumer-flex")

let counter = 0;
moveToRight(counter);

function moveToRight(index){
    let item = reviews[index];
    let customer =`<div class="profile"><img id="photo" src="${item.img}"></div>` +
                    `<div class="detile">
                    <h3 id="peron-name">${item.name}</h3>
                    <p id="person-skill">${item.tagline}</p></div>` +
                    `<div class="information"><p id="person-info">${item.text}</p></div>`;
    flexCostumer.innerHTML = customer;

}

rightBtn.onclick = ()=>{
    counter++;
    if(counter > reviews.length - 1){
        counter = 0;
        leftBtn.style.color ='rgb(160, 160, 160)';
        rightBtn.style.color = '#458FF6';
    }
    moveToRight(counter)
}

leftBtn.onclick = ()=>{
    counter--;
    if(counter < 0){
        counter = reviews.length - 1
        leftBtn.style.color = '#458FF6';
        rightBtn.style.color ='rgb(160, 160, 160)';
    }
    moveToRight(counter)
}

function circles(){
    let circle = document.querySelectorAll(".circle");
    for (let i = 0; i < circle.length; i++){
        
    }
}

//toggle btn 

const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");
const overFlow = document.querySelector(".overflow");

toggle.addEventListener('click', function(){
nav.classList.toggle('open')
overFlow.classList.toggle('open')

const unlist  = nav.querySelectorAll("li");
unlist.forEach(function(list){
    list.addEventListener('click', function(){
        nav.classList.remove("open");
        overFlow.classList.remove("open");
    })
overFlow.addEventListener("click", function(){
        nav.classList.remove("open");
        overFlow.classList.remove("open");
    })
})
})
