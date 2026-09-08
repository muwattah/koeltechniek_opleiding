const questions = [
  {
    category: "Geschiedenis",
    question: "Wanneer verschenen de eerste huishoudelijke koelkasten?",
    options: ["1890", "1910", "1930", "1950"],
    correct: 1,
    explanation: "In 1910 verschenen de eerste huishoudelijke koelkasten."
  },
  {
    category: "Geschiedenis",
    question: "Welke synthetische koelmiddelen werden rond 1930 ontwikkeld?",
    options: [
      "Alleen R134a en R410A",
      "R11, R12, R13, R22, R113 en R114",
      "Alleen natuurlijke koudemiddelen",
      "Alleen CO\u2082"
    ],
    correct: 1,
    explanation: "Rond 1930 werden synthetische koelmiddelen zoals R11, R12, R13, R22, R113 en R114 ontwikkeld."
  },
  {
    category: "Geschiedenis",
    question: "Na de Eerste Wereldoorlog ontstond een onderscheid tussen drie soorten koeling. Welke?",
    options: [
      "Industrieel \u2013 Commercieel \u2013 Huishoudelijk",
      "Klein \u2013 Middel \u2013 Groot",
      "Lucht \u2013 Water \u2013 Glycol",
      "Compressie \u2013 Absorptie \u2013 Adsorptie"
    ],
    correct: 0,
    explanation: "Er ontstond onderscheid tussen industri\u00eble, commerci\u00eble en huishoudelijke koeling."
  },
  {
    category: "Warmtepomp",
    question: "Wat is een warmtepomp volgens de module?",
    options: [
      "Een toestel dat alleen koelt",
      "Toestel voor verwarmen van gebouwen en/of productie sanitair warm water",
      "Een pomp die water circuleert",
      "Een ventilator voor koeling"
    ],
    correct: 1,
    explanation: "Een warmtepomp is een toestel voor het verwarmen van gebouwen en/of de productie van sanitair warm water."
  },
  {
    category: "Warmtepomp",
    question: "Hoeveel procent van de verwarmingsenergie komt typisch uit de omgeving bij een warmtepomp?",
    options: ["20-35 %", "35-50 %", "65-80 %", "90-100 %"],
    correct: 2,
    explanation: "65 tot 80 % van de verwarmingsenergie komt uit de omgeving (gratis). De rest komt van elektriciteit of aardgas."
  },
  {
    category: "Warmtepomp vs Koelmachine",
    question: "Wat is het belangrijkste verschil in doel tussen een koelmachine en een warmtepomp?",
    options: [
      "Ze gebruiken verschillende koudemiddelen",
      "Koelmachine onttrekt warmte (koelen), warmtepomp geeft warmte af (verwarmen)",
      "Een warmtepomp heeft geen compressor",
      "Er is geen verschil"
    ],
    correct: 1,
    explanation: "Koelmachine: doel = warmte onttrekken (koelen). Warmtepomp: doel = warmte afgeven (verwarmen). Het werkingsprincipe is gelijk."
  },
  {
    category: "Warmteoverdracht",
    question: "Welke drie manieren van warmteoverdracht bestaan er?",
    options: [
      "Geleiding, straling, stroming (convectie)",
      "Compressie, expansie, condensatie",
      "Verdamping, condensatie, sublimatie",
      "Conductie, inductie, radiatie"
    ],
    correct: 0,
    explanation: "De drie manieren zijn: geleiding (conductie), straling en stroming (convectie)."
  },
  {
    category: "Warmteoverdracht",
    question: "In welke eenheid wordt de warmtegeleidingsco\u00ebffici\u00ebnt \u03bb uitgedrukt?",
    options: ["W/m\u00b2K", "W/mK", "J/kgK", "kW/h"],
    correct: 1,
    explanation: "\u03bb = P\u00b7d / (A\u00b7\u0394T) en heeft als eenheid W/(m\u00b7K). Het is een materiaaleigenschap."
  },
  {
    category: "Warmteoverdracht",
    question: "Elektromagnetische straling (infrarood) is een vorm van\u2026",
    options: ["Geleiding", "Convectie", "Straling", "Condensatie"],
    correct: 2,
    explanation: "Infraroodstraling is elektromagnetische straling = warmteoverdracht door straling."
  },
  {
    category: "Koelcyclus",
    question: "Wat zijn de drie relevante aggregatietoestanden in de koeltechniek?",
    options: [
      "Vast \u2013 Vloeibaar \u2013 Gasvormig",
      "Koud \u2013 Lauwwarm \u2013 Heet",
      "Lage druk \u2013 Hoge druk \u2013 Kritisch",
      "Nat \u2013 Droog \u2013 Oververhit"
    ],
    correct: 0,
    explanation: "Vast (bijv. ijs), vloeibaar (bijv. water) en gasvormig (bijv. damp)."
  },
  {
    category: "Koelcyclus",
    question: "Wat zijn de vier hoofdonderdelen van de basis koelkring (in volgorde)?",
    options: [
      "Verdamper \u2192 Compressor \u2192 Condensor \u2192 Expansieventiel",
      "Compressor \u2192 Condensor \u2192 Expansieventiel \u2192 Verdamper",
      "Condensor \u2192 Verdamper \u2192 Compressor \u2192 Expansieventiel",
      "Expansieventiel \u2192 Compressor \u2192 Verdamper \u2192 Condensor"
    ],
    correct: 1,
    explanation: "De standaard volgorde is: Compressor \u2192 Condensor \u2192 Expansieventiel \u2192 Verdamper."
  },
  {
    category: "Log p,h-diagram",
    question: "Wat stelt de x-as voor in een log p,h-diagram?",
    options: ["Druk", "Temperatuur", "Enthalpie (warmte-inhoud)", "Volume"],
    correct: 2,
    explanation: "De horizontale as (x-as) is de enthalpie h (warmte-inhoud in kJ/kg). De verticale as is de logaritmische druk."
  },
  {
    category: "Log p,h-diagram",
    question: "Wat is een isobaar?",
    options: [
      "Lijn van gelijke temperatuur",
      "Lijn van gelijke druk",
      "Lijn van gelijke enthalpie",
      "Lijn van constant volume"
    ],
    correct: 1,
    explanation: "Een isobaar is een lijn die alle punten van gelijke druk met elkaar verbindt."
  },
  {
    category: "Log p,h-diagram",
    question: "Wat is een isotherm?",
    options: [
      "Lijn van gelijke druk",
      "Lijn van gelijke temperatuur",
      "Lijn van constant dampgehalte",
      "Lijn waarbij geen warmte wordt uitgewisseld"
    ],
    correct: 1,
    explanation: "Een isotherm is een lijn die alle punten van gelijke temperatuur met elkaar verbindt."
  },
  {
    category: "Oververhitting & Onderkoeling",
    question: "Waarom is oververhitting (superheat) noodzakelijk?",
    options: [
      "Om het rendement te verhogen",
      "Om vloeistofslag in de compressor te vermijden",
      "Om de condensatietemperatuur te verlagen",
      "Om meer koudemiddel te verpompen"
    ],
    correct: 1,
    explanation: "Oververhitting zorgt ervoor dat er geen vloeistof in de compressor komt (vloeistofslag vermijden). Het is een 'noodzakelijk kwaad'."
  },
  {
    category: "Oververhitting & Onderkoeling",
    question: "Wat is het voordeel van onderkoeling (subcooling)?",
    options: [
      "Het verlaagt de verdampingstemperatuur",
      "Het verbetert het rendement (meer koelcapaciteit)",
      "Het maakt de compressor stiller",
      "Het is niet nodig"
    ],
    correct: 1,
    explanation: "Meer onderkoeling = meer koelcapaciteit en dus beter rendement. Let op: na expansie is er altijd een vloeistof/gas-mengsel."
  },
  {
    category: "COP",
    question: "Wat betekent COP?",
    options: [
      "Coefficient of Performance",
      "Cooling Output Power",
      "Compressor Operating Point",
      "Condenser Operating Pressure"
    ],
    correct: 0,
    explanation: "COP = Coefficient of Performance (het ogenblikkelijk rendement)."
  },
  {
    category: "COP",
    question: "Wat is de formule voor de COP van een koelinstallatie?",
    options: [
      "COP = toegevoerde energie / nuttige koude",
      "COP = nuttige koude / toegevoerde energie",
      "COP = drukverschil / massastroom",
      "COP = enthalpie in / enthalpie uit"
    ],
    correct: 1,
    explanation: "COP = nuttige koude \u00f7 toegevoerde energie = \u1e41(h\u2081 \u2212 h\u2084) / \u1e41(h\u2082 \u2212 h\u2081)."
  },
  {
    category: "COP",
    question: "Wat is het verschil tussen COP en EER?",
    options: [
      "Er is geen verschil",
      "COP = verwarmingsmodus, EER = koelmodus",
      "EER is altijd hoger dan COP",
      "COP is voor compressoren, EER voor ventilatoren"
    ],
    correct: 1,
    explanation: "COP = rendement in verwarmingsmodus (nuttig = warmte condensor). EER = rendement in koelmodus (nuttig = warmte verdamper)."
  },
  {
    category: "COP",
    question: "Welke twee temperaturen/drukken be\u00efnvloeden de COP het sterkst?",
    options: [
      "Omgevingstemperatuur en ruimtetemperatuur",
      "Condensatiedruk/temperatuur en verdampingsdruk/temperatuur",
      "Olie temperatuur en motor temperatuur",
      "Inlaat- en uitlaattemperatuur van de ventilator"
    ],
    correct: 1,
    explanation: "Hoe verder de drukken (en dus temperaturen) uit elkaar liggen, hoe slechter de COP/EER. De compressor moet harder werken."
  },
  {
    category: "COP",
    question: "Hoeveel hoger ligt de condensatietemperatuur typisch bij een luchtgekoelde condensor t.o.v. de omgeving?",
    options: ["+2 \u00b0C", "+5 \u00b0C", "+10 \u00b0C", "+15 \u00b0C"],
    correct: 2,
    explanation: "Bij lucht: condensatietemperatuur \u2248 omgevingstemperatuur + 10 \u00b0C. Bij water: + 5 \u00b0C."
  }
];

