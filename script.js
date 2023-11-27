const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const screen = {
    width: 300,
    halfWidth: 150,
    height: 200,
    halfHeight: 100,
    windowScale: 0.3,
};

var map = {
    grid: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 2,14, 2, 0, 0, 0, 0, 0, 0, 0, 2,14, 2, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 2,14, 2, 0, 0, 0, 0, 0, 0, 0, 2,14, 2, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2,
        1, 1, 1, 1,15, 0,15, 1, 1, 1, 1,15, 0,15, 1, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2,15, 0,15, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,15, 0,15, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        1, 0, 0, 0, 1, 0, 0, 0, 1,11,11,14, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 1,12, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 0, 0, 0, 1,11,11,14, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 1,
        1,15, 0,15, 1,15, 0,15, 1, 1, 1,15, 0,15, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,15, 0,15, 1, 1, 1,
        6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 1,
        9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,14, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,14, 0, 0, 0, 0, 0, 0, 0, 1,
        6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,14, 3, 3, 0, 3, 0, 0, 1, 0, 0, 0, 1,15, 0,15, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 7, 1, 6, 1, 9, 1, 6, 1, 7, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
    ],
    size: 32,
    scale: 64,
    range: 2048,
    speed: 3.2,
    show: false,
    targetX: 0,
    targetY: 0,
    offsetX: 0,
    offsetY: 0,
    a: 0,
    b: 0,
};

var fps = {
    oldCycleTime: 0,
    cycleCount: 0,
    rate: "...",
    startTime: Date.now(),
    cycleTime: 0,
};

var player = {
    x: map.scale + 20,
    y: map.scale + 20,
    angle: Math.PI / 3,
    moveX: 0,
    moveY: 0,
    moveAngle: 0,
    offsetX: 0,
    offsetY: 0,
    map: 0,
    mapY: 0,
};

var wall = {
    walls: [],
    height: 0,
};

var camera = {
    FOV: Math.PI / 3,
    halfFOV: (Math.PI / 3) / 2,
    stepAngle: (Math.PI / 3) / screen.width,
};

var current = {
    angle: player.angle + camera.halfFOV,
    sin: 0,
    cos: 0,
};

var ray = {
    startX: Math.floor(player.x / map.scale) * map.scale,
    startY: Math.floor(player.y / map.scale) * map.scale,
    endX: 0,
    endY: 0,
    directionX: 0,
    directionY: 0,
    verticalDepth: 0,
    horizontalDepth: 0,
};

var texture = {
    x: 0,
    y: 0,
    endX: 0,
    endY: 0,
    image: 0,
    offset: 0,
    material: 0,
};

document.addEventListener("keydown", (event) => {
    switch(event.keyCode) {
        case 87: player.moveX = 1; player.moveY = 1; break;
        case 38: player.moveX = 1; player.moveY = 1; break;

        case 83: player.moveX = -1; player.moveY = -1; break;
        case 40: player.moveX = -1; player.moveY = -1; break;

        case 65: player.moveAngle = 1; break;
        case 37: player.moveAngle = 1; break;

        case 68: player.moveAngle = -1; break;
        case 39: player.moveAngle = -1; break;

        case 81: player.show = true; break;
    }
});
document.addEventListener("keyup", (event) => {
    switch(event.keyCode) {
        case 87: 
        case 38: 

        case 83: player.moveX = 0; player.moveY = 0; break;
        case 40: player.moveX = 0; player.moveY = 0; break;

        case 65: 
        case 37: 

        case 68: player.moveAngle = 0; break;
        case 39: player.moveAngle = 0; break;

        case 81: player.show = false; break;
    }
});

function calculateFPS(FPS) {
    fps.cycleCount++;
    if (fps.cycleCount >= FPS) {
        fps.cycleCount = 0;
    }

    fps.cycleTime = fps.startTime - fps.oldCycleTime;

    if (fps.cycleCount % FPS === 0) {
        fps.rate = Math.floor(1000 / fps.cycleTime);
    }

    drawFPS();

    setTimeout(calculateFPS, 16);
}

