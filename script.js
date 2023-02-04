window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector(".navlist").style.visibility == 'visible') {
            document.querySelector(".navlist").style.visibility = 'hidden';
            document.querySelector(".navlist").style.height = '0px';
        }
        else {
            document.querySelector(".navlist").style.visibility = 'visible';
            document.querySelector(".navlist").style.height = 'calc(100vh - 120px)';
        }
    });
};