// State
let currentQuestion = 0;
let score = 0;
let answers = []; // { selected, correct }

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultBtn = document.getElementById('back-to-result');

const questionCounter = document.getElementById('question-counter');
const scoreLive = document.getElementById('score-live');
const progressFill = document.getElementById('progress-fill');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');

const resultEmoji = document.getElementById('result-emoji');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');
const reviewList = document.getElementById('review-list');

// Event listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
reviewBtn.addEventListener('click', showReview);
backToResultBtn.addEventListener('click', () => {
  reviewScreen.classList.remove('active');
  resultScreen.classList.add('active');
});

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answers = [];
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionCounter.textContent = `Vraag ${currentQuestion + 1} / ${questions.length}`;
  scoreLive.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentQuestion) / questions.length) * 100}%`;

  questionCategory.textContent = q.category;
  questionText.textContent = q.question;

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.dataset.index = idx;
    btn.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });

  feedback.classList.add('hidden');
  feedback.classList.remove('correct', 'wrong');
  nextBtn.classList.add('hidden');
}

function selectOption(selectedIdx) {
  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option');

  // Disable all
  options.forEach(opt => {
    opt.classList.add('disabled');
    opt.style.pointerEvents = 'none';
  });

  const isCorrect = selectedIdx === q.correct;
  answers.push({ selected: selectedIdx, correct: q.correct, isCorrect });

  if (isCorrect) {
    score++;
    options[selectedIdx].classList.add('correct');
    feedback.textContent = `\u2705 Correct! ${q.explanation}`;
    feedback.classList.add('correct');
  } else {
    options[selectedIdx].classList.add('wrong');
    options[q.correct].classList.add('correct');
    feedback.textContent = `\u274c Fout. Het juiste antwoord is: "${q.options[q.correct]}". ${q.explanation}`;
    feedback.classList.add('wrong');
  }

  feedback.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
  scoreLive.textContent = `Score: ${score}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');
  progressFill.style.width = '100%';

  const percentage = Math.round((score / questions.length) * 100);
  resultScore.textContent = `${score} / ${questions.length} (${percentage}%)`;

  if (percentage >= 85) {
    resultEmoji.textContent = '\ud83c\udfc6';
    resultMessage.textContent = 'Uitstekend! Je beheerst de basis koeltechniek zeer goed.';
  } else if (percentage >= 65) {
    resultEmoji.textContent = '\ud83d\udc4d';
    resultMessage.textContent = 'Goed gedaan! Je hebt de belangrijkste concepten onder de knie.';
  } else if (percentage >= 45) {
    resultEmoji.textContent = '\ud83d\udcda';
    resultMessage.textContent = 'Redelijk. Bekijk de les nog eens en probeer het opnieuw.';
  } else {
    resultEmoji.textContent = '\ud83d\udcaa';
    resultMessage.textContent = 'Nog wat oefening nodig. Herhaal de module en probeer opnieuw!';
  }
}

function showReview() {
  resultScreen.classList.remove('active');
  reviewScreen.classList.add('active');

  reviewList.innerHTML = '';
  questions.forEach((q, i) => {
    const ans = answers[i];
    const div = document.createElement('div');
    div.className = `review-item ${ans.isCorrect ? 'correct' : 'wrong'}`;
    div.innerHTML = `
      <h3>Vraag ${i + 1} \u2013 ${q.category}</h3>
      <p>${q.question}</p>
      <p class="answer">
        Jouw antwoord: <strong>${q.options[ans.selected]}</strong><br>
        ${ans.isCorrect ? '\u2705 Correct' : `\u274c Juist antwoord: <strong>${q.options[ans.correct]}</strong>`}
      </p>
      <p style="margin-top:8px;color:#94a3b8;font-size:13px;">${q.explanation}</p>
    `;
    reviewList.appendChild(div);
  });
}

function restartQuiz() {
  resultScreen.classList.remove('active');
  reviewScreen.classList.remove('active');
  startScreen.classList.add('active');
}