function redirectToTracking() {
    const trackingNumber = document.getElementById("trackingNumber").value;
    const trackingPageUrl = 'tracking_' + trackingNumber + '.html';

    // Check if the tracking page exists
    fetch(trackingPageUrl, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = trackingPageUrl;
            } else {
                alert('Tracking number not found. Please check and try again.');
            }
        })
        .catch(() => alert('Error occurred while tracking. Please try again.'));
    
    return false; // Prevent form submission
}
