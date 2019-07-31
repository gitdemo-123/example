
function computePoint(x, y) {
    let r = x;
    let i = y;
    let steps = 150;
    for(var s = 0; s < steps; s++) {
        const tr = r * r - i * i + x;
        const ti = 2 * r * i + y;
        r = tr;
        i = ti
        if (r * i > 1) {
            return s / steps;
        }
    }
    return 0;
}

function drawMset(canvas, sx, sy, zoom) {
    var ctx = canvas.getContext("2d");
    for (x = 0; x < canvas.width; x++) {
        for(y = 0; y < canvas.height; y++) {
            let value = computePoint(x / canvas.width / zoom + sx, y / canvas.height / zoom + sy);
            value = Math.sqrt(value);
            let p = value * 100;
            ctx.fillStyle = 'hsl(' + p + ', 100%,'  + p + '%)';

            ctx.fillRect(x, y, 1, 1);
        }
    }
};

function draw() {
    drawMset(document.getElementById("main-canvas"), 0.35, 0.1, 10);
}