function drawFPS() {
    context.fillStyle = '#000000';
    context.font = '10px monospace';
    context.fillText(`FPS: ${fps.rate}`, 0, 20);

    setTimeout(drawFPS, 16);
}

function loadTextures() {
    var img = [];

    for(let index = 0; index < 13; index++) {
        img.push(document.createElement("img"));
    }

    img[0] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QgUCBsliXflQAAAg1JREFUeNrt1rEJACAQBEEVO3oMzB7svyZtQUNhpoQLlqsr5y4AH2gmAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAnjWI4YVAA8LQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAvgygGJdAPoHKCchwAAAABJRU5ErkJggg==";
    img[1] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAB7BAAAewQHDaVRTAAAAB3RJTUUH5QgUDika1uzgAwAACVNJREFUaN7VWr2ZpDoQnNsPEwNThgLAwJRBABPAGhfABnABbABnXAATwAaAsQEQAAYmhgLAwMRQAM+ovdralmDm3n3PeBjzzTAg+qe6u7rFt67rLv/no2rb9uTvlNLtdvujFa/Xq3Pu+/fv3nvnXNM05oJ93y+Xy7Zt67pO0zTP87kMdV2fKfCITCklPrsoEE+O48jzzrmU0jzP3vt1Xc1d3vtpmnB+3/e+7733+coppZRSfvunAn3fF/+43W4hBLMWRPHe8yfMiZPjOMYYKZ/3fp5nlRiX8dPo8/z8bGRY1/W+Atfrta5r2Bg3FK/etu1yuUC+cRxhLfyEB2KM+75DHyzlnMNSkBhS8t8jmXi+aRpeD1MSCF8UoM2MsfmzaZp1XRUnXBcnU0r4S++ikviEWDQ/wWOOGCMsCO+pwkUf1nX9VNc1zEYw5NBvmgZq6GV6Fz4NiJdl0QXNv0dOUOHW3wetAGkJ3aZpnrD0siy8DfmBYnFdrAhje+9hqpRSXddQzzgTAUA/HElskoxK772HxNSBpmQoVpCp6zrcFmPkY4ANGBJXG/fh8YgznGSKbJqmrutxHEMImpry0MI6uLFt2/f3d4Y4Rdc0uK5r13UwetM0TzAkbKnS6zNQ7BgDkB6L4pMGbtuWAqWU9n0/kn7bNiQG733TNPM8QwZFvIl7aAJhoMblcqlUYiyhyCHcDTSLmdF7n6cE1VNho8jRNMhlGXU8j8X5CHz5UIAPyCXQRSn9vu9d15mAhpcoDSELbCBUNJT3fY8xTtMEZQgBwsHEYTmNaq0xIQU7YaG2bbEuRFTFgEVINk2Trta2LQolEnnTNMzR0zRB3G3bWFWIIk3lBhFGjeqcaTCfgK4Q65CY2YCBZB7T971zjhfEGIk3xQw+h2E45zJlDzyiAKKTzwZIYHhWgDxLMuHCzCqrfp7Aw+CiKGoFYxg35QowjsmCgGkNZdYHpBeqgQyTB71J/yrfXYr6hQsd/Xe73eZ5DiEgDPCFGEWtZa4w9UEtqmkx5zwaLQiV19dXBD3cfkeBnI1i6XEcNZ9AExYshIF6gEY1eUyJgHGCXgbpATaYv23b6/V6XwGwSKXKeTJh8dKUT1qmxOaEY+oF+fqUXosMo/9OQ6PS51eD7cQY27ZFJPAaysF79Xn05IldcKCmFmVlbUXCAGIBDWC1QnSb2CoSr3mei2VlmiZ0XkeGp9wa3MVcmVsQWkFC/fwDD/BQ+51nPR7DMMAiKnqeDYsJh7WFPFLZ5KcH8BuUUxmOFnyUZCxxZMWiEEhxTLisryARMca6rruuY++qrCRn14ce0N+Estq473ttWLVVjTGSSjjngGbnHHlR0bTTNG3bBiuiVGuOMgwCiC9ipK7rSsPoqOd4fn5GilDSBs+gE0opcZRC1s6aUGwddSloZVpZcg1txyAeuhcoU7Gf0oyu7TnjD0sQDHg2qRiy3rIsnKPQmcCeMjnjYTTWuJKRFmNECc+1VdN8YaOsCUVmQUvA5JijmICmPqjTXdfROrjFSGnWV9gw6ekkis/6VEADK092vE7zLE5q3Bdbcu0MEST53MDcqLZwzkGSYtpgmFV5/qbQWsbVPGDF/KkTFy0pLEB5Y3Tk3qKUxWaAulUkTLCZ8h/UUXKb4lwNdqKUQLManuYn8yvKyssMGz9i0RSg8t63vw+jJegDFUDs6whInQt7O+fIrOg3jSjFVT4DpQIppZeXF9SH+PvQNAX1PtIonMBExpDAwJBJM48zJCWowdXpBCM3pdcVDEQVXSGE9/d3iJePTcdxfHt7+1SARJ+lG+5WD0ANVoy8Pce/SETqKK30RzGQB7H61rRE6sAnFYL4LoJVaSbDVNsX04hpK2ekp59ZxYqBQd5uODyflVJ6UtzrFZryGGHEEnhVMbCQOnQYCKSxfB516MZkighVw1z2RDjqIAlgUF8755ZloZeoCR+WDyaWZaF/DA/LCyWW1cGEglAJhdr3C4RUVwMhCq25qGhCvavrOmKDUFFewCEkTg7DgBXgQ4DENKKmDu77XhWZApm3elNPmmkuWTcYMj2wbZumvyJDiTHq/BSqYmKnYXZ/j8wECpiMmQvx5BFvpShKq84bMU3qeQ49P5xz1VHnrjGALzkp0AEEE8swDEQXvtydnXFGX+yQzmdWBQjpbgDNyag4pzSGPEL0fGMzP3RD8cEDu1hVcQqNakoDa5LV/IAYIH1C7soZ2F3YsHfLfXUUA8RqpfJppIK1z/OcbwFpY2me5Jw7GfUV1XjQS7AaJ9voSFNKleGDGKAXEcLgZl8CF9EDDFbDKw3rPtot18aSVtu2DS7Vqq/Zr9L+sDhZYbbWbba7AzNuW2izxgRPmLEqq4FhGkpiaLzZMqt09+ZkL5ESm32+vHWmzkejLu895gPc4SRTVADn84hi8nhiVTLb6Ou6agCYYn53n12DUp/N3R2VnqWd1l2WBUtpi5fzpQ8I6SDgZIvAuMgEsYlshgFdR+DqCJFNNlMf02Cx0mtZgAkqpCTGn8nHaqS8oBZLDLXKIUex0B6gJdIxh1J6834DOZh5aMWxISIJwNXxLwQ92awu7kexGdLgy9saPAUMJSeqxg95yF0ul8oMmPLJkQnQRw7sQBr4reva9z1BjCyuCRD2ptBm34RvDnDj9DMGQgj64hniibv21PuR7cC6rjFt17RYnBppb2Qwac4bqxsmXwFemLCah5GRc8hzdztQ5ysMO/M2zSOGeGTn93ODA6AE+td1DSHAj1Ap1y1PmrT3yb4B9Dkvf4/vP3AmUuV9NORALYT0RwowZWm/YkJlXVfsF2oqvCvxuZeUPlU5RlEW8CoEHq/jbNPdmcJZ17Vqte87OmkjU47DP8KVDu0qQ5j5/gsTkemMNRXqG3IkMPqqGLpK5Rect83zjFm8UeCRzSvVtlKTmOSl78Px9YKu66CD0tIjZOueCCQLIUDoEEII4eXlBcH99vaGa378+HG0ZYYsQprzxQPzPJu3cQhlwy905K2vMuaftAsH5drEmGWRtUIIbdvSLQpRDgu999gA//XrVwjhY48MW12X//KAMzWTwpB4AQAX9H2PKWLOQM1g/EtHNgzD41X2L4+fP3/C2Bw0KeuG+flqorav2qN/2aU04f/gBvC/O1Qs4lhnJK+vr3+6ZqVvsDFkH2Gdf3Ocv8JR7ISOjm9H707/X45/AL9dnFsqop+1AAAAAElFTkSuQmCC";
    img[2] = "data:image/png;base64,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";
    img[3] = "data:image/png;base64,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";
    img[4] = "data:image/png;base64,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";
    img[5] = img[1];
    img[6] = img[1];
    img[7] = img[1];
    img[8] = img[1];
    img[9] = "data:image/png;base64,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";
    img[10] = "data:image/png;base64,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";
    img[11] = "data:image/png;base64,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";
    img[12] = "data:image/png;base64,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";

    for(let index = 0; index < 13; index++) {
        wall.walls.push(img[index]);
    }

    setTimeout(loadTextures, 16);
}
loadTextures();

