function fullscreen() {
        var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
            (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
            (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
            (document.msFullscreenElement && document.msFullscreenElement !== null);

        var docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }

        }
}
function eventTagFullscrion(query) {
    if(typeof query=="string")
    {
        var getMaxBtb = window.document.body.querySelector(query);
        getMaxBtb.addEventListener('click',function () {
            fullscreen();
        })
        var checkLink = getMaxBtb.childElementCount;
        if(checkLink>=0 && getMaxBtb.children[checkLink-1].tagName=="A")
        {

            getMaxBtb.children[checkLink-1].addEventListener('click',function (eventHandler) {
                eventHandler.preventDefault();
            })
        }

    }
}
function reloeadPage(query) {
    if(query!=null)
    {
        var getElement = window.document.body.querySelector(query);
        getElement.addEventListener('click',function () {
            window.location.reload();
        })

    }
}