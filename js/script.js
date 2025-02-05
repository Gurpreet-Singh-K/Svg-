document.querySelectorAll('.product').forEach(icon => {
    icon.addEventListener('click', function() {
        const iconId = this.id;
        console.log(`Icon clicked: ${iconId}`);
    });
});
