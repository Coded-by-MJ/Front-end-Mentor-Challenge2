function toggleAccordion(header) {
    var body = header.nextElementSibling;
    if (body.style.display === 'block') {
        body.style.display = 'none';
        header.querySelector('.icon img').src = 'icon-plus.svg';
    } else {
        body.style.display = 'block';
        header.querySelector('.icon img').src = 'icon-minus.svg';
    }
}