document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll("#gallery ul li img");
    const featuredImage = document.querySelector("#gallery figure img");
    const caption = document.querySelector("#gallery figure figcaption");
  
    const imageInfo = [
        { src: "images/flowers-pink-large.jpg", alt: "Flowers Pink", caption: "Pink flowers add elegance to any garden." },
        { src: "images/flowers-purple-large.jpg", alt: "Flowers Purple", caption: "Purple flowers in a garden." },
        { src: "images/flowers-red-large.jpg", alt: "Flowers Red", caption: "Red flowers bring warmth and energy to the garden." },
        { src: "images/flowers-white-large.jpg", alt: "Flowers White", caption: "White flowers with dewdrops." },
        { src: "images/flowers-yellow-large.jpg", alt: "Flowers Yellow", caption: "Sunflowers turn their faces towards the sun, radiating warmth and happiness." }
    ];

    thumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener("click", function() {
            const thumbnailSrc = this.getAttribute("src");
            const fullSizeSrc = thumbnailSrc.replace("-small.jpg", "-large.jpg");
            const thumbnailAlt = this.getAttribute("alt");
  
            featuredImage.setAttribute("src", fullSizeSrc);
            featuredImage.setAttribute("alt", thumbnailAlt);
            caption.textContent = imageInfo[index].caption;
        });
    });
});
