
document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category-item');

    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.querySelector('.subcategory-list').style.display = 'block';
        });

        category.addEventListener('mouseleave', () => {
            category.querySelector('.subcategory-list').style.display = 'none';
        });
    });

    
    const subscribeForm = document.querySelector('.subscribe-form');
    subscribeForm.addEventListener('submit', (e) => {
        const emailInput = subscribeForm.querySelector('input[type="email"]');
        if (!emailInput.value) {
            e.preventDefault();
            alert('Пожалуйста, введите ваш email!');
        }
    });
});