function updatePlayerPosition() {
    player.offsetX = Math.sin(player.angle) - screen.halfWidth;
    player.offsetY = Math.cos(player.angle) - screen.halfHeight;
    map.targetX = Math.floor(player.y / map.scale) * map.size + Math.floor((player.x + player.offsetX * player.moveX * 10) / map.scale);
    map.targetY = Math.floor((player.y + player.offsetY * player.moveY * 10) / map.scale) * map.size + Math.floor(player.x / map.scale);

    if(player.moveX && map.grid[map.targetX] === 0) {
        player.x += player.offsetX * player.moveX;
    }
    if(player.moveY && map.grid[map.targetY] === 0) {
        player.y += player.offsetY * player.moveY;
    }
    if(player.moveAngle) {
        player.angle += (screen.windowScale / 10) * player.moveAngle;
    }

    calculateMapPlayerOffsets();

    setTimeout(updatePlayerPosition, 16);
}
function calculateMapPlayerOffsets() {
    map.offsetX = Math.floor(canvas.width / 2) - screen.halfWidth;
    map.offsetY = Math.floor(canvas.height / 2) - screen.halfHeight;
    player.mapX = (player.x / map.scale) * 5 + map.offsetX;
    player.mapY = (player.y / map.scale) * 5 + map.offsetY;

    setTimeout(calculateMapPlayerOffsets, 16);
}

