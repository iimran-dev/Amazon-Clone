import { orders } from "../data/orders.js";
import { calculateDeliveryDate } from "../data/deliveryOptions.js";
import { currencyFormat } from "./utils/utils.js";
import { getProduct, loadProductsFetch} from "../data/products.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


console.log(orders);
async function renderOrdersPage(){
    await loadProductsFetch();

    let orderHTML = '';

    orders.forEach((order) => {

      const orderPlaced = dayjs(order.orderTime).format('dddd, MMMM D');

      const totalCosts = currencyFormat(order.totalCostCents);
      const orderId = order.id;

      let productsHTML = '';

      order.products.forEach((orderProduct) => {
        const matchingProduct = getProduct(orderProduct.productId);



        if (!matchingProduct){
          console.error('Product not found:', orderProduct.productId);
          return
        } 

        const dateString = dayjs(orderProduct.estimatedDeliveryTime).format('dddd, MMMM D');

        productsHTML += `
          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${matchingProduct.image}" class="product-image">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                ${dateString}
              </div>
              <div class="product-quantity">
                Quantity: ${orderProduct.quantity}
              </div>
              
            </div>

            <div class="product-actions">
              <a href="tracking.html?orderId=${orderId}&orderName=${matchingProduct.name}&deliveryDate=${dateString}&productImage=${matchingProduct.image}&quantity=${orderProduct.quantity}" class="no-link-style">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        `;
      });

      orderHTML += `
        <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${orderPlaced}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${totalCosts}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${orderId}</div>
            </div>
          </div>
          ${productsHTML}
        </div>
      `;
    });

    document.querySelector('.js-orders-grid').innerHTML = orderHTML;
}

renderOrdersPage();


