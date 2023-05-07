const sBoxes = document.querySelectorAll(".s-box");

sBoxes.forEach(sBox => {
  sBox.addEventListener("click", () => {
    // remove active class from all s-boxes
    sBoxes.forEach(box => {
      box.classList.remove("active");
    });

    // add active class to the clicked s-box
    sBox.classList.add("active");
  });
});

const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });
  