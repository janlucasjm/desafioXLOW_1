import { cardProduct } from '../components/cardProduct.js';

export async function searchProducts(productId) {
  try {
    const searchProduct = await fetch(`https://desafio.xlow.com.br/search/${productId}`);
    const searchConvertedProducts = await searchProduct.json();

    searchConvertedProducts.map(product => {
      cardProduct(product);
    });
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}
