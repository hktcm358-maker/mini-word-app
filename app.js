let currentIndex = 0;

const countEl = document.getElementById("count");
const meaningEl = document.getElementById("meaning");
const phraseEl = document.getElementById("phrase");
const wordEl = document.getElementById("word");
const answerBox = document.getElementById("answer-box");

const btnShow = document.getElementById("btn-show");
const btnNext = document.getElementById("btn-next");

function showQuestion() {
  const item = MASTER_DATA[currentIndex];

  countEl.textContent = `${currentIndex + 1} / ${MASTER_DATA.length}`;
  meaningEl.textContent = item.meaning;
  phraseEl.textContent = item.phrase;
  wordEl.textContent = item.word;

  answerBox.classList.add("hidden");
}

btnShow.addEventListener("click", function() {
  answerBox.classList.remove("hidden");
});

btnNext.addEventListener("click", function() {
  currentIndex++;

  if (currentIndex >= MASTER_DATA.length) {
    currentIndex = 0;
  }

  showQuestion();
});

showQuestion();
