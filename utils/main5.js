//c1 khai báo function contractor
// function Amine(value){
//     this.value=value
// }
// Amine.prototype.increase=function(){
//     this.value++
// }
// const gau=new Amine(50);
// console.log(gau.value);
// gau.increase();
// console.log(gau.value)
//trên là cách thông thường
//giờ đến cách ngắn gọn es6;
//ĐÂY LÀ CÁCH VIẾT KHI KHỒNG TRUYỀN GIÁ TRỊ GÌ VÀO HẾT
// class Kozuro{
//     value=0;
//     increase(){
//         this.value++;
//     }
// }
// const gau=new Kozuro()
// console.log(gau.value);
// gau.increase();
// console.log(gau.value)
//ĐÂY LÀ CÁCH VIẾT NẾU MUỐN TRUYỀN GIÁ TRỊ VÀO
// class Minamoto{
//     constructor(init){
//         this.value=init
//     }
//     increase(){
//         this.value++
//     }
// }
// const gau=new Minamoto(100)
// console.log(gau.value);
// gau.increase();
// console.log(gau.value);
// Dùng với get và set
// class Nini{
//     constructor(name){
//         this._name=name
//     }
//     get name(){
//         return this._name.trim();
//     }
//     set name(value){
//         if(typeof value!=="string"){
//             throw new Error("Name bạn truyền vào không phải 1 string");
            
//         }
//         this._name=value
//     }
// }
// const gau=new Nini("      HẢI        ")
// console.log(gau.name);
// gau.name="      VY";
// console.log(gau.name)
class goro{
    //Phân biệt phương thức tĩnh và phương thức thường
    //phương thức tĩnh thì dùng thẳng trục tiếp từ đối tượng GORO
    static increase=function(){

    }
    //Còn phương thức thường thì tạo đối tượng mới rồi gọi lại hàm (vs gau)
    increase(){

    }
}
