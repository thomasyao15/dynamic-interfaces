

class Slider {
    static currentTranslate = 0;
    static slidesWrapper = document.querySelector(".slides-wrapper");
    static slideWidth = 700;
    static amountOfSlides = this.slidesWrapper.childElementCount;

    static moveRight = () => {
        if (this.currentTranslate >= (this.amountOfSlides - 1) * this.slideWidth) {
            this.currentTranslate = 0;
        } else {
            this.currentTranslate += 700;
        }

        this.slidesWrapper.style.transform = `translateX(-${this.currentTranslate}px)`
        console.log(this.slidesWrapper.style.transform)
    }

    static moveLeft = () => {
        if (this.currentTranslate <= 0) {
            this.currentTranslate = (this.amountOfSlides - 1) * this.slideWidth;
        } else {
            this.currentTranslate -= 700;
        }

        this.slidesWrapper.style.transform = `translateX(-${this.currentTranslate}px)`
        console.log(this.slidesWrapper.style.transform)
    }
}


document.querySelector(".right").addEventListener("click", Slider.moveRight);
document.querySelector(".left").addEventListener("click", Slider.moveLeft);


setInterval(Slider.moveRight, 5000)