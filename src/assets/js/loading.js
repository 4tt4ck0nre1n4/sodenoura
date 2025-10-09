window.addEventListener('load', function () {
  const loading = document.getElementById('loading');
  const loadingLogo = document.getElementById('loading__logo');

  setTimeout(function () {
    loading.style.transition = 'opacity 1s ease';
    loading.style.opacity = 0;
    loadingLogo.style.transition = 'opacity 1s ease';
    loadingLogo.style.opacity = 0;

    setTimeout(function () {
      document.body.classList.add('appear');
      loading.style.display = 'none';
    }, 300);
  }, 1200);
});
