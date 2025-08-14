// Game navigation
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.game-nav-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all game containers
            document.querySelectorAll('.game-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Show selected game container
            const gameId = button.getAttribute('data-game');
            document.getElementById(`game-${gameId}`).classList.add('active');
        });
    });
    
    // Set current date in footer
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
    
    // Export button functionality
    document.getElementById('export-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('PDF export functionality would generate a detailed report of this analysis.');
    });
    
    // Share button functionality
    document.getElementById('share-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (navigator.share) {
            navigator.share({
                title: 'Chess Game Analysis',
                text: 'Check out my chess game analysis',
                url: window.location.href
            }).catch(err => {
                console.log('Error sharing:', err);
            });
        } else {
            alert('Share functionality is not available in your browser. Copy this URL to share.');
        }
    });
    
    // Initialize meter animations
    setTimeout(() => {
        document.querySelectorAll('.meter-fill').forEach(meter => {
            meter.style.transition = 'width 1.5s ease-out';
        });
    }, 500);
});

// Screenshot modal functionality
function openModal(img) {
    const modal = document.getElementById('screenshot-modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('screenshot-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('screenshot-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Add hover effect to moves
document.querySelectorAll('.move').forEach(move => {
    move.addEventListener('mouseenter', function() {
        // In a real implementation, this would highlight the move on the board
        console.log('Hovering over move:', this.textContent.trim());
    });
});