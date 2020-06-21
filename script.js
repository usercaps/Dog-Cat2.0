let some = document.querySelector('.status'),
    dogImg = document.querySelector('.DogImg'),
    catImg = document.querySelector('.CatImg'),
    dog = document.querySelector('.Dog');
cat = document.querySelector('.Cat');
dogBlock = document.querySelector('.dogBlock');
catBlock = document.querySelector('.catBlock');
buttons = document.querySelector('.buttons');
likeBlock = document.querySelector('.like');
dislikeBlock = document.querySelector('.dislike');
likeDog = [];
dislikeDog = [];
likeCat = [];
dislikeCat = [];


function DogButton() {
    fetch('https://api.thedogapi.com/v1/images/search')
        .then(Response => {
            Response.json()
                .then(data => {
                    dogImg.src = data[0].url;
                })
        });
};

//     newButtonDog.addEventListener('click', function DogButton());
// };
// исчезновение кнопок
dog.addEventListener('click', () => {
    DogButton();
    dogBlock.classList.add('block');
    buttons.classList.remove('block');
});
document.querySelector('.like-dog').addEventListener('click', () => {
    DogButton();
    likeDog.push(dogImg.src);
})
document.querySelector('.dislike-dog').addEventListener('click', () => {
    DogButton();
    dislikeDog.push(dogImg.src);
})
document.querySelector('.infoButtonOfDog').addEventListener('click', () => {
    dogBlock.classList.remove('block');
    some.classList.add('flex');
    let likeD = likeDog.length;
    let dlikeD = dislikeDog.length;
    likeBlock.innerHTML = `<p>${likeD}</p>`;
    dislikeBlock.innerHTML = `<p>${dlikeD}</p>`;

    for (let img of likeDog) {
        likeBlock.innerHTML += `<img src="${img}">`;
    }
    for (let img of dislikeDog) {
        dislikeBlock.innerHTML += `<img src="${img}">`;
    }
});




//при относительно быстром клике на кнопки не выводит следующее животное(((


    function CatButton() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(Response => {
                Response.json()
                    .then(data => {
                        catImg.src = data[0].url;
                    })
            });
    };

cat.addEventListener('click', () => {
    CatButton();
    catBlock.classList.add('block');
    buttons.classList.remove('block');

})
document.querySelector('.like-cat').addEventListener('click', () => {
    CatButton();
    likeCat.push(catImg.src);
})
document.querySelector('.dislike-cat').addEventListener('click', () => {
    CatButton();
    dislikeCat.push(catImg.src);
})
document.querySelector('.infoButtonOfCat').addEventListener('click', () => {
    catBlock.classList.remove('block');
    some.classList.add('flex');
    let likeC = likeCat.length;
    let dlikeC = dislikeCat.length;
    likeBlock.innerHTML = `<p>${likeC}</p>`;
    dislikeBlock.innerHTML = `<p>${dlikeC}</p>`;

    for (let img of likeCat) {
        likeBlock.innerHTML += `<img src="${img}">`;
    }
    for (let img of dislikeCat) {
        dislikeBlock.innerHTML += `<img src="${img}">`;
    }
});

//button назад
for (let button of document.getElementsByClassName('back')){

    button.addEventListener('click', () => {
    cat.classList.remove('block');
    dog.classList.remove('block');
    buttons.classList.add('block');
    some.classList.remove('flex');
    likeBlock.innerHTML = '';
    dislikeBlock.innerHTML = '';
  });
}