function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    window.location.href = "mobile.html"; // Replace "mobile.html" with the path to your mobile version
}
