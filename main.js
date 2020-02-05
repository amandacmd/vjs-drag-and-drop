const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// drag functions,
function dragStart() {
  //this refers to the fill
  this.className += " hold";
  setTimeout(() => ((this.className = "invisible"), 0));
}

function dragEnd() {
  //this refers to the fill
  this.className = "fill";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  //this refers to the empties
  event.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
