var startTime = null;
var displayArea = document.getElementById('display-area')
function start() {
    startTime = Date.now();
    document.body.onkeydown = stop;
}
function stop() {
    var currentTime = Date.now();
    var seconds = (currentTime - startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
        if (confirm(seconds + "秒でした。すごい")) {
            location.reload()
        }
    }
    else {
        if (confirm(seconds + "秒でした。残念")) {
            location.reload()
        }
    }
}

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    start();
}
