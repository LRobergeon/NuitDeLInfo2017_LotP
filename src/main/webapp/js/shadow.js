var text;
var spot;

///window.onload = init;
//init();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-192935-6']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

function init() {
    text = document.getElementById('tsb-text');
    spot = document.getElementById('tsb-spot');
    
    document.getElementById('text-shadow-box').onmousemove = onMouseMove;
    document.getElementById('text-shadow-box').ontouchmove = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onMouseMove({clientX: e.touches[0].clientX, clientY: e.touches[0].clientY});
    };
    
    onMouseMove({clientX: 300, clientY: 200});
}


function onMouseMove(e) {
    text = document.getElementById('tsb-text');
    var xm = (e.clientX - (screen.width/4))/5;
    var ym = (e.clientY - (text.height/2))/5;
    var d = Math.sqrt(xm * xm + ym * ym)/2;
    //    text.style.textShadow = -xm + 'px ' + -ym + 'px ' + (d / 5 + 10) + 'px black';
    text.style.filter = 'drop-shadow('+ -xm + 'px '+ -ym +'px '+(d / 50 + 10) +'px #222)';
    
    xm = e.clientX - 2400;
    ym = e.clientY - 1800;
    spot.style.backgroundPosition = xm + 'px ' + ym + 'px';
}