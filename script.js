const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');

let index = 0;

function moveSlide() {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * 100}%)`;
}

// cambia cada 4 segundos (ajústalo)
setInterval(moveSlide, 4000);


document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const respuesta = document.getElementById("respuesta");
  respuesta.innerText = "Enviando...";

  let formData = new FormData(this);

  fetch("enviar.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    respuesta.innerText = data;
    this.reset();
  })
  .catch(() => {
    respuesta.innerText = "Error al enviar. Intenta nuevamente.";
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      question.addEventListener("click", () => {
        console.log("CLICK EN:", question.textContent);

        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });

  const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const phone = "593939283303";

document.querySelectorAll(".cta-pricing").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const plan = this.dataset.plan;
        const type = this.dataset.type;

        let message = "";

        if (type === "individual") {
            if (plan.includes("Sesión")) {
                message = `¡Hola! Me gustaría agendar una *${plan}*. ¿Podrías indicarme disponibilidad?`;
            } else {
                message = `¡Hola! Estoy interesado/a en el *${plan}*. Me gustaría recibir más información y agendar.`;
            }
        }

        if (type === "pareja") {
            if (plan.includes("Sesión")) {
                message = `¡Hola! Me gustaría agendar una *${plan}*. ¿Podrías indicarme disponibilidad?`;
            } else {
                message = `¡Hola! Estamos interesados en *${plan}*. Nos gustaría recibir más información.`;
            }
        }

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(url, "_blank");
    });
});


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

