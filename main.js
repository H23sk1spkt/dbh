function sendRequest(method="GET",url,callback){
    const xhr=new XMLHttpRequest();
    //Khởi tạo bắt đầu gọi
    xhr.open(method,url,true);
    //gửi iu cầu
    xhr.send();
    //lọc phản hồi trở về
    xhr.onload=function() {
        if(xhr.status>=200 && xhr.status<400){
            callback(xhr.responseText)
        }  
    }
}
const head=document.querySelector(".header")
sendRequest("GET","./partials/header.html",(responseText)=> {
    head.innerHTML=responseText
})
sendRequest("GET","https://api01.f8team.dev/api/address/provinces",(responseText)=> {
    const provinc=JSON.parse(responseText).data
    const firstp=provinc[0]
    sendRequest("GET",`https://api01.f8team.dev/api/address/districts?province_id=${firstp.province_id}`,(responseText)=> {
        const dis=JSON.parse(responseText).data
        
        sendRequest("GET",`https://api01.f8team.dev/api/address/wards?distinct_id=${dis[0].distinct_id}`,(responseText)=> {
        const wards=JSON.parse(responseText).data
        console.log(wards[0])
        
})
})
})
