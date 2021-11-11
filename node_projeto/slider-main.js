let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#produto-1 img")
    max = images.length;

function nextImage1() {

    images[currentImageIndex]
        .classList.remove("selected-1")
        

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0
        

    images[currentImageIndex]
        .classList.add("selected-1")
               
}

function start1() {
    setInterval(() => {
        // troca de image
        nextImage1()
    }, time)
}

window.addEventListener("load", start1)





/*------------------------------------------*/

let /*time2 = 2000,*/
    currentImageIndex2 = 0,
    images2 = document
                .querySelectorAll("#produto-2 img")
    max2 = images2.length;

function nextImage2() {

    images2[currentImageIndex2]
        .classList.remove("selected-2")
        

    currentImageIndex2++

    if(currentImageIndex2 >= max)
        currentImageIndex2 = 0
        

    images2[currentImageIndex2]
        .classList.add("selected-2")
               
}

function start2() {
    setInterval(() => {
        // troca de image
        nextImage2()
    }, time)
}

window.addEventListener("load", start2)


/* --------------------------------------------- */



let /*time2 = 2000,*/
    currentImageIndex3 = 0,
    images3 = document
                .querySelectorAll(".divisao-vitrine-3 img")
    max3 = images3.length;

function nextImage3() {

    images3[currentImageIndex3]
        .classList.remove("selected-3")
        

    currentImageIndex3++

    if(currentImageIndex3 >= max3)
        currentImageIndex3 = 0
        

    images3[currentImageIndex3]
        .classList.add("selected-3")
               
}

function start3() {
    setInterval(() => {
        // troca de image
        nextImage3()
    }, time)
}

window.addEventListener("load", start3)


  