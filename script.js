// Example: Add an "Order Now" button
const orderButtons = document.querySelectorAll('.item');
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to cart!');
  });
});   