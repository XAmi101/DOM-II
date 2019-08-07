// Your code goes here
const nav = document.querySelectorAll("a");
nav.forEach(function(nav) {
  nav.addEventListener("click", function(e) {
    nav.style.color = "pink";
  })
  nav.addEventListener("click", function(e) {
    e.preventDefault();
  })
});

// window.addEventListener('scroll', function(){
//     document.querySelector('section').style.backgroundColor = 'grey';
// })

const bus = document.querySelector('img');
bus.addEventListener("mouseenter", function() {
  bus.style.width = "70%";
  bus.style.position = "center"
});
bus.addEventListener("mouseout", function() {
  bus.style.width = "100%";
});

const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("mouseover", function() {
    mainNav.classList.toggle("footer");
});

const headerTwo = document.querySelectorAll("h2");
headerTwo.forEach(function(h2) {
  h2.addEventListener("click", function() {
    h2[0].classList.toggle("click-style")
  })
});

const para = document.querySelectorAll("p");
para.forEach(function(p) {
  p.addEventListener("mouseover", function() {
    p.style.color = "red";
  })
});
window.addEventListener('scroll', function() {
  para[2].style.border = "2px solid blue";
  para[5].style.border = "2px dashed lightgrey";
})


// const btn1 = document.querySelector('.btn');
// btn1.addEventListener("mouseover", function(){
//     btn1.textContent = "PICK ME!"
// });
const btns = document.querySelectorAll('.btn');
btns[0].addEventListener("mouseover", function() {
  Btns[0].textContent = "PICK ME!"
});
btns[1].addEventListener("mouseover", function() {
  btns[1].textContent = "PICK ME!"
});
btns[2].addEventListener("mouseover", function() {
  btns[2].textContent = "DON'T DO It!"
  btns[2].textContent = "DON'T DO It!"
});
btns.forEach(function(button) {
  button.addEventListener('mouseleave', function() {
    button.textContent = "SignUp!";
    button.style.color = 'orange';
  })
});
