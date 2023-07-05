function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("profile image")

  // subistituir a igamem
  if (html.classList.contains("light")) {
    // se iver light mode adicionar imagem light
    img.seletAtribute("scr", "avatar.png")
  } else {
    // se tiver sem light mode deixar imagem normal
    img.setAttribute("scr", "avatar-light.png")
  }
}
