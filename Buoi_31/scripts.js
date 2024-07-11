document.addEventListener("DOMContentLoaded", function () {
  const productTable = document.getElementById("productTable");
  const cartContainer = document.getElementById("cartContainer");
  const cartTable = document.getElementById("cartTable").querySelector("tbody");
  const totalQuantityElement = document.getElementById("totalQuantity");
  const cartTotalElement = document.getElementById("cartTotal");
  const clearCartButton = document.getElementById("clearCart");
  const updateCartButton = document.getElementById("updateCart");
  const cart = {};

  function addToCart(productName, productPrice, quantity) {
    if (cart[productName]) {
      cart[productName].quantity += quantity;
    } else {
      cart[productName] = {
        price: productPrice,
        quantity: quantity,
      };
    }
    updateCartTable();
  }

  function removeFromCart(productName) {
    delete cart[productName];
    updateCartTable();
  }

  function clearCart() {
    Object.keys(cart).forEach(function (key) {
      delete cart[key];
    });
    updateCartTable();
    cartContainer.classList.add("hidden");
  }

  function updateCartTable() {
    cartTable.innerHTML = "";
    let total = 0;
    let totalQuantity = 0;
    let stt = 1;

    Object.entries(cart).forEach(function ([productName, productData]) {
      const productTotal = productData.price * productData.quantity;
      total += productTotal;
      totalQuantity += productData.quantity;

      const row = createElement(
        "tr",
        {},
        createElement("td", {}, stt.toString()),
        createElement("td", {}, productName),
        createElement("td", {}, productData.price.toLocaleString()),
        createElement("td", {}, productData.quantity.toString()),
        createElement("td", {}, productTotal.toLocaleString()),
        createElement(
          "td",
          {},
          createElement(
            "button",
            {
              class: "remove-from-cart",
              "data-product-name": productName,
            },
            "Xóa"
          )
        )
      );

      cartTable.appendChild(row);
      stt++;
    });

    if (total === 0) {
      cartTable.innerHTML = '<tr><td colspan="6">Giỏ hàng trống</td></tr>';
      totalQuantityElement.textContent = "0";
      cartTotalElement.textContent = "0";
    } else {
      totalQuantityElement.textContent = totalQuantity.toString();
      cartTotalElement.textContent = total.toLocaleString();
    }

    if (Object.keys(cart).length > 0) {
      cartContainer.classList.remove("hidden");
    } else {
      cartContainer.classList.add("hidden");
    }
  }

  productTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-to-cart")) {
      const productRow = event.target.closest("tr");
      const productName = productRow.children[1].textContent;
      const productPrice = parseFloat(
        productRow.children[2].textContent.trim()
      );
      const quantityInput = productRow.querySelector(".quantity");
      const quantity = parseInt(quantityInput.value);

      addToCart(productName, productPrice, quantity);
    }
  });

  cartTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-from-cart")) {
      const productName = event.target.getAttribute("data-product-name");

      removeFromCart(productName);
    }
  });

  clearCartButton.addEventListener("click", function () {
    if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng không?")) {
      clearCart();
    }
  });

  updateCartButton.addEventListener("click", function () {
    alert("Giỏ hàng đã được cập nhật");
  });

  updateCartTable();
});
