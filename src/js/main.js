import "../scss/styles.scss";

const fetchAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    document.getElementById(
      "advice-title"
    ).textContent = `Advice #${data.slip.id}`;
    document.getElementById(
      "advice-text"
    ).textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    document.getElementById("advice-title").textContent =
      "Oops, something went wrong!";
    document.getElementById("advice-text").textContent =
      "Please try again later.";
  }
};

const generateAdvice = () => {
  const diceBtn = document.querySelector(".dice-btn");

  diceBtn.addEventListener("click", () => {
    fetchAdvice();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  generateAdvice();
  fetchAdvice();
});

/* const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);

  document.getElementById(
    "advice-title"
  ).textContent = `Advice #${data.slip.id}`;
  document.getElementById("advice-text").textContent = `"${data.slip.advice}"`;
};

fetchAdvice();

const generateAdvice = () => {
  const diceBtn = document.querySelector(".dice-btn");

  diceBtn.addEventListener("click", () => {
    fetchAdvice();
  });
};

generateAdvice();
 */
