const filters = function () {
    const cubeElements = [...document.querySelectorAll(".cube div")];
    document
        .querySelector(".toggle-filter-blackwhite")
        .addEventListener("click", function () {
            cubeElements.forEach(el => el.classList.remove("has-filter-sepia"));
            cubeElements.forEach(el => el.classList.toggle("has-filter-blackwhite"));
            frameCanvas.classList.remove("has-filter-sepia");
            frameCanvas.classList.toggle("has-filter-blackwhite");
        });
    document
        .querySelector(".toggle-filter-sepia")
        .addEventListener("click", function () {
            cubeElements.forEach(el => el.classList.remove("has-filter-blackwhite"));
            cubeElements.forEach(el => el.classList.toggle("has-filter-sepia"));
            frameCanvas.classList.remove("has-filter-blackwhite");
            frameCanvas.classList.toggle("has-filter-sepia");
        });
};

export default filters;
