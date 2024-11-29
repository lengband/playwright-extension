document.addEventListener('DOMContentLoaded', function() {
  // Add card hover effects
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
      card.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Add link click tracking
  const learnMoreLink = document.querySelector('.learn-more');
  learnMoreLink.addEventListener('click', () => {
    console.log('User clicked Learn More link');
  });
}); 