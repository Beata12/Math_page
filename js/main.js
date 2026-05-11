// -----------------------------------------------
// CIEKAWOSTKI – dane i rotacja co 30 sekund
// -----------------------------------------------
const facts = [
	{
		emoji: "🐝",
		title: "Pszczoły są świetnymi matematykami!",
		text: `Czy wiesz, że <strong>pszczoły budują plastry miodu w kształcie sześciokątów</strong>? To nie przypadek!
               Matematycy obliczyli, że sześciokąt to <strong>najoszczędniejszy kształt</strong> do przechowywania miodu —
               zużywa najmniej wosku i mieści najwięcej słodyczy. Natura sama stosuje geometrię! 🍯`,
	},
	{
		emoji: "🌀",
		title: "Złota spirala jest wszędzie!",
		text: `Liczba <strong>φ (phi) ≈ 1,618</strong> to tzw. złoty podział. Znajdziesz ją w muszlach ślimaków, 
               układzie słonecznika, a nawet w proporcjach ludzkiego ciała! Matematycy nazywają ją 
               <strong>najpiękniejszą liczbą w przyrodzie</strong>. 🌻`,
	},
	{
		emoji: "🃏",
		title: "Talia kart nigdy się nie powtarza!",
		text: `Jeśli dobrze potasujesz 52 karty, kolejność, którą otrzymasz, <strong>prawie na pewno nigdy 
               wcześniej nie istniała</strong> i nigdy więcej nie powstanie. Liczba możliwych układów to 
               52! — liczba z 68 cyframi. Tak wielka, że trudno ją sobie wyobrazić! 🤯`,
	},
	{
		emoji: "🕰️",
		title: "Dlaczego zegar ma 12 godzin?",
		text: `Starożytni Egipcjanie i Babilończycy liczyli na podstawie <strong>liczby 12</strong>, bo 12 
               dzieli się przez 1, 2, 3, 4 i 6 bez reszty — to bardzo wygodne! Dlatego mamy 12 godzin 
               na zegarku, 60 minut w godzinie i 360 stopni w okręgu. <strong>Matematyka rządzi czasem!</strong> ⏱️`,
	},
	{
		emoji: "♾️",
		title: "Nieskończoność jest większa niż nieskończoność!",
		text: `Matematyk Georg Cantor odkrył, że istnieją <strong>różne rodzaje nieskończoności</strong>. 
               Na przykład liczb rzeczywistych jest „więcej" niż liczb naturalnych — choć obu jest 
               nieskończenie wiele! To jeden z najbardziej zaskakujących wyników w historii matematyki. 🧠`,
	},
	{
		emoji: "🎲",
		title: "Prawdopodobieństwo to potężne narzędzie!",
		text: `Rzucając monetą 10 razy, możesz spodziewać się około 5 orłów i 5 reszek. Ale dostanie 
               10 orłów z rzędu nie jest <strong>niemożliwe</strong> — szansa wynosi tylko 1 na 1024. 
               Matematycy dzięki rachunkowi prawdopodobieństwa <strong>przewidują pogodę, ryzyko chorób 
               i wyniki wyborów!</strong> 🌦️`,
	},
	{
		emoji: "🔺",
		title: "Trójkąt Pascala kryje sekrety!",
		text: `Trójkąt Pascala to układ liczb, w którym każda liczba jest sumą dwóch powyżej niej. 
               Ukryte są w nim <strong>ciąg Fibonacciego, potęgi dwójki i wzory kombinatoryczne</strong>. 
               To jeden z najbardziej magicznych obiektów w całej matematyce! ✨`,
	},
	{
		emoji: "🧮",
		title: "Zero to wielki wynalazek!",
		text: `Przez tysiące lat ludzie liczyli <strong>bez zera</strong>! Dopiero około VII wieku 
               matematycy indyjscy wprowadzili zero jako pełnoprawną liczbę. Bez zera nie byłoby 
               komputerów, smartfonów ani całej nowoczesnej matematyki. <strong>Zero to bohater!</strong> 🦸`,
	},
];

const FACT_DURATION = 30000; // 30 sekund
let currentFact = 0;
let factTimer = null;
let progressTimer = null;

function renderFact(index, skipFade = false) {
	const content = document.getElementById("factContent");
	const emoji = document.getElementById("factEmoji");
	const title = document.getElementById("factTitle");
	const text = document.getElementById("factText");
	const bar = document.getElementById("factProgressBar");
	const dots = document.querySelectorAll(".fact-dot");

	const doSwap = () => {
		emoji.textContent = facts[index].emoji;
		title.textContent = facts[index].title;
		text.innerHTML = facts[index].text;
		content.classList.remove("fading");

		// Aktualizuj kropki
		dots.forEach((d, i) => d.classList.toggle("active", i === index));

		// Animuj pasek postępu
		bar.style.transition = "none";
		bar.style.width = "0%";
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				bar.style.transition = `width ${FACT_DURATION}ms linear`;
				bar.style.width = "100%";
			});
		});
	};

	if (skipFade) {
		doSwap();
	} else {
		content.classList.add("fading");
		setTimeout(doSwap, 500);
	}
}

