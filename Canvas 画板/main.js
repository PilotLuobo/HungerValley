var yyy = document.getElementById('canvas')
autoSetCanvasSize(yyy)
var context = yyy.getContext('2d')

var using = false
var eraserEnabled = false

/***画笔、橡皮擦开关***/
eraser.onclick = function () {
    eraserEnabled = true
    actions.className = 'actions x'
}
brush.onclick = function () {
    eraserEnabled = false
    actions.className = 'actions'
}
/***画笔、橡皮擦开关***/

var lastPoint = {x: undefined, y: undefined}
listenToUser(yyy)

/***工具函数***/


function drawCircle(x, y, radius) {
    context.beginPath()
    context.fillStyle = 'black'
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)    //起点
    context.lineWidth = 10
    context.strokeStyle = 'black'
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
                drawCircle(x, y, 5)
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
                drawCircle(x, y, 5)
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
                drawCircle(x, y, 5)
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
                drawCircle(x, y, 5)
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