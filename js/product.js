let list = document.getElementById("list");
let filter = document.getElementById("filter");
let count = document.getElementById("count");
let listproducts = [
  {
    id: "dh1",
    image: "../img/dh1.png",
    name: "INTEGRATED TOURBILLON FULL BLUE ",
    price: "527.000,00 $",
    brand: "Hublot",
    type: "dhco",
    segment: "caocap",
    describe:"Thiết kế này quả thật là một siêu phẩm và tất nhiên cũng phải có mức giá tương xứng. Toàn bộ vỏ đồng hồ và cả sợi dây được chế tác từ chất liệu Sapphire trong suốt, có độ cứng rất cao. Cái gì cứng quá thì sẽ giòn và dễ vỡ, do đó việc chế tác trên Sapphire không hề đơn giản. Để tạo ra từng chi tiết vỏ hay từng mắt dây nhỏ bé, những người nghệ nhân của Hublot phải thực hiện trong nhiều ngày, nhiều tháng.",
    
  },
  {
    id: "dh2",
    image: "../img/dh2.png",
    name: "UNICO TITANIUM CERAMIC",
    price: "346.000.000 VND",
    brand: "Hublot",
    type: "dhco",
    segment: "caocap",
    describe:"Big Bang Unico là một trong những bộ sưu tập làm nên niềm tự hào cho thương hiệu Hublot với thiết kế Big Bang kinh điển, cùng với bộ máy Unico được nghiên cứu và sản xuất in-house. Ngoài ra, thiết kế thể thao và mạnh mẽ thì nhất hẳn sẽ khó có cỗ máy nào bì được với chiếc đồng hồ Big Bang Unico.",
    
  },
  {
    id: "dh3",
    image: "../img/dh3.png",
    name: "SQUARE BANG 821.NM.0170.RX",
    price: "654,800,000 VNĐ",
    brand: "Hublot",
    type: "dhco",
    segment: "caocap",
    describe:"Đồng hồ Hublot Square Bang Unico 821.CI.0170.RX 821CI0170RX là mẫu đồng hồ đến từ thương hiệu Hublot, có kích cỡ mặt số 42 mm dành cho các quý ông lịch lãm. Chiếc đồng hồ sử dụng bộ máy tự động có xuất xứ Thụy Sĩ, đồng hồ có thể vận hành trong thời gian dài, có độ bền và giá trị sưu tầm cao. Chất liệu vỏ được chế tác từ Ceramic có độ bóng cao, khả năng chống xước hoàn hảo, đem lại vẻ ngoài sang trọng! Đồng hồ được trang bị dây cao su bền bỉ, trẻ trung năng động. Chất liệu kính làm từ Sapphire đem lại khả năng chống xước, chống lóa tuyệt vời.",

    
  },
  {
    id: "dh4",
    image: "../img/dh6.png",
    name: "ROLEX SUBMARINER DATE",
    price: "614,250,000 VNĐ",
    brand: "Rolex",
    type: "dhco",
    segment: "caocap",
    describe:"Là chuẩn mực trong số những chiếc đồng hồ dành cho thợ lặn, Oyster Perpetual Submariner là hiện thân của mối liên hệ lịch sử giữa Rolex với thế giới dưới nước. Nó tích hợp một vành đồng hồ xoay 1 chiều với dây đeo Oyster có mối nối cố định. Đồng hồ Submariner và Submariner Date thế hệ mới nhất vẫn trung thành với hình mẫu ban đầu ra mắt từ năm 1953. Trong công nghệ chế tác đồng hồ, Submariner đại diện cho một bước ngoặt lịch sử; đặt ra tiêu chuẩn riêng cho đồng hồ dành cho thợ lặn.",
    
  },
  {
    id: "dh5",
    image: "../img/dh7.png",
    name: "OYSTER PERPETUAL Day‑Date 36",
    price: "1.661.800.000 VND",
    brand: "Rolex",
    type: "dhco",
    segment: "caocap",
    describe:"Day-Date luôn thể hiện sự uy tín và đổi mới. Được làm hoàn toàn từ kim loại quý, nó là chiếc đồng hồ đeo tay có lịch đầu tiên cho biết, và ghi rõ các thứ trong tuần trong một cửa sổ trên mặt số. Rolex ra mắt Oyster Perpetual Day-Date 40 phiên bản bạch kim 950 – có thể dễ dàng nhận biết nhờ mặt số màu xanh băng – lần đầu tiên có vành khía. Là nền tảng trong di sản thẩm mỹ của Rolex, bộ phận nổi bật này, vốn chỉ có trên một số mẫu đồng hồ Cổ điển trong bộ sưu tập Oyster Perpetual và cho đến nay chỉ được làm từ vàng 18 ct, hiện đã có phiên bản làm bằng kim loại quý giá nhất – bạch kim. ",
    
  },

  {
    id: "dh6",
    image: "../img/dong-ho-apple-watch-s7-removebg-preview.png",
    name: "Apple Watch Series 7",
    price: "9.990.000 VND",
    brand: "Apple",
    type: "dhthongminh",
    segment: "tamtrung",
    describe:"Apple Watch S7 LTE 41 mm viền thép có thiết kế tươi trẻ, hiện đại. Khung viền thép bền bỉ, cứng cáp cùng mặt kính Sapphire giúp bảo vệ an toàn cho đồng hồ trước những va đập không mong muốn. Màn hình OLED 1.61 inch hiển thị hình ảnh sống động, sắc nét, dây đeo silicone êm nhẹ, không thấm nước, cho bạn cảm giác dễ chịu suốt ngày dài.",
    
  },
  {
    id: "dh7",
    image: "../img/redmi-watch-3-thumb-600x600-removebg-preview.png",
    name: "Xiaomi Redmi Watch 3",
    price: "2.790.000 VND",
    brand: "Xiaomi",
    type: "dhthongminh",
    segment: "tamtrung",
    describe:"Tầm giá chưa đến 3 triệu đồng thì một chiếc smartwatch vừa có nghe gọi vừa được trang bị GPS độc lập khá hiếm thấy nhưng gần đây Xiaomi đã cho ra mắt sản phẩm đồng hồ thông minh Xiaomi Redmi Watch 3 có cả hai tính năng trên. Bên cạnh đó còn được trang bị nhiều tính năng hỗ trợ theo dõi sức khỏe và luyện tập phục vụ cho người dùng.",
    
  },
  {
    id: "dh8",
    image: "../img/amazfit-gts-4-day-nylon.png",
    name: "Amazfit GTS 4",
    price: "950.000 VNĐ",
    brand: "Amazfit",
    type: "dhthongminh",
    segment: "giare",
    describe:"Nhìn sơ thì thiết kế bên ngoài của Amazfit GTS 4 này không có gì quá khác biệt so với các dòng đồng hồ thông minh trên thị trường hiện nay. Nhưng so với những thế hệ trước của hãng thì đã có nhiều sự thay đổi, tiêu biểu là phần viền được làm mỏng hơn cho cảm giác xem không bị giới hạn.",
    
  },
  {
    id: "dh9",
    image: "../img/samsung-galaxy-watch-4-removebg-preview.png",
    name: "Samsung Galaxy Watch4",
    price: "4.990.000 VNĐ",
    brand: "SamSung",
    type: "dhthongminh",
    segment: "tamtrung",
    describe:"Phiên bản đồng hồ Samsung Galaxy Watch 4 này được thiết kế đơn giản với mặt đồng hồ dạng tròn có đường kính 40 mm thường thấy ở đồng hồ thông minh tạo nên phong cách năng động, cuốn hút. Khung viền đồng hồ được làm từ chất liệu nhôm bền chắc, khối lượng nhẹ. Bên cạnh đó dây đeo silicone êm ái, không gây khó chịu khi đeo suốt ngày dài, kể cả khi người dùng vận động, tập thể thao ra nhiều mồ hôi tay.",
    
  },
  {
    id: "dh10",
    image: "../img/apple-watch-ultra-trail-m-l-den-removebg-preview.png",
    name: "Apple Watch Ultra LTE",
    price: "19.990.000 VND",
    brand: "Apple",
    type: "dhthongminh",
    segment: "tamtrung",
    describe:"Apple Watch Ultra là chiếc đồng hồ thông minh cao cấp hiện đại nhất vừa được công bố tại sự kiện Far Out của ông lớn Táo khuyết. Kiểu dáng của thiết bị là vô cùng độc đáo, mới mẻ và nó được trang bị nhiều tính năng tiện lợi. Đây hứa hẹn là một người bạn đồng hành đắc lực cho dân chuyên thể thao.",
    
  },

  {
    id: "dh11",
    image: "../img/GLX-S5600-3.png",
    name: "Casio GLX-S5600-3",
    price: "2.990.000 VND",
    brand: "Casio",
    type: "dhdientu",
    segment: "giare",
    describe:"Giới thiệu mẫu đồng hồ G-LIDE thể thao nhỏ gọn hơn với màn hình hiển thị đồ thị thủy triều. Mẫu thiết kế mỏng, nhỏ gọn và thoải mái này cũng lấy cảm hứng từ thiên nhiên. Đường gờ và dây đeo đều được làm từ nhựa sinh học thân thiện với môi trường, sử dụng tài nguyên hữu cơ tái tạo được để giảm tác động đến môi trường. ",
    
  },

  {
    id: "dh12",
    image: "../img/GMW-B5000TVB-1.png",
    name: "Casio GMW-B5000TVB-1",
    price: "3.990.000 VND",
    brand: "Casio",
    type: "dhdientu",
    segment: "giare",
    describe:"Nâng trình với chiếc đồng hồ hoàn toàn nghiêm túc này. Chiếc GMW-B5000 trực tiếp kế thừa chiếc G-SHOCK đầu tiên, giờ được trang bị vỏ kim loại. Mẫu đồng hồ GMW-B5000TVB lấy cảm hứng từ thế giới ảo. Được làm bằng titan, chiếc đồng hồ này vừa bền chắc lại vừa nhẹ. Các lỗ vấu trên đường gờ để lộ lớp vỏ và lớp đệm bằng nhựa resin bên dưới, tạo nên phong cách thiết kế mang hơi hướng tương lai.",
    
  },
];
let productFilter = listproducts; //khi chưa lọc thì hiển thị toàn bộ
showProduct(productFilter);
function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = "";
  productFilter.forEach((item) => {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    //create img
    let newImage = new Image(); // set width and height to 200 pixels
    newImage.src = item.image;
    newItem.appendChild(newImage);
    //create name
    let newTitle = document.createElement("div");
    newTitle.classList.add("title");
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);
    //create price
    let newPrice = document.createElement("div");
    newPrice.classList.add("price");
    newPrice.innerText = item.price;
    newItem.appendChild(newPrice);


newItem.addEventListener("click", function () {
  // Tạo đối tượng chứa thông tin chi tiết sản phẩm
  let details = {
    id: item.id,
    brand: item.brand,
    type: item.type,
    segment: item.segment,
    image: item.image,
    name: item.name,
    price: item.price,
    describe: item.describe
  };

  // Lưu thông tin sản phẩm vào localStorage
  localStorage.setItem("productDetails", JSON.stringify(details));

  // Chuyển hướng đến trang chi tiết sản phẩm
  window.location.assign("ChiTietSanPham.html");
});

    list.appendChild(newItem);
  });
}


  
// khai báo biến lưu giá trị thương hiệu được chọn
let brandFilter = "all";
// khai báo biến lưu giá trị loại đồng hồ được chọn
let typeFilter = "all";
//khai báo biến luu trữ giá trị của phân khúc được chọn
let segmentFilter = "all";
// lắng nghe sự kiện thay đổi giá trị của ô select thương hiệu
let brandSelect = document.getElementById("brand");
brandSelect.addEventListener("change", function () {
  brandFilter = this.value; // lưu giá trị thương hiệu được chọn
  filterProducts(); // gọi hàm lọc sản phẩm
});

