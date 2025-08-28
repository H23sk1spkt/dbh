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
class Kozuro{
    value=0;
    increase(){
        this.value++;
    }
}
const gau=new Kozuro()
console.log(gau.value);
gau.increase();
console.log(gau.value)
//ĐÂY LÀ CÁCH VIẾT NẾU MUỐN TRUYỀN GIÁ TRỊ VÀO
