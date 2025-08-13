function sendRequest(method="GET",url){
    //trả về hàm giá trị resolve và reject
    return new Promise((resolve,reject)=> {
        const xhr=new XMLHttpRequest();
        xhr.open(method,url,true);
        //gửi iu cầu
        xhr.send();
        //lọc phản hồi trở về
        xhr.onload=function() {
            if(xhr.status>=200 && xhr.status<400){
                //dung thi trar ve resolve
                const contentType=xhr.getResponseHeader("content-type")
                const isJson=contentType && contentType.includes("application/json")
                if(isJson){
                    try {
                        resolve(JSON.parse(xhr.responseText))
                        
                    } catch (error) {
                        console.log("Invalid JSON format")
                    }
                }
                else {
                    resolve(xhr.responseText)
                }
            } 
            else {
                //sai thi reject
                reject(`HTTP code : ${xhr.status}`)
            } 
        };
        xhr.onerror=function() {
            console.error("Network error")
        }
    }
  )  //Khởi tạo bắt đầu gọi
}
const head=document.querySelector(".header")
sendRequest("GET","./partials/header.html").then(responseText => {
    head.innerHTML=responseText
})
function firstProvince(){
    return sendRequest("GET","https://api01.f8team.dev/api/address/provinces").then(result =>result.data[0]
    )
}
function firstDistrict(firstProvince){
    return sendRequest("GET",`https://api01.f8team.dev/api/address/districts?province_id=${firstProvince}`).then(result => result.data[0])
}
function firstWard(firstDistrict){
    return sendRequest("GET",`https://api01.f8team.dev/api/address/wards?district_id=${firstDistrict}`).then(result => result.data[0])
}
firstProvince()
.then((firstProvince) => firstDistrict(firstProvince.province_id))
.then((firstDistrict) => firstWard(firstDistrict.district_id))
.then(result => console.log(result))
// sendRequest("GET","https://api01.f8team.dev/api/address/provinces").then(result=> {
//     const firstp=result.data[0]
//     return sendRequest("GET",`https://api01.f8team.dev/api/address/districts?province_id=${firstp.province_id}`)})
//     .then(result=> {
//         const dis=result.data[0]
//         return sendRequest("GET",`https://api01.f8team.dev/api/address/wards?district_id=${dis.district_id}`)})
//     .then(result => {
//         const ward=result.data[0]
//         console.log(ward)
//     })
//     .catch(error => console.log(error))
