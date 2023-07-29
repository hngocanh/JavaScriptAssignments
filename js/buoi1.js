// Bai 1: Tinh tien luong nhan vien

// B1

let luong1Ngay = 100000;

let soNgayLam = prompt('Nhap vao tong so ngay lam viec');

// B2

let salary = 0;

salary = luong1Ngay * soNgayLam;

// B3

alert(`Tong tien luong cho ${soNgayLam} ngay lam viec la ${salary} VND`)

// Bai 2 Tinh gia tri trung binh

// B1
let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = prompt(`Nhập số thực thứ ${i + 1}:`);
    numbers.push(parseFloat(num));
}

// B2
let sum1 = numbers.reduce((a, b) => a + b, 0);
let avg = sum1 / numbers.length;

// B3
alert(`Giá trị trung bình của 5 số là: ${avg}`);

// Bai 3 Quy doi tien

// B1
let usd = prompt("Nhập số tiền USD:");

// B2
let vnd = currency((usd * 23500), { symbol: "đ", separator: '.', decimal: ',' }).format();

// B3
alert(`${usd} USD = ${vnd}`);

// Bai 4 Tinh chu vi, dien tich hinh chu nhat

// B1

let chieuRong = prompt("Nhap chieu rong HCN:");
let chieuDai = prompt("Nhap chieu dai HCN:");

// B2

let chuVi = 0;
let dienTich = 0;

chuVi = (parseFloat(chieuRong) + parseFloat(chieuDai)) * 2;
dienTich = parseFloat(chieuRong) * parseFloat(chieuDai);

// B3

alert(`Chu vi HCN la ${chuVi}, dien tich HCN la ${dienTich}`);

// Bai 5 Tinh tong hai ky so

// B1
let num = prompt("Nhập vào một số có hai chữ số:");

// B2
let sum2 = parseInt(num[0]) + parseInt(num[1]);

// B3
alert(`Tổng của hai ký số của số ${num} là: ${sum2}`);


