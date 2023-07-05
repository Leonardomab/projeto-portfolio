function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  
console.log(img);
  // subistituir a igamem
  if (html.classList.contains("light")) {
    // se iver light mode adicionar imagem light
    img.setAttribute("src", "avatar.png");
  } else {
    // se tiver sem light mode deixar imagem normal
    img.setAttribute("src", "avatar-light.png");
  }
}
