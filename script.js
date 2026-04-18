const gallery = document.getElementById("gallery");
const threshold = document.getElementById("threshold");

function loadImages(count) {
  const batch = [];

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${Date.now() + i}`;     //Date.now makes every image different
    img.style.opacity = 0;                                                  //images start invisible
    img.style.transform = "translateY(20px)";                               //images also start slightly off grid

    gallery.appendChild(img);
    batch.push(img);
  }

  anime({                                                                   //Makes images fade in one by one
    targets: batch,                                                         //and return to grid 
    opacity: 1,
    translateY: 0,
    delay: anime.stagger(60),
    duration: 500,
    easing: "easeOutQuad"
  });
}

const observer = new IntersectionObserver((entries) => {            //Intersection Observer API: checks for the threshold div
  if (entries[0].isIntersecting) {                                  //and then loads more images. Allows the "infinite" scroll
    loadImages(10);
  }
});

observer.observe(threshold);

// Load on start
loadImages(15);