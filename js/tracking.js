window.onload = function() {
    // Get the tracking number from the URL (example: tracking_12345.html)
    const url = window.location.pathname;
    const trackingNumber = url.substring(url.lastIndexOf("_") + 1, url.lastIndexOf("."));

    // Ensure the element with ID 'tracking-number' exists on the page
    const trackingNumberElement = document.getElementById("tracking-number");
    
    if (trackingNumberElement) {
        trackingNumberElement.textContent = trackingNumber;  // Set the tracking number in the page
    } else {
        console.error("Element with ID 'tracking-number' not found.");
    }
};
