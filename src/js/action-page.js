/**
 * Created by Jules D. on 26/02/2016.
 */
(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "makeitbetter", function(response) {
        });
    });
})();