// lắng nghe sự kiện thay đổi giá trị của ô select loại đồng hồ
let typeSelect = document.getElementById("type");
typeSelect.addEventListener("change", function () {
  typeFilter = this.value; // lưu giá trị loại đồng hồ được chọn
  filterProducts(); // gọi hàm lọc sản phẩm
});

// lắng nghe sự kiện thay đổi giá trị của ô select phân khúc
let segmentSelect = document.getElementById("segment");
segmentSelect.addEventListener("change", function () {
  segmentFilter = this.value; // lưu giá trị loại đồng hồ được chọn
  filterProducts(); // gọi hàm lọc sản phẩm
});

function filterProducts() {
  productFilter = listproducts.filter((item) => {
    if (
      brandFilter === "all" &&
      typeFilter === "all" &&
      segmentFilter === "all"
    ) {
      return true;
    } else if (
      brandFilter !== "all" &&
      typeFilter === "all" &&
      segmentFilter === "all"
    ) {
      return item.brand.toLowerCase() === brandFilter.toLowerCase();
    } else if (
      brandFilter === "all" &&
      typeFilter !== "all" &&
      segmentFilter === "all"
    ) {
      return item.type.toLowerCase() === typeFilter.toLowerCase();
    } else if (
      brandFilter === "all" &&
      typeFilter === "all" &&
      segmentFilter !== "all"
    ) {
      return item.segment.toLowerCase() === segmentFilter.toLowerCase();
    } else if (
      brandFilter !== "all" &&
      typeFilter !== "all" &&
      segmentFilter === "all"
    ) {
      return (
        item.brand.toLowerCase() === brandFilter.toLowerCase() &&
        item.type.toLowerCase() === typeFilter.toLowerCase()
      );
    } else if (
      brandFilter === "all" &&
      typeFilter !== "all" &&
      segmentFilter !== "all"
    ) {
      return (
        item.type.toLowerCase() === typeFilter.toLowerCase() &&
        item.segment.toLowerCase() === segmentFilter.toLowerCase()
      );
    } else if (
      brandFilter !== "all" &&
      typeFilter === "all" &&
      segmentFilter !== "all"
    ) {
      return (
        item.brand.toLowerCase() === brandFilter.toLowerCase() &&
        item.segment.toLowerCase() === segmentFilter.toLowerCase()
      );
    } else {
      return (
        item.brand.toLowerCase() === brandFilter.toLowerCase() &&
        item.type.toLowerCase() === typeFilter.toLowerCase() &&
        item.segment.toLowerCase() === segmentFilter.toLowerCase()
      );
    }
  });

  showProduct(productFilter);
}
// Lưu trữ danh sách kết quả tìm kiếm
let searchResults = [];

