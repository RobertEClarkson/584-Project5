const gallery = document.getElementById("gallery");
const threshold = document.getElementById("threshold");

function loadImages(count) {
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");

    //API: Lorem Picsum from the Big List of public API's
    img.src = `https://picsum.photos/300/200?random=${Date.now() + i}`;     //Without Date.now every image was same
    img.loading = "lazy";

    gallery.appendChild(img);
  }
}

const observer = new IntersectionObserver((entries) => {            //Intersection Observer API: checks for the threshold div
  if (entries[0].isIntersecting) {                                  //and then loads more images. Allows the "infinite" scroll
    loadImages(10);
  }
});

observer.observe(threshold);

// Load on start
loadImages(15);