// Array of 10 questions with 5 hints + 1 answer
const questions = [
  // 1
  {
    hints: [
      "مکہ مکرمہ میں واقع",
      "مسلمانوں کی مقدس ترین جگہ",
      "حج کا مرکز",
      "کیسہ پوشیدہ سیاہ کپڑا",
      "قبلة نماز کا مقام",
    ],
    answer: "کعبہ",
  },
  // 2
  {
    hints: [
      "بھارت میں واقع",
      "محبت کی علامت",
      "شاہ جہاں نے تعمیر کروایا",
      "سفید سنگ مرمر کا مقبرہ",
      "عالمی ورثہ",
    ],
    answer: "تاج محل",
  },
  // 3
  {
    hints: [
      "دبئی میں واقع",
      "دنیا کی سب سے بلند عمارت",
      "828 میٹر بلند",
      "جدید تعمیرات کی مثال",
      "2010 میں مکمل ہوا",
    ],
    answer: "برج خلیفہ",
  },
  // 4
  {
    hints: [
      "نیویارک، امریکہ میں واقع",
      "آزادی کی علامت",
      "فرانسیسی تحفہ",
      "ایک عورت کی مجسمہ",
      "1876 میں بنایا گیا",
    ],
    answer: "اسٹاچو آف لبرٹی",
  },
  // 5
  {
    hints: [
      "پیرس، فرانس میں واقع",
      "لوہے کا مشہور ٹاور",
      "1889 میں تعمیر ہوا",
      "دنیا کا مشہور سیاحتی مقام",
      "فرانسیسی انقلاب کی علامت نہیں",
    ],
    answer: "ایفل ٹاور",
  },
  // 6
  {
    hints: [
      "تین بڑی مذہبی روایات کا مقدس شہر",
      "الاقصیٰ مسجد یہاں واقع ہے",
      "یہودیوں کا پرانا مقدس مقام",
      "عیسائیوں کے لیے بھی اہم تاریخی مرکز",
      "تینوں ادیان کے لیے قبلہ اول",
    ],
    answer: "بیت المقدس",
  },
  // 7
  {
    hints: [
      "مدینہ منورہ کے قریب",
      "اسلام کی پہلی مسجد",
      "حضرت محمد ﷺ نے خود تعمیر کروائی",
      "مسجدِ نبوی سے پہلے بنی",
      "پانچ وقت کی نماز یہاں ادا کرنے کا ثواب زیادہ",
    ],
    answer: "مسجدِ قباء",
  },
];

let currentQuestionIndex = 0;
let revealedCount = 0;

const gameBoard = document.getElementById("game-board");
const controls = document.getElementById("controls");
const resetBtn = document.getElementById("resetBtn");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(index) {
  gameBoard.innerHTML = "";
  revealedCount = 0;
  controls.style.display = "none";

  const q = questions[index];

  // Create 5 hint boxes
  q.hints.forEach((hint, i) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = i + 1;
    box.setAttribute("data-text", hint);
    box.addEventListener("click", revealBox);
    gameBoard.appendChild(box);
  });

  // Create answer box
  const answerBox = document.createElement("div");
  answerBox.className = "box answer";
  answerBox.textContent = "Answer";
  answerBox.setAttribute("data-text", q.answer);
  answerBox.addEventListener("click", revealBox);
  gameBoard.appendChild(answerBox);
}

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

resetBtn.addEventListener("click", () => {
  loadQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    alert("You have completed all questions!");
  }
});

function revealBox() {
  const isAnswerBox = this.classList.contains("answer");

  if (!this.classList.contains("revealed")) {
    this.textContent = this.getAttribute("data-text");
    this.classList.add("revealed");
    revealedCount++;
  }

  // If clicked the answer box, reveal all hints instantly
  if (isAnswerBox) {
    document.querySelectorAll(".box").forEach((box) => {
      if (!box.classList.contains("revealed")) {
        box.textContent = box.getAttribute("data-text");
        box.classList.add("revealed");
        revealedCount++;
      }
    });
  }

  // Show controls if all are revealed
  if (revealedCount >= 6) {
    controls.style.display = "block";
  }
}

// Load first question
loadQuestion(currentQuestionIndex);
