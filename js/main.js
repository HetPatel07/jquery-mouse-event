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
        var hue = Math.floor((Math.random() * 360) + 1);
        var sat = Math.floor((Math.random() * 100) + 1) + "%";
        var l = Math.floor((Math.random() * 100) + 1) + "%";
        var div1 = document.createElement('div');
        var main = document.getElementsByClassName('main')[0];
        div1.setAttribute('id', 'box');
        div1.setAttribute('class', 'box');
        main.appendChild(div1);
        var color = 'hsl(' + hue + ',' +
            sat + ',' + l + ')';
        console.log(color);
                div1.style.background = color;

        //        if (x == 1) {
        //            div1.style.background = "blue";
        //        } else if (x == 2) {
        //            div1.style.background = "orange";
        //        } else if (x == 3) {
        //            div1.style.background = "pink";
        //        } else if (x == 4) {
        //            div1.style.background = "purple";
        //        } else if (x == 5) {
        //            div1.style.background = "pink";
        //        } else if (x == 6) {
        //            div1.style.background = "black";
        //        } else if (x == 7) {
        //            div1.style.background = "magenta";
        //        } else if (x == 8) {
        //            div1.style.background = "cyan";
        //        } else if (x == 9) {
        //            div1.style.background = "sea green";
        //        } else if (x == 10) {
        //            div1.style.background = "hot pink";
        //        }
        console.log(div1.previousElementSibling);
        div1.previousElementSibling.removeAttribute('id');
    })
})
