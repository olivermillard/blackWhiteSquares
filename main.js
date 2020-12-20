/* eslint-disable no-unused-vars */
var mainContainer = document.getElementById("mainContainer");

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var numBlockMod = 50;
var borderMod = 5;
var blocksIdArray = [];
var pageWidth = getWidth();
var pageHeight = getHeight();
var containerWidth = pageWidth - (pageWidth % numBlockMod);
var containerHeight = pageHeight - (pageHeight % numBlockMod) - numBlockMod;
var numBlocksRow = containerWidth / numBlockMod;
var numBlocksCol = containerHeight / numBlockMod;
var numBlocks = numBlocksRow * numBlocksCol;
var marginWidth = (pageWidth % numBlockMod) + numBlockMod;
var marginHeight = (pageHeight % numBlockMod) + numBlockMod;
var reverseClass = false;

function setup() {
  var blockContainer = document.createElement("div");
  blockContainer.setAttribute("id", "blockContainer");
  blockContainer.style.width = "100%"; //containerWidth + "px";
  blockContainer.style.height = containerHeight + "px";
  var prevBlockContainer = document.getElementById("blockContainer");
  if (prevBlockContainer) {
    mainContainer.removeChild(prevBlockContainer);
  }

  var currRow = 1;
  for (var i = 0; i < numBlocks; i++) {
    var newBlock = document.createElement("div");
    if (reverseClass == false) {
      newBlock.classList.add("block");
      reverseClass = true;
    } else {
      newBlock.classList.add("reverseBlock");
      reverseClass = false;
    }

    newBlock.style.width = numBlockMod - borderMod + "px";
    newBlock.style.height = numBlockMod - borderMod + "px";
    newBlock.style.position = "absolute";
    var x = (i % numBlocksRow) + 1;
    var y;
    var yPos;
    if (i % numBlocksRow == numBlocksRow - 1) {
      y = currRow;
      yPos = currRow * numBlockMod - (numBlocks / marginHeight) * 2;
      newBlock.style.top = yPos + "px";
      currRow += 1;
    } else {
      yPos = currRow * numBlockMod - (numBlocks / marginHeight) * 2;
      newBlock.style.top = yPos + "px";
      y = currRow;
    }
    var blockID = "b" + x + "-" + y;
    var xPos = (x - 1) * numBlockMod + (numBlocks / marginWidth) * 2;
    newBlock.style.left = xPos + "px";
    newBlock.setAttribute("id", blockID);
    blocksIdArray.push(blockID);
    blockContainer.appendChild(newBlock);
  }
  mainContainer.appendChild(blockContainer);
  animateFunc();
}

// var animation1;
// function animateFunc() {
//   // eslint-disable-next-line no-undef
//   animation1 = anime({
//     targets: ".block",
//     rotateZ: 180,
//     direction: "alternate",
//     loop: true,
//     easing: "easeInOutSine",
//     duration: 3000,
//     endDelay: 100,
//   });
//   // eslint-disable-next-line no-undef
//   anime({
//     targets: ".reverseBlock",
//     rotateZ: -180,
//     direction: "alternate",
//     loop: true,
//     easing: "easeInOutSine",
//     duration: 3000,
//     endDelay: 100,
//   });
// }
// var paused = false;
// document.addEventListener("keyup", (event) => {
//   if (event.code === "Space") {
//     if (paused == false) {
//       paused = true;
//       animation1.pause;
//     } else {
//       paused = false;
//     }
//   }
// });
