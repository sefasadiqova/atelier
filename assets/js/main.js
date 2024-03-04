const images = document.querySelectorAll('.sub-box-item img');
const mainImage = document.getElementById('mainImage');

images.forEach(image => {
    image.addEventListener('click',(e) => {
        let imageName = e.target.getAttribute('src');
        mainImage.setAttribute('src',imageName);
    })
})