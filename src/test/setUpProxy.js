// import axios from 'axios';
// import { Start } from 'react-router-dom';

// axios.post("http://localhost:8080/login", {
//             userId: userId,
//             password: password,
//             username: userName,
//             email: email
//         }).then(function (response) {
//             if(response.data.code == 0){
//                 setPopup({
//                     open: true,
//                     title: "Confirm",
//                     message: "Join Success!", 
//                     callback: function(){
//                         navigate("/login");
//                     }
//                 });
//             } else {
//                 let message = response.data.message;
//                 if(response.data.code == 10000){
//                     message = "User ID is duplicated. Please enter a different User ID. "
//                 }
//                 setPopup({
//                     open: true,
//                     title: "Error",
//                     message: message
//                 });
//             }
//         }).catch(function (error) {
//             console.log(error);
//         });


// async function postData() {
//     try {
//       //응답 성공 
//       const response = await axios.post('http://localhost:8080/login',{
//             //보내고자 하는 데이터 
//           text: "1234512345",
//       });
//       console.log(response);
//     } catch (error) {
//       //응답 실패
//       console.error(error);
//     }
//   }

  // const createProxyMiddleware = require('http-proxy-middleware')
  // module.exports = app => {
  //   app.use(
  //     createProxyMiddleware(
  //       ['/api', '/socket.io'],
  //       {
  //         target: 'http://nginx:80',
  //         changeOrigin: true,
  //         ws: true,
  //         router: {
  //           '/socket.io': 'ws://nginx:80'
  //         }
  //       }
  //     )
  //   )
  // }