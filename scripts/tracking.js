const url = new URL(window.location.href).searchParams;


document.querySelector('.js-order-tracking').innerHTML = `
    <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${url.get('deliveryDate')}
        </div>

        <div class="product-info">
          ${url.get('orderName')}
        </div>

        <div class="product-info">
          ${url.get('quantity')}
        </div>

        <img class="product-image" src="${url.get('productImage')}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>`;
