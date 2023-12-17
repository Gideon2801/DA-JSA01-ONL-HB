// console.log(1);
// console.log(2);
// console.log(3);

// while thì sẽ kiểm tra trước và thực hiện sau
// let i = 3
// while (i > 0) {
// i = i - 1
// console.log(i);
// }

// do-while làm trước kiểm tra sau
// let j = 10
// do {
// j = j - 2
// console.log(j);
// } while (j > 0);

// vòng lặp for: Khởi tạo, điều kiện, bước nhảy
// for (let index = 0; index <= 20; index++) {
// console.log(index);
// }

// Sử dụng vòng lặp in ra màn hình 
// các số chẵn bé hơn 10

// for (let index = 0; index < 10; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }
// }

// let i = 0
// while (i < 10) {
//     if (i % 2) {
//         console.log(i);
//     }
//     i++
// }

// Kiểu dữ liệu mảng
let array = [1, 2, 6, 9, 8, 7, 2, 6, 11]
// array.push(10)  // Thêm phần tử vào cuối mảng
// array.pop()     // Xóa phần tử cuối mảng
array.shift()   //Xóa phần tử đầu mảng
console.log(array[5]);

for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 1) {
        console.log("Vi trí ", index," có giá trị ", array[index], " là số lẻ" );
    }
}

// kiểu dữ liệu Object
let person = { name: "Quân", sex: "male"}
// Thêm mới theo từ khóa
person.address = "HCM"

// Xóa theo từ khóa
delete person.sex

console.log(person);
console.log(person["name"])

localStorage

let account = {username: "", password: ""}