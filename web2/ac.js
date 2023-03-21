let secondsLeft = 10;
let countdownElement = document.getElementById("message");
let countdownInterval = setInterval(function() {
    secondsLeft--;
    countdownElement.textContent = "頁面將在 " + secondsLeft + " 秒後自動刷新...";
    if (secondsLeft <= 0) {
        clearInterval(countdownInterval);
        location.href='https://myself-bbs.com/portal.php';
    }
}, 1000);