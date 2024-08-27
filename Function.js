//3.1
function add (A, B) {
    return A + B;
}

console.log(add(4,7))

//3.2
function avg (A, B, C) {
    return (A + B + C ) / 3;
}

console.log(avg(5, 10, 7))

/* function คือ การสร้างฟังก์ชันขึ้นมา และ ประกาศตัวแปรว่า add || avg
    และมี parameters ที่ไว้รับค่า 2 ตัว คือ A B || A B C 
    return คือการส่งค่าออกมาจากฟังก์ชัน
    
    ในส่วนของ console.log(add(4,7)) || console.log(avg(5,10,7))
    add || avg คือฟังก์ชันที่เอามาแสดง และ มีการส่งค่าให้กับพารามิเตอร์ เช่น 4, 7
    ก็จะส่งค่าให้พารามิเตอร์ A,B ค่า A,B ก็จะเปลี่ยนเป็น 4,7 ครับ */