window.onload = function() {
    const btnMuaNgay = document.getElementById("btnmua");
    btnMuaNgay.addEventListener("click", function() {
      window.location.href = "ThanhToan.html";
    });
  
    // Kiểm tra xem dữ liệu có tồn tại trong localStorage hay không
    if (localStorage.getItem("productDetails")) {
      // Lấy dữ liệu từ localStorage và chuyển đổi từ chuỗi JSON thành đối tượng JavaScript
      let details = JSON.parse(localStorage.getItem("productDetails"));
    
      // Lấy các phần tử HTML bằng cách sử dụng id
      const productImage = document.getElementById("product-image");
      const productName = document.getElementById("product-name");
      const productBrand = document.getElementById("product-brand");
      const productType = document.getElementById("product-type");
      const productSegment = document.getElementById("product-segment");
      const productPrice = document.getElementById("product-price");
      const productDescribe = document.getElementById("product-describe");
    
      // Hiển thị thông tin sản phẩm trên trang
      productImage.src = details.image;
      productName.innerText = details.name;
      productBrand.innerText = details.brand;
      productPrice.innerText = details.price;
      productDescribe.innerText = details.describe;
      productType.innerText = details.type;
      productSegment.innerText = details.segment;
    }
  };
  