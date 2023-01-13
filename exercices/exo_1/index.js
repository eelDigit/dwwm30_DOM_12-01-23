const button = document.querySelector('button');


changerStyle = () => {
    const p1 = document.getElementById('parag1');
    p1.classList.add("active");
}


button.addEventListener("click", () => {
    changerStyle();
})
