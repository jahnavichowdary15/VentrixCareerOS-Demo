
/* =========================================
   VENTRIX CAREEROS - WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       LAUNCHING SOON POPUP
    ===================================== */

    const launchModal = document.getElementById("launchModal");
    const closeLaunch = document.getElementById("closeLaunch");
    const launchOkay = document.getElementById("launchOkay");

    function showLaunchPopup() {
        if (!launchModal) return;

        launchModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function hideLaunchPopup() {
        if (!launchModal) return;

        launchModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    // Show popup when website links are clicked
    document.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();
            showLaunchPopup();

        });

    });

    // Close popup button
    if (closeLaunch) {
        closeLaunch.addEventListener("click", hideLaunchPopup);
    }

    if (launchOkay) {
        launchOkay.addEventListener("click", hideLaunchPopup);
    }

    // Close popup by clicking outside
    if (launchModal) {

        launchModal.addEventListener("click", function (event) {

            if (event.target === launchModal) {
                hideLaunchPopup();
            }

        });

    }

    // Close popup using Escape
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            hideLaunchPopup();
        }

    });


    /* =====================================
       LOADING SCREEN CONTROLLER
    ===================================== */

    const loader = document.getElementById("pageLoader");
    const skipButton = document.getElementById("skipLoader");
    const progressBar = document.getElementById("loadingProgressBar");

    if (!loader) return;

    let loaderClosed = false;
    let progress = 0;
    let progressTimer = null;
    let fallbackTimer = null;

    function hideLoader() {

        if (loaderClosed) return;

        loaderClosed = true;

        clearInterval(progressTimer);
        clearTimeout(fallbackTimer);

        if (progressBar) {
            progressBar.style.width = "100%";
        }

        loader.classList.add("loader-hidden");

        document.body.style.overflow = "";

        setTimeout(function () {

            if (loader.parentNode) {
                loader.remove();
            }

        }, 750);

    }

    // Animate progress bar
    progressTimer = setInterval(function () {

        if (progress < 90) {

            progress = Math.min(progress + 3, 90);

            if (progressBar) {
                progressBar.style.width = progress + "%";
            }

        }

    }, 150);

    // Skip button
    if (skipButton) {
        skipButton.addEventListener("click", hideLoader);
    }

    // Hide when page and its resources finish loading
    if (document.readyState === "complete") {

        setTimeout(hideLoader, 500);

    } else {

        window.addEventListener("load", function () {
            setTimeout(hideLoader, 1000);
        }, { once: true });

    }

    // Emergency fallback
    fallbackTimer = setTimeout(hideLoader, 2000);

});
