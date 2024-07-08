document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cta-button').addEventListener('click', () => {
        window.location.href = "mailto:kvmobilebartending@gmail.com";
    });
});

// Add this to your existing script.js file or create a new one

function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}