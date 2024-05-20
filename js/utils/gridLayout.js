const btn = document.getElementById('btn-layout');

export const gridLayout = () => {
  const width = innerWidth;
  if (width > 830) {
    btn.addEventListener('click', () => {
      if (btn.textContent == 'Grid-5') {
        btn.textContent = 'Grid-4'
      } else if (btn.textContent == 'Grid-4') {
        btn.textContent = 'Grid-5'
      }
    })
  }

  if (width > 480 && width < 830) {
    btn.textContent = 'Grid-2'
    btn.addEventListener('click', () => {
      if (btn.textContent == 'Grid-3') {
        btn.textContent = 'Grid-2'
      } else if (btn.textContent == 'Grid-2') {
        btn.textContent = 'Grid-3'
      }
    })
  }

  if (width < 480) {
    btn.textContent = 'Grid-2'
    btn.addEventListener('click', () => {
      if (btn.textContent == 'Grid-1') {
        btn.textContent = 'Grid-2'
      } else if (btn.textContent == 'Grid-2') {
        btn.textContent = 'Grid-1'
      }
    })
  }
}