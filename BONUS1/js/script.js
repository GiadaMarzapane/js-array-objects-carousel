const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let index = 0; index < images.length; index++) {
    const imgContainer = document.querySelector('div.img-container');
    const thumbnailsContainer = document.querySelector('div.thumbnails');
    let img = `<div class="slide hidden">
            <img src="${images[index].image}">
            <div class="absolute">
                <h3>${images[index].title}</h3>
                <p>${images[index].text}</p>
            </div>
        </div>`;    
    imgContainer.innerHTML += img;

    let imgThumb = `<div class="thumb filter">
            <img src="${images[index].image}">            
        </div>`;
    thumbnailsContainer.innerHTML += imgThumb;
}

const allSlides = document.querySelectorAll('.slide');
allSlides[0].classList.remove("hidden");

const allThums = document.querySelectorAll('.thumb');
allThums[0].classList.remove("filter");
allThums[0].classList.add("current");
/*----------------------------------------*/ 
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
/*----------------------------------------*/
let imgBlock = 0;

arrowRight.addEventListener('click',
    function(){
        if (imgBlock == (allSlides.length - 1) ){
            allSlides[imgBlock].classList.add("hidden");
            allThums[imgBlock].classList.remove("current");
            allThums[imgBlock].classList.add("filter");           
            imgBlock = 0;
            allSlides[imgBlock].classList.remove("hidden");
            allThums[imgBlock].classList.add("current");
            allThums[imgBlock].classList.remove("filter");
        }

        else if(allSlides[imgBlock].className.includes('hidden')){
            allSlides[imgBlock].classList.remove("hidden");            
            imgBlock = imgBlock + 1;
            allSlides[imgBlock].classList.add("hidden");            
        }
        else{
            allSlides[imgBlock].classList.add("hidden");
            allThums[imgBlock].classList.remove("current");
            allThums[imgBlock].classList.add("filter");
            imgBlock = imgBlock + 1;
            allSlides[imgBlock].classList.remove("hidden");
            allThums[imgBlock].classList.add("current");
            allThums[imgBlock].classList.remove("filter");
        }
    }
);

arrowLeft.addEventListener('click',
    function () {
        if (imgBlock == 0) {
            allSlides[imgBlock].classList.add("hidden");
            allThums[imgBlock].classList.remove("current");
            allThums[imgBlock].classList.add("filter");
            imgBlock = allSlides.length - 1;
            allSlides[imgBlock].classList.remove("hidden");
            allThums[imgBlock].classList.add("current");
            allThums[imgBlock].classList.remove("filter");
        }
        else if (allSlides[imgBlock].className.includes('hidden')) {
            allSlides[imgBlock].classList.remove("hidden");
            imgBlock = imgBlock - 1;
            allSlides[imgBlock].classList.add("hidden");
        }
        else {
            allSlides[imgBlock].classList.add("hidden");
            allThums[imgBlock].classList.remove("current");
            allThums[imgBlock].classList.add("filter");
            imgBlock = imgBlock - 1;
            allSlides[imgBlock].classList.remove("hidden");
            allThums[imgBlock].classList.add("current");
            allThums[imgBlock].classList.remove("filter");
        }
    }
);