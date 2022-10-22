const button = document.querySelector(".button");
const radioValues = document.querySelectorAll(".radio");
const card = document.querySelector(".card");
let rate = "";

document.querySelector("form").addEventListener("change", () => {
  button.disabled = false;
  button.classList.add("active");
});

button.addEventListener("click", () => {
  for (value of radioValues) {
    if (value.checked) {
      rate = parseInt(value.value);
    }
  }
  card.classList.add("thankyou");
  card.innerHTML = `<img
            src="./images/illustration-thank-you.svg"
            alt="thank you" class="thankyou_icon"/>
          <p class="thankyou_note"> You selected out ${rate} of 5 </p>
          <h1 class="component_title thankyou_title">Thank you!</h1>
          <p class="component_text thankyou_text">
            We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in touch!
          </p>`;
});
