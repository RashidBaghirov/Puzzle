
let dropZones = document.querySelectorAll(".dropp");

dropZones.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("box", e.target.id);
  });
});

for (i = 0; i < dropZones.length; i++) {
  dropZones[i].addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropZones[i].addEventListener("drop", (e) => {
    let id = e.dataTransfer.getData("box");
    let el = document.getElementById(id);
    e.target.append(el);
  });
}
