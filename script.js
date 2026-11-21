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
// VentrixCareerOS Loading Screen
window.addEventListener("load", function () {
    const loader = document.getElementById("pageLoader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("loader-hidden");

            setTimeout(function () {
                loader.remove();
            }, 650);

        }, 1000);
    }
});