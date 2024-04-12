 score = 0;
 cross = true;
 scorecount = document.querySelector('.scorecount');
document.onkeydown = function(e){
    if(e.key === "ArrowUp"){
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }
    if(e.key === "ArrowRight"){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
           dino.style.left = dinoX + 112 + 'px';
    }
    if(e.key === "ArrowLeft"){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
           dino.style.left =  dinoX - 112 + 'px';
    }
}
setInterval(() => {
    dino = document.querySelector(".dino");
    gameover = document.querySelector(".gameover");
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    if (ox < 145 && ox > 0 && dx < 145) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    } else if (ox < 0) {
        obstacle.classList.add('obstacleAni');
    }

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);

    if (offSetX < 15 || offSetY < 10) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    } else if (offSetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100);

function updateScore(score){
    scorecount.innerHTML = "Your Score : " +score;
}