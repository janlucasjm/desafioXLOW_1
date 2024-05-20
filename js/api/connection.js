import { searchProducts } from './searchProducts.js';

export async function conectaApi() {
  try {
    const searchResult = await fetch('https://desafio.xlow.com.br/search/');
    const products = await searchResult.json();
    
    products.map(products => {
      searchProducts(products.productId);
    });

    attCounterProducts(products.length);
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

const attCounterProducts = (quantityProducts) => {
  const counter = document.getElementById('counterProducts');
  counter.textContent = `${quantityProducts} produtos`;
}






