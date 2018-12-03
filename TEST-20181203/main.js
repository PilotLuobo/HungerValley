window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)  //伪数组
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }
    nodes.addClass = function (classes) {
        var value2 = {}
        if (typeof classes === 'string') {
            value2 = [classes]
        } else if (typeof classes === 'object') {
            for (let i = 0; i < classes.length; i++) {
                value2[i] = classes[i]
            }
            value2.length = classes.length
        }
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].classList.add(value)
        }
        value2.length = 1
    }


    nodes.setText = function (text) {
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = text
        }
    }
    return nodes

}
window.$ = jQuery

var $div = jQuery('div')
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi