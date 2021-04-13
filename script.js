// creates an emoji button on the page with no function attached
const createEmojiButton = (emoji) => {
  const createButton = document.createElement("button");
  createButton.innerText = emoji;
  document.body.appendChild(createButton);
  return createButton;
};

// random number between 1 and 100
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// creates emoji buttons
const happyBtn = createEmojiButton("😄");
const coolBtn = createEmojiButton("😎");
const surprisedBtn = createEmojiButton("😮");

//create a random button
const randomBtn = createEmojiButton("🔥");

const emojiContainer = document.createElement("div");
document.body.appendChild(emojiContainer);
emojiContainer.classList.add("emoji-container");

const createEmojiDrawing = (emoji, row, column) => {
  // empties container before starting
  emojiContainer.innerText = "";

  // create rows
  for (i = 0; i < row; i += 1) {
    const row = document.createElement("div");
    let emojiText = "";

    // create columns
    for (j = 0; j < column; j += 1) {
      emojiText = emojiText + emoji;
    }
    row.innerText = emojiText;

    emojiContainer.appendChild(row);
  }
};

// ==== GAME STARTS =====

happyBtn.addEventListener("click", () => {
  createEmojiDrawing("😄", 3, 3);
});

coolBtn.addEventListener("click", () => {
  createEmojiDrawing("😎", 3, 3);
});

surprisedBtn.addEventListener("click", () => {
  createEmojiDrawing("😮", 3, 3);
});

const emojiArray = ["🤡", "💩", "👻", "🤖", "😻", "👑", "🐬", "🍑", "🍰", "🍪"];
let randomEmoji = "";

randomBtn.addEventListener("click", () => {
  const randomEmojiIndex = randomInteger(1, emojiArray.length);
  randomEmoji = emojiArray[randomEmojiIndex];
  const randomRow = randomInteger(1, 15);
  const randomCol = randomInteger(1, 15);
  createEmojiDrawing(randomEmoji, randomRow, randomCol);
});

// adds new row
const addNewRow = () => {
  // emojiContainerTag selects all the emoji divs
  const emojiContainerTag = document.querySelector("div.emoji-container");
  const lastChild = emojiContainerTag.lastChild;
  const newRow = document.createElement("div");
  // this will copy the value of the last child & put that value in newRow
  newRow.innerHTML = lastChild.innerHTML;
  emojiContainerTag.appendChild(newRow);
};

// to remove the last child element of the emojiContainer div
const removeRow = () => {
  const emojiContainerTag = document.querySelector("div.emoji-container");
  const lastChild = emojiContainerTag.lastChild;
  emojiContainerTag.removeChild(lastChild);
};

// when using the keyboard
document.addEventListener("keydown", (event) => {
  // if i press 'a'
  if (event.keyCode === 65) {
    createEmojiDrawing("😄", 16, 16);

    // if i press 'b'
  } else if (event.keyCode === 66) {
    createEmojiDrawing("😎", 16, 16);

    // up arrow
  } else if (event.keyCode === 38) {
    addNewRow();
    // down arrow
  } else if (event.keyCode === 40) {
    removeRow();
  } else {
    // clear function with other keys
    emojiContainer.innerText = "";
  }
});
