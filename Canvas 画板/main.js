var yyy = document.getElementById('canvas')
autoSetCanvasSize(yyy)
var context = yyy.getContext('2d')

var using = false
var eraserEnabled = false
context.lineWidth = 5

/***防止触摸时瞎几把乱动***/

/***防止触摸时瞎几把乱动***/

/***画笔粗细***/
thin.onclick = function () {
    context.lineWidth = 5
}

thick.onclick = function () {
    context.lineWidth = 10
}
/***画笔粗细***/

/***功能键***/
eraser.onclick = function () {
    eraserEnabled = true
    eraser.classList.add('active')
    brush.classList.remove('active')

}
brush.onclick = function () {
    eraserEnabled = false
    brush.classList.add('active')
    eraser.classList.remove('active')

}
clear.onclick = function () {
    context.clearRect(0, 0, yyy.width, yyy.height)
}
save.onclick = function () {
    var url = yyy.toDataURL('image/png')
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = 'my'
    a.target = '_blank'
    a.click()
}
/***画笔、橡皮擦开关***/

/***改变颜色***/
black.onclick = function () {
    context.fillStyle = 'black'
    context.strokeStyle = 'black'
    black.classList.add('active')
    grey.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
grey.onclick = function () {
    context.fillStyle = 'grey'
    context.strokeStyle = 'grey'
    grey.classList.add('active')
    black.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
red.onclick = function () {
    context.fillStyle = 'red'
    context.strokeStyle = 'red'
    red.classList.add('active')
    grey.classList.remove('active')
    black.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function () {
    context.fillStyle = 'green'
    context.strokeStyle = 'green'
    green.classList.add('active')
    grey.classList.remove('active')
    red.classList.remove('active')
    black.classList.remove('active')
    blue.classList.remove('active')
}
blue.onclick = function () {
    context.fillStyle = 'blue'
    context.strokeStyle = 'blue'
    blue.classList.add('active')
    grey.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
    black.classList.remove('active')
}
/***改变颜色***/

var lastPoint = {x: undefined, y: undefined}
listenToUser(yyy)

/***工具函数***/


function drawCircle(x, y, radius) {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)    //起点
    context.lineTo(x2, y2)    //终点
    context.stroke()
}

function autoSetCanvasSize(canvas) {
    setCanvasSize()
    window.onresize = function () {
        setCanvasSize()
    }

    function setCanvasSize(canvasSize) {
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}

function listenToUser(canvas) {
    if (document.body.ontouchstart !== undefined) {
        //触屏设备
        canvas.ontouchstart = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x, y, 10, 10)
            } else {
                lastPoint = {x: x, y: y}
                drawCircle(x, y, context.lineWidth / 2)
            }
        }
        canvas.ontouchmove = function (aaa) {
            var x = aaa.touches[0].clientX
            var y = aaa.touches[0].clientY
            if (!using) {
                return
            }
            if (eraserEnabled) {
                if (using) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                }
            }
            else if (using) {
                var newPoint = {x: x, y: y}
                drawCircle(x, y, context.lineWidth / 2)
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
        canvas.ontouchend = function (aaa) {
            using = false
        }
    } else {
        //非触屏设备
        canvas.onmousedown = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            using = true
            if (eraserEnabled) {
                context.clearRect(x, y, 10, 10)
            } else {
                lastPoint = {x: x, y: y}
                drawCircle(x, y, context.lineWidth / 2)
            }
        }

        canvas.onmousemove = function (aaa) {
            var x = aaa.clientX
            var y = aaa.clientY
            if (!using) {
                return
            }
            if (eraserEnabled) {
                if (using) {
                    context.clearRect(x - 5, y - 5, 10, 10)
                }
            }
            else if (using) {
                var newPoint = {x: x, y: y}
                drawCircle(x, y, context.lineWidth / 2)
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }

        canvas.onmouseup = function (aaa) {
            using = false
        }
    }

}

/***工具函数***/

