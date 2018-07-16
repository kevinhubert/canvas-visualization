import cubeContainer from "./cubeVisualization";
console.log(cubeContainer);
const frames = function () {
    const frameContainer = document.querySelector(".frame-container");
    const frameToggles = [
        ...document.querySelectorAll(".frames-container button")
    ];
    const frameEl = document.querySelector(".frame-container__frame");
    const frameCanvas = document.querySelector(".frame-container__canvas");

    // Remove 3d state when frame is selected
    frameToggles.forEach(frame =>
        frame.addEventListener("click", function () {
            cubeContainer.classList.remove("is-active");
            frameContainer.classList.add("is-active");
        })
    );

    // Update frame with chosen one
    const frameList = [...document.querySelectorAll(".frame-item")];

    frameList.forEach(frame =>
        frame.addEventListener("click", function () {
            const frameUrl = `background - image: url(../dist/img / frames / ${
                product.width
                }x${product.height} / ${this.attributes["frame-type"].value}.jpg); `;
            const frameSize = parseFloat(`${this.attributes["frame-size"].value} `);
            console.log(frameSize);

            // revisit with real data
            // const frameLargerDim = product.width + 3.5;
            const frameLargerDim = product.width + frameSize;
            const framePpi = `${frameEl.clientWidth / frameLargerDim} `;

            frameCanvas.style.width = `${framePpi * product.width + 5} px`;

            return (frameEl.attributes["style"].value = frameUrl);
        })
    );
};

export default frames;
