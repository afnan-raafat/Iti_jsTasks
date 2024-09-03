var cn = 0; // current
var cnInterval;
var circles = document.querySelectorAll(".circle");

function start() {
  cnInterval = setInterval(() => {
    for (var i = 0; i < circles.length; i++) {
      circles[i].classList.remove("active");
        if (i === cn)
            circles[i].classList.add("active");
    }
    cn = (cn + 1) % circles.length;
  }, 2000);
}

function stop() {
  clearInterval(cnInterval);
}

for (var i = 0; i < circles.length; i++) {
  const circle = circles[i];    
//////////// EVENT Listener //////////////////////
  circle.addEventListener("mouseenter", () => {
    stop();
    for (var j = 0; j < circles.length; j++) {
      circles[j].classList.remove("active");
    }
    circle.classList.add("active");
    cn = i + 1;
  });

    circle.addEventListener("mouseleave", () => {
        start(); 
      
  });
}

start();

      







