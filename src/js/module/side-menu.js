export default ()=>{
  const btnUp = {
    el: document.getElementById('top'),
    addEventListener() {
      document.getElementById('top').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },

  }
  const btnMediaUp = {
    el: document.getElementById('top-media'),
    addEventListener() {
      document.getElementById('top-media').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();
  btnMediaUp.addEventListener();
}
