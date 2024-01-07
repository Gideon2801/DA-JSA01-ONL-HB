// JSON.stringify: Chuyển các kiể dữ liệu về chuỗi để lưu trữ localStorage 
// JSON.parse: Chuyển đổi từ dạng chuỗi về lại kiểu dữ liệu gốc của nó

// localStorage.setItem: dùng để thêm dữ liệu vào localStorage
// localStorage.getItem: dùng để lấy dữ liệu đã được lưu trữ trong localStorage theo key(từ khóa)
// localStorage.removeItem: dùng để xóa dữ liệu lưu trong localStorage theo key(từ khóa)

localStorage.removeItem("test")

let test = localStorage.getItem("test")

console.log(JSON.parse(test));

let arr = [1,2,5,4,9]

console.log(arr);