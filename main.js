import "./style.css";
import "normalize.css";
import Facebook from "./assets/icon-facebook.svg";
import Instagram from "./assets/icon-instagram.svg";
import Pinterest from "./assets/icon-pinterest.svg";

const time = ["Days", "Hours", "Minutes", "Seconds"];

const appContainer = document.querySelector("#app");
const title = document.createElement("h1");
title.textContent = "We're launching soon";
const counterdown = document.createElement("section");
counterdown.classList.add("counterdown");

const createNewCard = (title) => {
	const card = document.createElement("div");
	card.classList.add("card__container");
	card.id = title;
	const content = `
    <article class="card">
        <div class="sup__card"></div> 
        <div class="left__semicircle"></div>
        <div class="right__semicircle"></div>
        <div class="bot__card"></div>
        <div class="numbers">
          <p></p>
        </div>
      </article>
      <span>${title}</span>
  `;
	card.innerHTML = content;
	return card;
};

time.forEach((item) => {
	const card = createNewCard(item);
	counterdown.append(card);
});

const socialMedia = document.createElement("div");
socialMedia.classList.add("socialMedia");
const facebook = document.createElement("img");
const instagram = document.createElement("img");
const pinterest = document.createElement("img");
facebook.src = Facebook;
instagram.src = Instagram;
pinterest.src = Pinterest;
socialMedia.append(facebook, instagram, pinterest);

appContainer.append(title, counterdown, socialMedia);

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

function updateCard(card, value) {
	card.innerHTML = `<p>${formatTime(value)}</p>`;
}

function countDown() {
	const daysCard = document.querySelector("#Days").children[0].children[4];
	const hoursCard = document.querySelector("#Hours").children[0].children[4];
	const minutesCard =
		document.querySelector("#Minutes").children[0].children[4];
	const secondsCard =
		document.querySelector("#Seconds").children[0].children[4];

	let countS = 60;
	let countM = 59;
	let countH = 23;
	let countD = 99;

	const counter = setInterval(() => {
		countS--;
		if (countS === 0) {
			countS = 59;
			countM--;
			if (countM === 0) {
				countM = 59;
				countH--;
				if (countH === 0) {
					countH = 23;
					countD--;
					if (countD === 0) {
						clearInterval(counter);
						alert("Boom");
					}
				}
			}
		}

		updateCard(secondsCard, countS);
		updateCard(minutesCard, countM);
		updateCard(hoursCard, countH);
		updateCard(daysCard, countD);

		console.log(
			`Seconds: ${countS}, Minutes: ${countM}, Hours: ${countH}, Days: ${countD}`
		);
	}, 1000);
}

countDown();