// Giới hạn số lượng kết quả hiển thị ban đầu
const maxResults = 5;

// Hàm tìm kiếm sản phẩm
function searchProducts(keyword) {
  // Xóa kết quả tìm kiếm hiện tại
  searchResults = [];

  // Lọc danh sách sản phẩm theo từ khóa
  if (keyword.trim() !== "") {
    searchResults = listproducts.filter(product =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // Hiển thị kết quả tìm kiếm
  displayResults();
}

// Hàm hiển thị kết quả tìm kiếm
function displayResults() {
  const searchResultsElement = document.getElementById("resultsList");
  searchResultsElement.innerHTML = "";

  if (searchResults.length === 0) {
    // Không tìm thấy kết quả
    searchResultsElement.innerHTML = "<li>Không tìm thấy kết quả.</li>";
  } else {
    // Hiển thị kết quả tìm kiếm
    const resultsToShow = searchResults.slice(0, maxResults);
    resultsToShow.forEach(result => {
      const productElement = document.createElement("li");
      productElement.innerHTML = `
        <img src="${result.image}" alt="${result.name}" />
        <h6>${result.name}</h6>
      `;
      searchResultsElement.appendChild(productElement);
    });

    // Hiển thị nút "Xem thêm" nếu còn kết quả tìm kiếm khác
    if (searchResults.length > maxResults) {
      const showMoreButton = document.getElementById("showMoreButton");
      showMoreButton.style.display = "block";
    }
  }

  // Hiển thị vùng kết quả tìm kiếm
  const searchResultsPopup = document.getElementById("searchResults");
  searchResultsPopup.style.display = "block";
}

// Hàm hiển thị thêm kết quả
function showMoreResults() {
  const searchResultsElement = document.getElementById("resultsList");
  searchResultsElement.innerHTML = "";

  searchResults.forEach(result => {
    const productElement = document.createElement("li");
    productElement.innerHTML = `
      <img src="${result.image}" alt="${result.name}" />
      <h6>${result.name}</h6>
    `;
    searchResultsElement.appendChild(productElement);
  });

  // Ẩn nút "Xem thêm"
  const showMoreButton = document.getElementById("showMoreButton");
  showMoreButton.style.display = "none";
}

// Xử lý sự kiện click ngoài vùng kết quả tìm kiếm để ẩn nó
document.addEventListener("click", function(event) {
  const searchResultsPopup = document.getElementById("searchResults");
  if (!searchResultsPopup.contains(event.target)) {
    searchResultsPopup.style.display = "none";
  }
});


console.log(listproducts);





// 