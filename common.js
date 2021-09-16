// HEADER
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    // Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {  // focus 됐을때
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');  // HTML 속성 추가
});

searchInputEl.addEventListener('blur', function () {  // blur 됐을 때
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2021