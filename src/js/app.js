// TODO: write code here
const container = document.querySelector('.container');
const btnCollapse = document.querySelector('.btn-collapse');
const collapse = container.querySelector('.collapse');

btnCollapse.addEventListener('click', () => {
  if (collapse.offsetHeight > 0) {
    collapse.classList.remove('collapse_show');
    collapse.classList.add('collapse_hide');
  } else {
    collapse.classList.remove('collapse');
    collapse.classList.add('collapse_show');
  }
});

collapse.addEventListener('animationend', (e) => {
  if (e.animationName === 'rolldown') {
    collapse.classList.remove('collapse_show');
  } else {
    collapse.classList.remove('collapse_hide');
    collapse.classList.add('collapse');
  }
});
