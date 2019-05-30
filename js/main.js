var body = document.getElementsByTagName('body')[0];
var i = 0;
$(document).ready(function () {
    $(document).mousemove(function () {
        $("#box").css({
            height: event.pageY,
            width: event.pageX,
        });

    })
    $(document).click(function () {
        var div1 = document.createElement('div');
        var main = document.getElementsByClassName('main')[0];
        div1.setAttribute('id', 'box');
        div1.setAttribute('class', 'box');
        main.appendChild(div1);

        if (i == 0) {
            div1.style.background = "blue";
            i = 1;
        } else {
            div1.style.background = "red";
            i = 0;
        }
        console.log(div1.previousElementSibling);
        div1.previousElementSibling.removeAttribute('id');
    })
})
