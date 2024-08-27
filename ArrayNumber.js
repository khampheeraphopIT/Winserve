const Number = [2,5,7,3,8,9,0]

 //2.1 
console.log(Number.slice(0,3))
/* slice() เป็น function ที่มีอยู่แล้วใน javascript โดยฟังก์ชันนี้
 ตัดส่วนหนึ่งของ array ออกมา ในโค้ดจะตัดตั้งแต่ 0,3 หรือ ตำแหน่งที่ 0 1 2 3 
 โดยตำแหน่งนั้นจะเริ่มต้นตั้งแต่ 0 ไม่ใช่ 1 นับCursor ตั้งแต่หน้าArray ตัวแรก จนถึง 3 */

//2.2
const Middlevalues = Math.floor(Number.length / 2)
console.log(Middlevalues)
/* ทำความเข้าใจก่อนนะครับ
    const คือ การประกาศตัวแปร แบบ คงที่ ค่าในตัวแปรนั้นไม่สามารถเปลี่ยนแปลงได้
    Math คือ ชุดฟังก์ชันที่ใช้ในการคำนวณทางคณิตศาสตร์
    .floor คือฟังก์ชันที่อยู่ใน Math ใช้ในการปัดเศษทศนิยมลง
    .length คือ การหาจำนวนสมาชิกใน Array ว่ามีเท่าไหร่
  ทำความเข้าใจโค้ด Number.length คือการหาจำนวนสมาชิกทั้งหมดใน Object Number มีทั้งหมด 7 
  จากนั้น นำจำนวนทั้งหมด มา / 2 = 3.5 ซึ่งเราจะนำ .floor มาทำการปัดเศษทศนิยมลง
  3.5 = 3 เราก็จะได้ตำแหน่งค่ากลางเป็น ค่าที่ 3 และเราก็ไปดูว่าสมาชิกตัวไหน อยู่ ตำแหน่งที่ 3 คำตอบ คือ 3 นั่นเอง */

//2.3
console.log(Math.min.apply(null, Number))
console.log(Math.max.apply(null, Number))

/* ทำความเข้าใจอีกรอบนะครับ
    Math คือ วัตถุหรือชุดฟังก์ชันที่ใช้ในการคำนวณทางคณิตศาสตร์ ใน Javascript
    .min และ .max คือ ฟังก์ชันที่อยู่ใน Math  
    Math.min คือการหาค่าต่ำสุดใน Array
    Math.max คือการหาค่าสูงสุดใน Array
    
    .apply คือ method ของฟังก์ชันใน javascript ที่ใช้เรียก ฟังก์ชันและส่งค่าเป็น Arguments ในรูปแบบ Array
    เช่น .apply(0, 1) 0 และ 1 ในวงเล็บคือ arguments หรือ .apply(null, Number) null และ Number จะเป็นarguments ที่ถูกส่งให้ฟังก์ชัน.min รับค่าและทำงาน
    .apply สามารถส่งค่าArguments แบบ Arrayได้ โดยการเอา object ที่เก็บ Array ไว้มา ใส่เป็น arguments เช่น Number ภายใน Number มี Array หลายจำนวน
    
    null คือ ตัวแทนของ this 
    this คือ การอ้างอิงวัตถุ หรือ ใช้บอกว่าฟังก์ชันนั้น ทำงานกับวัตถุไหน
    โดยในที่นี้ Math.min.apply จะไม่ใช้ Null(หรือ this) และใช้แค่ส่วนของ Numberแทน ก็จะทำการส่งค่า Number ให้กับ Math.min และ Math.max เพื่อทำงานต่อ  */
console.log('----------------------------')
console.log(Math.min(...Number))
console.log(Math.max(...Number))   

/* เพื่อยังงงกับวิธีแรกนะครับ
    เราสามารถใช้ ...Number ได้ ...เรียกว่า spread operator 
    เป็นเครื่องหมายที่มีอยู่ใน Javascript ใช้เพื่อขยายหรือแยกค่าจาก Array หรือส่งค่าเป็น argumentsให้กับฟังก์ชัน
    ...Number คือการส่งค่า Number ที่เป็น Array ให้ฟังก์ชัน Math.min || Math.max ทำงานต่อ  */
