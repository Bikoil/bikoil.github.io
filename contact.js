function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    window.location.href = "contactm.html"; 
}
