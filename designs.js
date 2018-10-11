// Select color input
// Select size input
  function $(x){
   return document.getElementById(x);
  }

  let newTable = $("pixelCanvas");
  let size = $("sizePicker");
  let color = $("colorPicker");

// When size is submitted by the user, call makeGrid()
size.addEventListener("submit",function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
  }
);

function makeGrid() {
  let readHeight = document.getElementById("inputHeight").value;
  let readWidth = document.getElementById("inputWidth").value;
  for(let i = 0 ; i < readHeight; i++){
    var row = newTable.insertRow(i);
    for(let j = 0 ; j< readWidth; j++){
      row.insertCell(j);
    }
  }
}

function clearGrid(){
  while(newTable.rows.length >0){
    newTable.deleteRow(0);
  }
}

newTable.addEventListener("click", respondToClick);

//slit one listener to multiple listener and make color 
function respondToClick(event){
  if(event.target.style.backgroundColor == ""){
    event.target.style.backgroundColor = color.value;
  }else{
    event.target.style.backgroundColor = "";
  }
}
