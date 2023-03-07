// references to elements
const prevbtn = document.querySelector("#prev_btn");
const nextbtn = document.querySelector("#next_btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// event listener (omg we learnt abt this in class :O)
prevbtn.addEventListener("click", goPrevPage);
nextbtn.addEventListener("click", goNextPage);

// logics and functions
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  // moves the prev button to the left
  book.style.transform = "translateX(50%)";
  prevbtn.style.transform = "translateX(-245px)";
  nextbtn.style.transform = "translateX(245px)";
}

function closeBook(isAtBeginning) {
  // to fix the sum errors
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  // moves the prev button back to the original position
  prevbtn.style.transform = "translateX(0px)";
  nextbtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  // this function adds the "flipped" class attribute to the current page, applying the flipping book effect
  // when the goNextPage function's used it will only
  // new attributes learned: switch; to perform different actions based on different conditions & break; stops the loop
  if (currentLocation < maxLocation) {
    // when the goNextPage function's used it will only run when the current location is not at the end of the location by this statement
    switch (currentLocation) {
      case 1:
        // when the current location is 1, it will add "flipped" class attribute to paper 1. same logic applies to the other pages
        openBook(true);
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        // to order the pages so it's not messed up
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        // when the current location is 3 tho, when u flip, the book will close
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook(false);
        break;
      default:
        // error msg if the current location is not 1, 2 or 3
        throw new Error("unkown state");
    }
    // increases the currentLocation count by 1(idk what this is for yet)
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;
        openBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation--;
  }
}
