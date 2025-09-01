const message = `I don’t even know if you’ll ever read this.\nBut if you do… Gusto ko lang malaman mo na naiisip pa din kita.\n\nWe both tried. We both cared. But, by fate ito ang nangyari at gusto ko lang din ipaalam sa'yo na minahal kita ng totoo.\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nAnyways, I will always pray that you'll be doing okay, even though we’re not in each other’s lives anymore.\n\Muli, salamat Tangi~ ^_^       \n\                             Deybsue~`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
