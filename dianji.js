! function (e, t, a) {
    function r() {
        for (var e = 0; e < s.length; e++) {
            if (s[e].alpha <= 0) {
                t.body.removeChild(s[e].el);
                s.splice(e, 1);
            } else {
                s[e].y--;
                s[e].scale += .1; // 修改此处以增大爱心
                s[e].alpha -= .013;
                s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999";
            }
        }
        requestAnimationFrame(r);
    }

    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(), o(e)
        }
    }

    function o(e) {
        var a = t.createElement("div");
        a.className = "heart", s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        }), t.body.appendChild(a)
    }

    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    // 修改点击效果的样式
    function c() {
        // 修改为粉色系随机颜色
        const pinks = [
            "#ff1493",
            "#ff69b4",
            "#ffb6c1",
            "#ffc0cb",
            "#db7093"
        ];
        return pinks[Math.floor(Math.random() * pinks.length)];
    }

    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
        .mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
        setTimeout(e, 1e3 / 60)
    }, i(
        ".heart{width: 15px;height: 15px;position: fixed;background: #ff1493;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -7.5px;}.heart:before{left: -7.5px;}"
    ), n(), r()
}(window, document);

