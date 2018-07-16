import frames from "./frames";
import filters from "./filters";

export const cubeVisualization = function () {
    // *** 3D VISUALIZATION CUBE *** //

    const product = {
        height: 8,
        width: 8
    };
    // Get largest dimension for scale
    // This needs to be the actual value
    const largerDimProduct =
        product.width > product.height ? product.width : product.height;
    const largerDim = element =>
        element.clientHeight > element.clientWidth
            ? element.clientHeight
            : element.clientWidth;
    const smallerDim = element =>
        element.clientHeight < element.clientWidth
            ? element.clientHeight
            : element.clientWidth;

    // Setup initial dimensions and styles
    const cubeContainer = document.querySelector(".cube-container");
    const cube = document.querySelector(".cube");
    const cubeFront = document.querySelector(".cube__front");
    const cubeSide = document.querySelector(".cube__side");

    if (cubeContainer === null) return;

    // Get pixel value of one inch
    const inch = largerDim(cube) / largerDimProduct;

    // Get larger product dimension and aspect ratio
    // Set larger dimension to 300px
    const aspectRatio =
        product.width > product.height
            ? product.height / product.width
            : product.width / product.height;
    const aspectRatioMultiply = product.width < product.height ? -1 : 1;
    const maxDim = 300;
    const minDim = maxDim * aspectRatio;
    console.log(minDim);
    // Set styles with js var instead of sass so it can update
    cubeFront.style.transform = `translate3d(0, 0, ${maxDim / 2}px)`;
    const setLargerDim = function () {
        if (product.width > product.height) {
            cubeContainer.style.width = `${maxDim}px`;
            cubeContainer.style.height = `${aspectRatio * maxDim}px`;
            cubeSide.style.marginLeft = `${maxDim / 2}px`;
            cubeSide.style.transform = `scaleX(1) translateX(-100%) rotateY(90deg)
          translate3d(0, 0, 150px)`;
        } else if (product.width < product.height) {
            cubeContainer.style.height = `${maxDim}px`;
            cubeContainer.style.width = `${aspectRatio * maxDim}px`;
            cubeSide.style.transform = `scaleX(1) translateX(-100%) rotateY(90deg)
          translate3d(${((maxDim - minDim) * aspectRatioMultiply) /
                2}px, 0, ${minDim}px)`;
        } else {
            cubeContainer.style.width = "300px";
            cubeContainer.style.height = "300px";
            cubeSide.style.marginLeft = `${maxDim / 2}px`;
            cubeSide.style.transform = `scaleX(1) translateX(-100%) rotateY(90deg)
          translate3d(0, 0, 150px)`;
        }
    };
    setLargerDim();

    // --- Create 3d cube with real values --- //

    // Set depth value
    const depthDim =
        product.width > product.height ? largerDim(cube) : smallerDim(cube);
    const cubeSideDepth75 = depthDim - inch * 0.75;
    const cubeSideDepth15 = depthDim - inch * 1.5;

    // Set depth UI of side in css
    const setDepth75 = () =>
        (cubeSide.style.clipPath = `inset(0 ${cubeSideDepth75}px 0 0)`);
    // (set default value)
    setDepth75();
    const setDepth15 = () =>
        (cubeSide.style.clipPath = `inset(0 ${cubeSideDepth15}px 0 0)`);

    document.querySelector(".toggle-75").addEventListener("click", setDepth75);
    document.querySelector(".toggle-15").addEventListener("click", setDepth15);

    // Set Border Colors
    const changeActive = function (el, removeOne, removeTwo, addOne) {
        el.classList.remove(removeOne, removeTwo);
        el.classList.toggle(addOne);
    };
    document
        .querySelector(".toggle-border-black")
        .addEventListener("click", function () {
            changeActive(
                cubeSide,
                "has-border-gray",
                "has-border-white",
                "has-border-black"
            );
        });
    document
        .querySelector(".toggle-border-white")
        .addEventListener("click", function () {
            changeActive(
                cubeSide,
                "has-border-black",
                "has-border-gray",
                "has-border-white"
            );
        });
    document
        .querySelector(".toggle-border-gray")
        .addEventListener("click", function () {
            changeActive(
                cubeSide,
                "has-border-black",
                "has-border-white",
                "has-border-gray"
            );
        });

    // FRAMES
    // frames();

    // Set Filter Colors
    filters();
};

console.log(cubeContainer);
export { cubeContainer };

cubeVisualization();
