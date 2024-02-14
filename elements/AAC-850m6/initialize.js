function(instance, context) {
  let root = instance.canvas.get(0);
  instance.data.el = document.createElement("json-viewer");
  instance.data.el.style.backgroundColor = "inherit"; 
  root.appendChild(instance.data.el);
}