function buildFactDots() {
	const container = document.getElementById("factDots");
	facts.forEach((_, i) => {
		const btn = document.createElement("button");
		btn.classList.add("fact-dot");
		if (i === 0) btn.classList.add("active");
		btn.setAttribute("aria-label", `Ciekawostka ${i + 1}`);
		btn.addEventListener("click", () => {
			clearInterval(factTimer);
			currentFact = i;
			renderFact(currentFact);
			startFactRotation();
		});
		container.appendChild(btn);
	});
}

function startFactRotation() {
	clearInterval(factTimer);
	factTimer = setInterval(() => {
		currentFact = (currentFact + 1) % facts.length;
		renderFact(currentFact);
	}, FACT_DURATION);
}

// Inicjalizacja ciekawostek
buildFactDots();
renderFact(0, true); // pierwsza bez fade
startFactRotation();

// -----------------------------------------------
// Dane cytatów matematycznych
// -----------------------------------------------
const quotes = [
	{
		text: "Matematyka to język, w którym Bóg napisał Wszechświat.",
		author: "Galileusz",
		color: "#4ecdc4",
	},
	{
		text: "Matematyka nie kłamie. Kłamią tylko ci, którzy z niej korzystają.",
		author: "Albert Einstein",
		color: "#ff6b35",
	},
	{
		text: "Nie martw się swoimi kłopotami z matematyką. Moje są o wiele większe!",
		author: "Albert Einstein",
		color: "#a29bfe",
	},
	{
		text: "Czysta matematyka jest — po swojemu — poezją idei logicznych.",
		author: "Albert Einstein",
		color: "#fd79a8",
	},
	{
		text: "Matematyka to jedyna nauka, gdzie nie wiemy, o czym mówimy, a jednak mamy rację.",
		author: "Bertrand Russell",
		color: "#00b894",
	},
	{
		text: "Liczby rządzą światem.",
		author: "Pitagoras",
		color: "#e17055",
	},
	{
		text: "Daj mi punkt oparcia, a poruszę Ziemię.",
		author: "Archimedes",
		color: "#fdcb6e",
	},
	{
		text: "Życie to matematyka — nie możesz jej unikać, możesz tylko ją polubić!",
		author: "Przysłowie szkolne",
		color: "#74b9ff",
	},
	{
		text: "Każdy problem matematyczny ma rozwiązanie — trzeba go tylko znaleźć.",
		author: "Mądrość matematyków",
		color: "#55efc4",
	},
	{
		text: "Matematyka to nie nudne liczby — to przygoda ukryta w zagadkach!",
		author: "Twój nauczyciel",
		color: "#ff6b35",
	},
];

// -----------------------------------------------
// Wypełnianie slidera cytatami (ze zduplikowaniem
// dla efektu nieskończonej pętli)
// -----------------------------------------------
function buildQuotesTrack() {
	const track = document.getElementById("quotesTrack");

	// Podwójny zestaw dla seamless looping
	const doubled = [...quotes, ...quotes];

	doubled.forEach((q) => {
		const card = document.createElement("div");
		card.classList.add("quote-card");
		card.style.setProperty("--q-color", q.color);

		card.innerHTML = `
          <div class="quote-mark">"</div>
          <p class="quote-text">${q.text}</p>
          <div class="quote-author">— ${q.author}</div>
        `;

		track.appendChild(card);
	});

	// Dopasuj szerokość animacji do połowy łącznej szerokości tracka
	// Animacja CSS slideLeft przesuwa o 50% (co odpowiada jednemu zestawowi)
}

buildQuotesTrack();

// -----------------------------------------------
// Delikatne fade-in przy przewijaniu strony
// (Intersection Observer)
// -----------------------------------------------
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";
			}
		});
	},
	{ threshold: 0.12 },
);

document.querySelectorAll(".class-card, .fact-content").forEach((el) => {
	el.style.opacity = "0";
	el.style.transform = "translateY(30px)";
	el.style.transition = "opacity .5s ease, transform .5s ease";
	observer.observe(el);
});

// -----------------------------------------------
// Płynne przewijanie do sekcji klas po kliknięciu CTA
// -----------------------------------------------
document.querySelector(".hero-cta").addEventListener("click", function (e) {
	e.preventDefault();
	document.querySelector("#klasy").scrollIntoView({ behavior: "smooth" });
});
