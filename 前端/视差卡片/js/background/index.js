const ApplyList = [];
let clientX = 0, clientY = 0;
let pendingUpdate = false;

const range = 30
const cv = (posXY, windowWH) => parseFloat((posXY / windowWH * range - range / 2).toFixed(1))
const resize = (num, scale) => parseFloat((num * scale).toFixed(1))

const updateWithRAF = () => {
    if (pendingUpdate) {
        const dx = cv(clientX, window.innerWidth);
        const dy = cv(clientY, window.innerHeight);
        ApplyList.forEach((fn) => {
            fn(dx, dy);
        });
        pendingUpdate = false
    }
    requestAnimationFrame(updateWithRAF);
};

document.addEventListener('mousemove', (e) => {
    clientX = e.clientX
    clientY = e.clientY
    pendingUpdate = true;
});

requestAnimationFrame(updateWithRAF);

export {
    ApplyList,
    resize
}
