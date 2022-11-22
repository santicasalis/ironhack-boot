// ITERATION 1



function updateSubtotal(product) {
  // Traigo precio y cantidad
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  
//extraigo valores
  const priceValue = parseFloat(price.innerText)
  const quantityValue=quantity.valueAsNumber
//calculo multiplicacion
  const subtotalValue = priceValue * quantityValue
  // obtengo el subtotal DOM
  const subtotal = product.querySelector(".subtotal span")

  // agreggo el importe al subtotal en el dom
  subtotal.innerText=subtotalValue
  
  return subtotalValue
  
  
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  ;
  // end of test
 let totalValue=0

  // ITERATION 2
  //... your code goes here
// recorro todos los productos y actualizo el valor total
  for (let product of products) {
    totalValue +=updateSubtotal(product)
  }
  document.querySelector("#total-value span").innerText = totalValue


  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  //... your code goes here

  // con el parentNode apuntas al padres y si lo pones dos veces al abuelo
  const row = target.parentNode.parentNode

  const parent = row.parentNode
  parent.removeChild(row)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector(".create-product")
  let newProdNameInput = createRow.querySelector("input")
  let newProdNameValue = newProdNameInput.value
  let newProdPriceInput = createRow.querySelector("input[type='number']")
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2)
  
  
  const newTableRow = document.createElement("tr")
  newTableRow.className = "product"
  newTableRow.innerHTML = `
  <td class="name">
     <span>${newProdNameValue}</span>
  </td>
  <td class="price">$<span>${newProdPriceValue}</span></td>
  <td class="quantity">
     <input type="number" value="1" min="0" placeholder="Quantity" />
   </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
     <button class="btn btn-remove" >Remove</button>
  </td>
  `
  if (newProdNameValue !== "" && newProdPriceValue!=0) {
   
    const parent = document.querySelector("#cart tbody")
    parent.appendChild(newTableRow)
  } 
  else {
    alert("Le falta ingresar el nombre del Producto y o su precio")
  
  }
  
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);
  
  newProdNameInput.value = '';
  newProdPriceInput.value = 0
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // funcion para borrar  de todos los botones
  const removeBtns = document.querySelectorAll(".btn-remove")
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener("click", removeProduct)

  
  }

  // funcion para crear productos
  const createBtn = document.querySelector("#create")
  if (createBtn) {
    createBtn.addEventListener("click", createProduct)
  }
});
