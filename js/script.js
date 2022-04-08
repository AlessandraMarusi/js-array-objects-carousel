/* const items = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];

const titleArray = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const textArray = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
] */

const items = [
    {
        immagine: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',

    },
    {
        immagine: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
    },
    {
        immagine: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

    },
    {
        immagine: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

    },
    {
        immagine: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    }
]

const container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);

const slideContainer = document.createElement("div");
slideContainer.classList.add("slideContainer")
container.append(slideContainer)

const row = document.createElement("div");
row.classList.add("row")
container.append(row)

const upContainer = document.createElement("div");
upContainer.id = "up";
row.append(upContainer)

const upArrow = document.createElement("div");
upArrow.className = "fa-solid fa-chevron-up";
upContainer.append(upArrow)

const downContainer = document.createElement("div");
downContainer.id = "down";
row.append(downContainer)

const downArrow = document.createElement("div");
downArrow.className = "fa-solid fa-chevron-down";
downContainer.append(downArrow)

for (let i = 0; i < items.length; i++) {
    const slide = document.createElement("div");
    slide.classList.add("slide")
    slide.innerHTML = `<div class="slide">
                                <img src="${items[i].immagine}" alt="Img">
                                <div class="slideText">
                                    <h3>${items[i].title}</h3>
                                    <span>${items[i].text}</span>
                                </div>
                            </div>`
    /* const slide = document.createElement("div");
    slide.classList.add("slide") */
    slideContainer.append(slide)

    /* const image = document.createElement("img");
    image.setAttribute("src", items[i]);
    slide.append(image) */

    if (i == 0) {
        slide.classList.add("active")
    }

    /* const slideText = document.createElement("div");
    slideText.classList.add("slideText")
    slide.append(slideText)

    const title = document.createElement("h3");
    slideText.append(title)
    title.innerHTML = titleArray[i];

    const text = document.createElement("span");
    slideText.append(text)
    text.innerHTML = textArray[i]; */
    
    const col = document.createElement("div");
    col.classList.add("col")
    row.append(col)
    const colImage = document.createElement("img");
    colImage.setAttribute("src", items[i]);
    col.append(colImage)
}
/* SLIDER FRECCE */
let currentIndex = 0;
const slideArray = document.getElementsByClassName("slide");
const down = document.getElementById("down")
down.addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    currentIndex += 1;
    if (currentIndex > 4) {
        currentIndex = 0
    }
    slideArray[currentIndex].classList.add("active")
    colArray[currentIndex].classList.add("activeCol")
})
const up = document.getElementById("up")
up.addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    currentIndex -= 1;
    if (currentIndex == -1) {
        currentIndex = 4
    }
    slideArray[currentIndex].classList.add("active")
    colArray[currentIndex].classList.add("activeCol")
})

/* const colArray = document.getElementsByClassName("col");
colArray[0].addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    slideArray[0].classList.add("active")
    colArray[0].classList.add("activeCol")
    currentIndex = 0
})
colArray[1].addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    slideArray[1].classList.add("active")
    colArray[1].classList.add("activeCol")
    currentIndex = 1
})
colArray[2].addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    slideArray[2].classList.add("active")
    colArray[2].classList.add("activeCol")
    currentIndex = 2
})
colArray[3].addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    slideArray[3].classList.add("active")
    colArray[3].classList.add("activeCol")
    currentIndex = 3
})
colArray[4].addEventListener("click", function () {
    slideArray[currentIndex].classList.remove("active");
    colArray[currentIndex].classList.remove("activeCol")
    slideArray[4].classList.add("active")
    colArray[4].classList.add("activeCol")
    currentIndex = 4
}) */