function raycasting(falseVal) {
        current.angle = player.angle + camera.halfFOV;
        ray.startX = Math.floor(player.x / map.scale) * map.scale;
        ray.startY = Math.floor(player.y / map.scale) * map.scale;

    for(var rays = 0; rays < screen.width; rays++) {
        current.sin = Math.sin(current.angle); current.sin = current.sin ? current.sin : falseVal;
        current.cos = Math.cos(current.angle); current.cos = current.cos ? current.cos : falseVal;

        getVerticalLineIntersections(0);
        getHorizontalLineIntersections(0);
        calculate3DProjection(50000);

        context.drawImage(wall.walls[texture.image], texture.offset, 0, 1, map.scale, map.offsetX + rays, map.offsetY + (screen.halfHeight - Math.floor(wall.height / 2)), 1, wall.height);
    }

    setTimeout(raycasting, 16);
}

function getVerticalLineIntersections(sin) {
    if(current.sin > sin) {
        ray.endX = ray.startX + map.scale;
        ray.directionX = 1;
    } else {
        ray.endX = ray.startX;
        ray.directionX = -1;
    }

    for(var offset = 0; offset < map.range; offset += map.scale) {
        ray.verticalDepth = (ray.endX - player.x) / current.sin;
        ray.endY = player.y + ray.verticalDepth * current.cos;
        map.a = Math.floor(ray.endX / map.scale);
        map.b = Math.floor(ray.endY / map.scale);

        if(current.sin <= sin) {
            map.a += ray.directionX;
        }

        var index = map.b * map.size + map.a;

        if(index < sin || index > map.grid.length - 1) {
            break;
        }
        if(map.grid[index] !== 0) {
            texture.y = map.a;

            if(map.grid[index] === 14) {
                texture.y = 1;
            }
            if(map.grid[index] === 15) {
                texture.y = 5;
            }

            break;
        }

        ray.endX += ray.directionX * map.scale;
    }

    texture.endY = ray.endY;

    setTimeout(getVerticalLineIntersections, 16);
}

