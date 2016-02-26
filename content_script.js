/**
 * Created by Jules D. on 24/02/2016.
 */
(function(){
    var _getGif = function(){
        var url = 'img/' + Math.floor(Math.random() * 14) + '.gif';
        return  chrome.extension.getURL(url)};

    function _changeImages($target) {

        var $elem = $target.parent().length ? $target.parent() : $target;
        $elem.find('img').each(function(){
            $(this).attr('src', _getGif());
        });
        $elem.find('*').filter(function() {
            if (this.currentStyle)
                return this.currentStyle['backgroundImage'] !== 'none';
            else if (window.getComputedStyle)
                return document.defaultView.getComputedStyle(this,null)
                        .getPropertyValue('background-image') !== 'none';
        }).each(function(){$(this).css('background-image', 'url(' + _getGif() + ')')});
    }

    _changeImages($('body'));

    document.addEventListener("DOMNodeInserted", function(e) {
        _changeImages($(e.relatedNode));
    }, false);
})();