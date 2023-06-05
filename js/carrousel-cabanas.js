//-------------------------CARROUSEL-----------------------//
//---------------------CARROUSEL CABANAS-------------------//
document.addEventListener('DOMContentLoaded', function(){
    const imagenes = [
        "cabana-1.jpg",
        "cabana-2.jpg",
        "cabana-3.jpg",
        "cabana-4.jpg",
        "cabana-5.jpg",
        "cabana-6.jpg"
    ];
    let currentIndex = 0;
    const intervalD = 3000;

    const carrouselImg = document.getElementById('carrousel-image');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const currentIndexDisplay = document.getElementById('currentIndex');

    function mostrarImage(){
        const imageUrl = 'img/' + imagenes[currentIndex];
        carrouselImg.src = imageUrl;
        currentIndexDisplay.textContent = " Indice: " + currentIndex;
    }
    function nextImage(){
        currentIndex++;
        if (currentIndex >= imagenes.length){
            currentIndex = 0;
        }
        mostrarImage();
    }
    function prevImage(){
        currentIndex--;
        if(currentIndex<0){
            currentIndex = imagenes.length - 1;
        }
        mostrarImage();
    }
    function movimientoAuto(){
        setInterval(()=>{
            nextImage();
        }, intervalD);
    }
    btnNext.addEventListener('click', nextImage);
    btnPrev.addEventListener('click', prevImage);

    mostrarImage();
    movimientoAuto();
});