// Apparition du header en fondu
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.opacity = 0;
    setTimeout(() => {
      header.style.transition = "opacity 1.5s";
      header.style.opacity = 1;
    }, 300);
  });
  
  // Gestion des commentaires
  document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const textarea = this.querySelector("textarea");
    const comment = textarea.value.trim();
    if (comment !== "") {
      const commentList = document.getElementById("commentList");
      const p = document.createElement("p");
      p.textContent = comment;
      commentList.prepend(p); // ajoute le dernier commentaire en haut
      textarea.value = "";
    }
  });
  
