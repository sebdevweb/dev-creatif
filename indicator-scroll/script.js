const scrollIndicator = document.querySelector('.indicator-scroll');
const content = document.querySelector('.content');

const observer = new IntersectionObserver(handleIntersect);
observer.observe(content);

function handleIntersect(entries) {
    const el = entries[0];
    if (el.isIntersecting) {
        window.addEventListener("scroll", indicatorAnimation)
    } else if (!el.isIntersecting) {
        window.removeEventListener("scroll", indicatorAnimation)
    }
    // console.log(entries);
}

function indicatorAnimation() {
    // window : ce que je scroll
    if(window.scrollY > content.offsetTop) {
        // console.log('scrolling');
        const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
        console.log(percentage);
        scrollIndicator.style.transform = `scaleX(${(percentage / 100)})`;
    } else {
        scrollIndicator.style.transform = `scaleX(0)`;
    }
}