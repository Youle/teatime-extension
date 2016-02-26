/**
 * Created by Jules D. on 24/02/2016.
 */
(function(){
    var gif = 'http://media.lelombrik.net/t/8d318df7fea536a6d662c25987daca7c/p/01.gif';

    function _changeImages($target) {
        var $elem = $target.parent().length ? $target.parent() : $target;
        $elem.find('img').attr('src', gif);
        $elem.find('*').filter(function() {
            if (this.currentStyle)
                return this.currentStyle['backgroundImage'] !== 'none';
            else if (window.getComputedStyle)
                return document.defaultView.getComputedStyle(this,null)
                        .getPropertyValue('background-image') !== 'none';
        }).css('background-image', 'url(' + gif + ')');
    }

    _changeImages($('body'));

    document.addEventListener("DOMNodeInserted", function(e) {
        _changeImages($(e.relatedNode));
    }, false);
})();