const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through imagesToGallery */

let imagesToShow = [
 "./imagesToGallery/replace1.png",
 "./imagesToGallery/replace2.png",
 "./imagesToGallery/replace3.png",
 "./imagesToGallery/replace4.png",
 "./imagesToGallery/replace5.png",
 "./imagesToGallery/replace6.png",
 "./imagesToGallery/replace7.png",
 "./imagesToGallery/replace8.png",
 "./imagesToGallery/replace9.png",
 "./imagesToGallery/replace10.png",
 "./imagesToGallery/replace11.png",
 "./imagesToGallery/replace12.png",
 "./imagesToGallery/replace13.png",
 "./imagesToGallery/replace14.png",
 "./imagesToGallery/replace15.png",
 "./imagesToGallery/replace16.png",
 "./imagesToGallery/replace17.jpg",
 "./imagesToGallery/replace18.jpg",
 "./imagesToGallery/replace19.png",
]

let theLength = imagesToShow.length;

let displayInMainImage = function () {
 displayedImage.setAttribute("src", this.attributes.src.value)


}

for (let x = 0;x < theLength;x++) {
 const newImage = document.createElement('img');
 newImage.setAttribute('src', imagesToShow[x]);
 newImage.addEventListener("click", displayInMainImage)
 thumbBar.appendChild(newImage);
}

// console.log(btn.getAttribute("class"))

let darkAndLight = function () {
 if (btn.getAttribute("class") === "dark") {
  btn.setAttribute("class", "light")
  btn.textContent = "Lighteen"
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
 } else {
  btn.setAttribute("class", "dark")
  btn.textContent = "Darken"
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
 }
}


btn.addEventListener("click", darkAndLight)