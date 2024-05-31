document.addEventListener('DOMContentLoaded', function () {
    var weirdModal = document.getElementById('weirdModal');
    var weirdOverlay = document.getElementById('weirdOverlay');
    var weirdCloseBtn = document.getElementById('weirdClose');
    var weirdModalImage = document.getElementById('weirdModalImage');

    // Show modal and overlay on page load
    weirdModal.style.display = 'block';
    weirdOverlay.style.display = 'block';

    // Close modal and overlay when 'x' is clicked
    weirdCloseBtn.onclick = function () {
        weirdModal.style.display = 'none';
        weirdOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }

    // Add your button functionality to the image
    weirdModalImage.onclick = function () {
        alert('Image clicked!');
        // Add your button action here
    }

    // Close modal and overlay when clicking outside of the modal
    weirdOverlay.onclick = function () {
        weirdModal.style.display = 'none';
        weirdOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }
});