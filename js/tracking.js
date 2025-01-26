function redirectToTracking() {
    const trackingNumber = document.getElementById("trackingNumber").value.trim();
    
    if (!trackingNumber) {
        alert('Please enter a valid tracking number.');
        return false; // Prevent form submission
    }

    const trackingPageUrl = 'tracking_' + trackingNumber + '.html';

    // Check if the tracking page exists
    fetch(trackingPageUrl, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                window.location.href = trackingPageUrl; // Redirect to the specific tracking page
            } else {
                alert('Tracking number not found. Please check and try again.');
            }
        })
        .catch(() => alert('Error occurred while tracking. Please try again.'));
    
    return false; // Prevent form submission
}

window.onload = function() {
    // Get the tracking number from the URL (example: tracking_12345.html)
    const url = window.location.pathname;
    const trackingNumber = url.substring(url.lastIndexOf("_") + 1, url.lastIndexOf("."));

    // Display tracking details if tracking number exists in the URL
    if (trackingNumber) {
        document.getElementById('trackingDetails').style.display = 'block'; // Show the tracking details
        document.getElementById('tracking-number').textContent = trackingNumber;
        
        // You can add more tracking progress data based on the tracking number here
        // Example: fetch tracking details and update the progress field
    } else {
        console.error("Tracking number not found in URL.");
    }
};
