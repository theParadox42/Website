function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var body = document.querySelector("body");
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    body.appendChild(script);
};
function doneLoading(){
    var $nav = $('#navbar');
    $nav.load("/c/html/navcontents.html", function(){
        $nav.css("height","0px")
        if(active){
            var $active = $('#' + active);
            $active.addClass("active");
            $active.children().append(' <span class="sr-only">(current)</span>');
        }
    });
};
function loadBootstrap(){
    loadScript("/c/js/libraries/bootstrap/js/bootstrap.min.js",doneLoading);
};
function loadPopper() {
    loadScript("/c/js/libraries/popper.min.js", loadBootstrap);
};
loadScript("/c/js/libraries/jquery-3.4.0.min.js", loadPopper);
