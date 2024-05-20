import { conectaApi } from './api/connection.js';
import { gridLayout } from './utils/gridLayout.js';

const rendering = document.getElementById('renderProducts');

const toggleGridCols = () => {
  rendering.classList.toggle('grid-cols');
}

const button = document.getElementById('btn-layout');
button.addEventListener('click', toggleGridCols);

gridLayout();
conectaApi();
