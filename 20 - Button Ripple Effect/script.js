const button = document.getElementById("ripple");

button.addEventListener('click', (e) => {
    const circle   = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius   = diameter / 2;
    const ripple   = button.getElementsByClassName("ripple")[0];
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left  = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top   = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    if (ripple) ripple.remove();
  
    button.appendChild(circle);
});
    
  