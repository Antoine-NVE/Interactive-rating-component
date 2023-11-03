const container = document.getElementById("container");
const boutonsList = document.getElementsByClassName("boutons");
const boutonSubmit = document.getElementById("submit");
let note = 0;

function reset() {
  for (i = 0; i < boutonsList.length; i++) {
    boutonsList[i].style.color = "hsl(217, 12%, 63%)";
    boutonsList[i].style.background = "hsl(210, 19%, 18%)";
  }
}

for (i = 0; i < boutonsList.length; i++) {
  const bouton = document.getElementById(boutonsList[i].id);
  bouton.addEventListener("click", (e) => {
    e.preventDefault();
    reset();
    bouton.style.color = "white";
    bouton.style.background = "hsl(25, 97%, 53%)";
    note = bouton.textContent;
  });

  bouton.addEventListener("mouseenter", () => {
    if (bouton.textContent != note) {
      bouton.style.color = "white";
      bouton.style.background = "hsl(217, 12%, 63%)";
    }
  });

  bouton.addEventListener("mouseleave", () => {
    if (bouton.textContent != note) {
      bouton.style.color = "hsl(217, 12%, 63%)";
      bouton.style.background = "hsl(210, 19%, 18%)";
    }
  });
}

boutonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (note != 0) {
    container.style.alignItems = "center";
    container.style.textAlign = "center";
    container.innerHTML = `
    <img src="img/illustration-thank-you.svg">
    <span>You selected ${note} out of 5</span>
    <h1>Thank you !</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch !</p>
    `;
  } else {
    alert("Veuillez choisir une note");
  }
});

boutonSubmit.addEventListener("mouseenter", () => {
  boutonSubmit.style.color = "hsl(25, 97%, 53%)";
  boutonSubmit.style.background = "white";
});

boutonSubmit.addEventListener("mouseleave", () => {
  boutonSubmit.style.color = "white";
  boutonSubmit.style.background = "hsl(25, 97%, 53%)";
});
