document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('close');
    var modalImage = document.getElementById('modal-image');

    // Show modal and overlay on page load
    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Close modal and overlay when 'x' is clicked
    closeBtn.onclick = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Add your button functionality to the image
    modalImage.onclick = function () {
        alert('Image clicked!');
        // Add your button action here
    }

    // Close modal and overlay when clicking outside of the modal
    overlay.onclick = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
});