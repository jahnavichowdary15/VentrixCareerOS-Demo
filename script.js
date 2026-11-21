const launchModal = document.getElementById("launchModal");
const closeLaunch = document.getElementById("closeLaunch");
const launchOkay = document.getElementById("launchOkay");

// Show popup
function showLaunchPopup() {
    launchModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close popup
function hideLaunchPopup() {
    launchModal.classList.remove("active");
    document.body.style.overflow = "";
}

// Show popup whenever a link is clicked
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        showLaunchPopup();
    });
});

// Close button
closeLaunch.addEventListener("click", hideLaunchPopup);
launchOkay.addEventListener("click", hideLaunchPopup);

// Close when clicking outside the popup
launchModal.addEventListener("click", function(event) {
    if (event.target === launchModal) {
        hideLaunchPopup();
    }
});

// Close when pressing Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        hideLaunchPopup();
    }
});

/* ======================================
   VENTRIX CAREEROS LOADING CONTROLLER
====================================== */

(function () {
    const loader = document.getElementById("pageLoader");
    const skipButton = document.getElementById("skipLoader");
    const progressBar = document.getElementById("loadingProgressBar");

    if (!loader) return;

    let finished = false;
    let progress = 0;
    let progressInterval;

    function hideLoader() {
        if (finished) return;

        finished = true;

        clearInterval(progressInterval);

        if (progressBar) {
            progressBar.style.width = "100%";
        }

        loader.classList.add("loader-hidden");

        setTimeout(function () {
            loader.remove();
        }, 750);
    }

    // Animate progress while the page loads
    progressInterval = setInterval(function () {
        if (progress < 90) {
            progress += Math.random() * 8;
            progress = Math.min(progress, 90);

            if (progressBar) {
                progressBar.style.width = progress + "%";
            }
        }
    }, 180);

    // Hide after the complete page has loaded
    window.addEventListener("load", function () {
        if (progressBar) {
            progressBar.style.width = "100%";
        }

        setTimeout(hideLoader, 500);
    });

    // Skip button
    if (skipButton) {
        skipButton.addEventListener("click", hideLoader);
    }

    // Safety fallback if loading takes too long
    setTimeout(hideLoader, 12000);

})();
