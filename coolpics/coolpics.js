document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const nav = document.querySelector('nav');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('hide');
  });

  const handleResize = () => {
    if (window.innerWidth > 1000) {
      nav.classList.remove('hide');
    } else {
      nav.classList.add('hide');
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  function viewerTemplate(src, alt) {
    return `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${src}" alt="${alt}">
      </div>
    `;
  }

  function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
      const img = event.target;
      const imgSrc = img.src.split('-')[0] + '-full.jpeg';
      const imgAlt = img.alt;
      document.body.insertAdjacentHTML('afterbegin', viewerTemplate(imgSrc, imgAlt));
      document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
  }

  function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
      viewer.remove();
    }
  }

  document.querySelector('.gallery').addEventListener('click', viewHandler);
});
