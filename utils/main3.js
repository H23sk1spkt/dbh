// CÁCH SỬ DỤNG IMPORT ĐỘNG
const button=document.querySelector("#button")
button.addEventListener("click",()=>{
    import("./index.js").then((module)=>{
        console.log(module.calculation(1,2))
    })
})
//sử dụng dynamic import sẽ giúp cho tối ưu khi nào cần mới dùng , sẽ tối ưu thời gian và hiệu suất của trang web