const buttons = document.querySelectorAll(".navBar");
const sections = document.querySelectorAll(".content");
const projects = document.querySelectorAll(".projectDiv");
document.getElementById("aboutMe").classList.add("active");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = event.target.id;

    // Hide all sections
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Show the section that matches the button
    document.getElementById(`${targetId}Right`).style.display = "flex";

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
  });

  button.addEventListener("mouseover", () => {
    button.classList.add("hover");
  })
  button.addEventListener("mouseout", () => {
    button.classList.remove("hover");
  })
});

projects.forEach(project => {
    project.addEventListener("mouseover", () => {
        project.classList.add("hover");
    })
    project.addEventListener("mouseout", () => {
        project.classList.remove("hover");
    })
})