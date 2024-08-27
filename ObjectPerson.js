let Me ={
    Firstname: "Khampheeraphop",
    Lastname: "Thongsaeng",
    Nickname: "Phop",
    PhoneNo: "0838533191",
    DateofBirth: "2005-01-14",
    Age: 19,
    Hobby: ["Play game", "Practice English", "listen music"],
    Myfriends: [
        { Nickname: "Art", Age: 19 },
        { Nickname: "Wor", Age: 20 },
        { Nickname: "Bell", Age: 20 },
        { Nickname: "M", Age: 19 },
        { Nickname: "Boss", Age: 20 },
    ]
}
    
console.log(Me)
console.log(Me.Myfriends)

/* การประกาศชนิดตัวแปรเป็น let คือ ข้อมูลสามารถเปลี่ยนแปลงได้

สร้าง Object ขึ้นมา ชื่อว่า Me จากนั้นภายใน Object ทำการเก็บค่าข้อมูลต่างๆ
โดยการสร้างProperties ขึ้นมา เพื่อเก็บค่าที่ใส่ข้อมูลเข้าไป โดยมีการเก็บข้อมูล 3 วิธี

1.เก็บแบบ String คือการ ใส่ เครื่องหมาย Double quote || Single quote เพื่อให้เก็บค่าข้อมูลเป็น String

2.เก็บแบบ Integer คือ ไม่ต้องใส่เครื่องหมาย ใส่เพียงตัวเลขเข้าไป

3.เก็บแบบ Array จะมีเครื่องหมาย [] ไว้เก็บข้อมูลหลายข้อมูลในpropertiesหรือเก็บข้อมูลหลายข้อมูลไว้ในตัวแปรเดียว
ในArray สามารถดึง properties อื่น เข้ามาใช้งานใน Array ได้

console.log เป็นการแสดงผลลัพธ์หรือข้อความออกมาทาง Console บน เบราว์เซอร์ 

console.log(Me.Myfriends) เป็นการแสดงผลลัพธ์หรือข้อความ โดยเลือกให้แสดงแค่ Object Me และ แสดงแค่ในส่วนของ Properties ที่ชื่อว่า Myfriends*/ 

