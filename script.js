
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

    // Close popup buttons
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


    /* ======================================
       VENTRIX CAREEROS LOADING CONTROLLER
    ====================================== */

    const loader = document.getElementById("pageLoader");
    const skipButton = document.getElementById("skipLoader");
    const progressBar = document.getElementById("loadingProgressBar");

    if (loader) {

        const MIN_LOADING_TIME = 750;
        const START_TIME = Date.now();

        let finished = false;
        let pageLoaded = document.readyState === "complete";
        let animationFrame = null;

        function hideLoader() {
            if (finished) return;

            finished = true;

            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
            }

            if (progressBar) {
                progressBar.style.width = "100%";
            }

            loader.classList.add("loader-hidden");

            setTimeout(function () {
                if (loader.parentNode) {
                    loader.remove();
                }
            }, 750);
        }

        function updateProgress() {
            if (finished) return;

            const elapsed = Date.now() - START_TIME;

            // Smooth, consistent progress over 3 seconds
            const progress = Math.min(
                (elapsed / MIN_LOADING_TIME) * 100,
                100
            );

            if (progressBar) {
                progressBar.style.width = progress + "%";
            }

            if (elapsed >= MIN_LOADING_TIME && pageLoaded) {
                hideLoader();
                return;
            }

            animationFrame = requestAnimationFrame(updateProgress);
        }

        // Wait for the complete page to load
        window.addEventListener("load", function () {
            pageLoaded = true;

            const elapsed = Date.now() - START_TIME;

            if (elapsed >= MIN_LOADING_TIME) {
                hideLoader();
            }
        }, { once: true });

        // Skip button
        if (skipButton) {
            skipButton.addEventListener("click", hideLoader);
        }

        // Start progress animation
        animationFrame = requestAnimationFrame(updateProgress);
    }

}); // IMPORTANT: closes DOMContentLoaded
