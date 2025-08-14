function sendRequest(method = "GET", url) {
  //trả về hàm giá trị resolve và reject
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    //gửi iu cầu
    xhr.send();
    //lọc phản hồi trở về
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        //dung thi trar ve resolve
        const contentType = xhr.getResponseHeader("content-type");
        const isJson = contentType && contentType.includes("application/json");
        if (isJson) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (error) {
            console.log("Invalid JSON format");
          }
        } else {
          resolve(xhr.responseText);
        }
      } else {
        //sai thi reject
        reject(`HTTP code : ${xhr.status}`);
      }
    };
    xhr.onerror = function () {
      console.error("Network error");
    };
  }); //Khởi tạo bắt đầu gọi
}
const head = document.querySelector(".header");
sendRequest("GET", "./partials/header.html").then((responseText) => {
  head.innerHTML = responseText;
});
function firstProvince() {
  return sendRequest(
    "GET",
    "https://api01.f8team.dev/api/address/provinces"
  ).then((result) => result.data[0]);
}
function firstDistrict(firstProvince) {
  return sendRequest(
    "GET",
    `https://api01.f8team.dev/api/address/districts?province_id=${firstProvince}`
  ).then((result) => result.data[0]);
}
function firstWard(firstDistrict) {
  return sendRequest(
    "GET",
    `https://api01.f8team.dev/api/address/wards?district_id=${firstDistrict}`
  ).then((result) => result.data[0]);
}
// firstProvince()
//   .then((firstProvince) => firstDistrict(firstProvince.province_id))
//   .then((firstDistrict) => firstWard(firstDistrict.district_id))
//   .then((result) => console.log(result));
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
//
//DÙNG NÀY KHI NÀO MUỐN TẤT CẢ CHẠY XONG RỒI MỚI RESOLVE DÙNG KHI NÀO 2 REQUEST KO LIÊN QUAN ĐẾN NHAU
//NẾU CÓ 1 CÁI BỊ ERROR TOÀN BỘ , KO CHẠY ĐƯỢC NHỮNG HÀM RESOLVE
// Promise.all([
//     sendRequest(
//     "GET","https://api01.f8team.dev/api/address/provinces"
//   ),
//     sendRequest("GET", "./partials/header.html"),

// ]).then((result)=>{
//     console.log(result)
// })
// DÙNG NÀY KHI NÀO MUỐN TẤT CẢ CHẠY XONG RỒI MỚI RESOLVE DÙNG KHI NÀO 2 REQUEST KO LIÊN QUAN ĐẾN NHAU VÀ XEM ĐƯỢC TRẠNG THÁI CHI TIÊT CỦA NÓ
// CHẠY ĐƯỢC CẢ REJECT VÀ RESOLVE VÀ HIỆN TRẠNG THÁI CỦA NÓ
//  Promise.allSettled([
//     sendRequest(
//     "GET","https://api01.f8team.dev/api/address/provinces"
//   ),
//     sendRequest("GET", "./partials/header.html"),

// ]).then((result)=>{
//     console.log(result)
// }).catch(error => console.log(error))
//DÙNG KHI HÀM NÀY CÓ NHIỀU HÀM VÀ XEM HÀM NÀO CHẠY NHANH NHÁT
// const Time=new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         reject("iu tui ko ")
//     },2000)
// })
//  Promise.race([
//     sendRequest(
//     "GET","https://api01.f8team.dev/api/address/provinces"
//   ),
//     Time,
// // chỉ hiện thị cái nào nhanh nhất thôi
// ]).then((result)=>{
//     console.log(result)
// })
// .catch(error => console.log(error))
//Promise.resolve(); HÀM NÀY ĐƠN GIẢN , KIỂU LÀM TRỰC TIẾP KO CẦN THÔNG QUA GÌ HẾT DÙNG ĂN LIỀN (HAY DÙNG ĐỂ KIÊM TRA)
//Promise.reject();
async function handle() {
  try {
    const province=await firstProvince();
    const district=await firstDistrict(province.province_id);
    const ward=await firstWard(district.district_id);
    console.log(ward)
  } catch (error) {
    console.log(error)
  }
}
handle(); // phải gọi thì code mới chạy
