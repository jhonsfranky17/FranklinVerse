const text =
  "Hi, I'm Franklin Jetty Johnson, a Full-Stack Web Developer, AI enthusiast, and freelancer. I build scalable web applications and AI-powered solutions that combine functionality with creativity. Beyond technology, I channel my creativity through music covers and lead my multi-genre band, Infinity, blending innovation and passion in everything I do. Welcome to my portfolio! ";
const intro = document.getElementById("intro");
let i = 0;
let j = 0;

function autoType() {
  if (i === text.length) return;
  if (text.charAt(i) === " ") {
    intro.innerHTML += text.substring(j, i);
    j = i;
  }
  i++;

  setTimeout(autoType, 20);
}
autoType();