function getHorizontalLineIntersections(cos) {
    if(current.cos > cos) {
        ray.endY = ray.startY + map.scale;
        ray.directionY = 1;
    } else {
        ray.endY = ray.startY;
        ray.directionY = -1;
    }

    for(var offset = 0; offset < map.range; offset += map.scale) {
        ray.horizontalDepth = (ray.endY - player.y) / current.cos;
        ray.endX = player.x + ray.horizontalDepth * current.sin;
        map.a = Math.floor(ray.endX / map.scale);
        map.b = Math.floor(ray.endY / map.scale);

        if(current.cos <= cos) {
            map.b += ray.directionY;
        }

        var index = map.b * map.size + map.a;

        if(index < cos || index > map.grid.length - 1) {
            break;
        }
        if(map.grid[index] !== 0) {
            texture.x = map.a;

            if(map.grid[index] === 14) {
                texture.y = 5;
            }
            if(map.grid[index] === 15) {
                texture.y = 1;
            }

            break;
        }

        ray.endY += ray.directionY * map.scale;
    }

    texture.endX = ray.endX;

    setTimeout(getHorizontalLineIntersections, 16);
}

function calculate3DProjection(altValue) {
    var depth = ray.verticalDepth < ray.horizontalDepth ? ray.verticalDepth : ray.horizontalDepth;
    texture.image = ray.verticalDepth < ray.horizontalDepth ? texture.x : texture.y;
    texture.offset = ray.verticalDepth < ray.horizontalDepth ? texture.endX : texture.endY;
    texture.offset = Math.floor(texture.offset - Math.floor(texture.offset / map.scale) * map.scale);
    depth *= Math.cos(player.angle - current.angle);

    wall.height = Math.min(Math.floor(map.scale * 280 / (depth + 0.0001)), altValue);

    setTimeout(calculate3DProjection, 16);
}

function drawMiniMap(size) {
    for(var row = 0; row < size; row++) {
        for(var col = 0; col < size; col++) {
            var index = row * map.size + col;
            const offset = 5;

            if(map.grid[index] !== 0) {
                texture.material = map.grid[index] > 13 ? 1 : map.grid[index];
                context.drawImage(wall.walls[texture.material], 0, 0, map.scale, map.scale, map.offsetX + col * offset, map.offsetY + row * offset, offset, offset);
            } else {
                context.fillStyle = "#aaaaaa";
                context.fillRect(map.offsetX + col * offset, map.offsetY + row * offset, offset, offset);
            }

            context.fillStyle = "#ff0000";
            context.strokeStyle = "#ff0000";
            context.lineWidth = 1;
            context.beginPath();
            context.arc(player.mapX, player.mapY, 2, 0, Math.PI * 2);
            context.moveTo(player.mapX, player.mapY);
            context.lineTo(player.mapX + Math.sin(player.angle) * offset, player.mapY + Math.cos(player.angle) * offset);
            context.fill();
            context.stroke();
        }
    }

    setTimeout(drawMiniMap, 16);
}

function loop() {
    canvas.width = window.innerWidth * screen.windowScale;
    canvas.height = window.innerHeight * screen.windowScale;

    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    updatePlayerPosition();
    raycasting(0.000001);
    if(map.show) {
        drawMiniMap(map.size);
    }

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, map.offsetY);
    context.fillRect(0, map.offSetY + 200, canvas.width, canvas.width - map.offsetY + 200);

    setTimeout(loop, 16);

    calculateFPS(60);
}

window.addEventListener("load", () => {
    console.log("Ready!");

    loop();
});
