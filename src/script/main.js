// Just wrap the products inside a div with the class "product-slider"
// The product listing should be in style "Galerie"


document.addEventListener("DOMContentLoaded", () => {

    let productSliderWrapper = document.querySelectorAll(".product-slider");

    for (let slider of productSliderWrapper) {
        let products = slider.querySelectorAll(".artangebote_outer_frame");
        let productSliderHTMLWrapper = document.createElement("div");
        productSliderHTMLWrapper.classList.add("slick-slider-wrapper")
        let productSliderHTMLWrapperSlickTrack = document.createElement("div");
        productSliderHTMLWrapperSlickTrack.classList.add("slick-slider")

        for (let product of products) {
            product.querySelector(".artangebote_popup").remove();
            let orgProductHTML = product.outerHTML;

            let newProductHTML = document.createElement("div");
            newProductHTML.classList.add("slick-slide");
            newProductHTML.insertAdjacentHTML('beforeend', orgProductHTML);
            productSliderHTMLWrapperSlickTrack.appendChild(newProductHTML);
        }

        productSliderHTMLWrapper.appendChild(productSliderHTMLWrapperSlickTrack)
        slider.innerHTML = "";
        slider.appendChild(productSliderHTMLWrapper)
    }


    $('.product-slider .slick-slider').slick({
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });


})