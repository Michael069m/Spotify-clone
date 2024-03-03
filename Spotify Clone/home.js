console.log('hello');
document.addEventListener('DOMContentLoaded', function() {
    const songImg = document.querySelectorAll('.card-img');
    let i = 1;
    songImg.forEach(element => {
        const width = element.clientWidth;
        console.log("width is ",width);
        element.style.height = `${width}px`; 
        element.src=`${i}`;
        i = i+1;

    });
    const search = document.querySelector('.nav-list-p');
    const srchicon = document.querySelector('#search-icon');
    search.addEventListener('mouseover', function() {
        srchicon.classList.toggle('active');
    });

    search.addEventListener('mouseout', function() {
        srchicon.classList.remove('hover');
    });
});