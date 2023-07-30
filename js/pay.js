// Kiểm tra xem dữ liệu có tồn tại trong localStorage hay không
if (localStorage.getItem("productDetails")) {
  // Lấy dữ liệu từ localStorage và chuyển đổi từ chuỗi JSON thành đối tượng JavaScript
  let details = JSON.parse(localStorage.getItem("productDetails"));

  // Lấy các phần tử HTML bằng cách sử dụng id
  const cart = document.getElementById("cart");
  const total = document.getElementById("total");

  // Tạo một hàng mới trong bảng
  const row = document.createElement("tr");

  // Tạo cột cho hình ảnh
  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = details.image;
  image.style.maxWidth = "30px";
  image.style.maxHeight = "30px";
  imageCell.appendChild(image);
  row.appendChild(imageCell);

  // Tạo cột cho tên sản phẩm
  const nameCell = document.createElement("td");
  nameCell.innerText = details.name;
  row.appendChild(nameCell);

  // Tạo cột cho số lượng
  const quantityCell = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = "1";
  quantityInput.value = "1";
  quantityInput.addEventListener("change", updateTotalPrice); // Add event listener
  quantityCell.appendChild(quantityInput);
  row.appendChild(quantityCell);

  // Tạo cột cho giá
  const priceCell = document.createElement("td");
  priceCell.innerText = details.price;
  row.appendChild(priceCell);

  // Thêm hàng vào bảng
  cart.appendChild(row);

  // Tính tổng tiền
  updateTotalPrice();

  function updateTotalPrice() {
    const quantity = parseFloat(quantityInput.value);
    const price = parseFloat(details.price);
    const totalPrice = quantity * price;
    total.innerText = totalPrice.toFixed(2); // Set total price with 2 decimal places
  }
}
