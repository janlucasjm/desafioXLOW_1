const rendering = document.getElementById('renderProducts');

export const cardProduct = (product) => {  
  const { PriceWithoutDiscount, ListPrice, AvailableQuantity } = product.items[0].sellers[0].commertialOffer;

  const PriceWithoutDiscountReal = PriceWithoutDiscount.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});
  const ListPriceReal = ListPrice.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});

  const productList = document.createElement('li');
  productList.classList = 'list-products__item';

  const mainImage = document.createElement('img');
  mainImage.src = product.items[0].images[0].imageUrl;
  mainImage.alt = product.productName;
  productList.appendChild(mainImage);

  const productName = document.createElement('h2');
  productName.textContent = product.productName;
  productList.appendChild(productName);

  const divImage = document.createElement('div');
  divImage.classList = 'img-variation';
  productList.appendChild(divImage);

  product.items.map(item => {
    const variationProduct = document.createElement('img');
    variationProduct.src = item.images[0].imageUrl;
    variationProduct.alt = product.productName;
    variationProduct.classList = 'product-variation';
    variationProduct.addEventListener('click', () => {
      mainImage.src = item.images[0].imageUrl;
    });
    divImage.appendChild(variationProduct);
  });
  
  const price = document.createElement('span');
  price.classList = 'prices';
  if (PriceWithoutDiscount !== ListPrice) {
    price.innerHTML = `
      <p class="priceWithoutDiscont">${ListPriceReal}</p>
      <p class="teste">${PriceWithoutDiscountReal}</p>
    `
  } else {
    price.textContent = `${ListPriceReal}`;
  };
  productList.appendChild(price);

  const buttonProduct = document.createElement('button');
  buttonProduct.classList = 'list-products__btn';
  buttonProduct.textContent = 'COMPRAR';
  productList.appendChild(buttonProduct);
  buttonProduct.addEventListener('click', () => {
    console.log('oi')
  })

  const availableQuantity = document.createElement('p');
  availableQuantity.textContent = `${AvailableQuantity} em estoque`;
  availableQuantity.classList = 'available-quantity';
  productList.appendChild(availableQuantity);

  notAvailable(AvailableQuantity, buttonProduct);

  rendering.appendChild(productList);
};

const notAvailable = (AvailableQuantity, buttonProduct) => {
  if(AvailableQuantity === 0) {
    buttonProduct.style.backgroundColor = 'red';
    buttonProduct.textContent = 'INDISPONÍVEL'
    buttonProduct.disabled = true;
    buttonProduct.style.cursor = 'not-allowed';
  }
}