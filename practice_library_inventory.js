const arrLibrary = []

let newBookFisrt = ["B01", "Trí tuệ nhân tạo cơ bản", "CNTT", 200000, 5, 5, "Kệ A3"];
arrLibrary.push(newBookFisrt);
console.log(`Đã nhập kho thành công ấn bản mới: ${newBookFisrt[0]}`);
let newBookSecond = ["B02", "Lập trình với Python", "CNTT", 1200000, 2, 10, "Kệ A3"];
arrLibrary.push(newBookSecond);
console.log(`Đã nhập kho thành công ấn bản mới: ${newBookSecond[0]}`);
let targetBorrowCode = "B01";
let foundForBorrow = 0;

for (let i = 0; i < arrLibrary.length; i++) {
    if (arrLibrary[i][0] === targetBorrowCode) {
        
        if (arrLibrary[i][5] > 0) {

            arrLibrary[i][5]--;
            console.log(`Mượn thành công sách "${arrLibrary[i][1]}". Số lượng khả dụng còn lại: ${arrLibrary[i][5]} cuốn.`);
            foundForBorrow = 1;
        } else {
            console.log(`Sách "${arrLibrary[i][1]}" hiện đã hết sách!`);
        }
        break;
        
    }
}

if (!foundForBorrow) {
    console.log(`Không tìm thấy mã sách cần mượn: ${targetBorrowCode}`);
}


let targetDeleteCode = "B02";
let isDeleted = 0

for (let i = 0; i < arrLibrary.length; i++) {
    if (arrLibrary[i][0] === targetDeleteCode) {
        let removedBook = arrLibrary.splice(i, 1); 
        isDeleted = 1; 
        console.log(`Đã thanh lý thành công ấn bản hỏng: ${removedBook[0][1]} (${targetDeleteCode})`);
        break; 
    }
}

if (!isDeleted) {
    console.log(`Không tìm thấy sách cần thanh lý với mã: ${targetDeleteCode}`);
}

let totalBooksCount = 0;
let totalAssetValue = 0;

for (let i = 0; i < arrLibrary.length; i++) {
    let price = arrLibrary[i][3];
    let totalCopies = arrLibrary[i][4];

    totalBooksCount += totalCopies;
    totalAssetValue += (totalCopies * price);
}

console.log(`
========TỔNG KẾT KHO========== 
${arrLibrary.length} đầu sách |Tổng số bản in: ${totalBooksCount} cuốn |Tổng giá trị: ${totalAssetValue} VNĐ`);