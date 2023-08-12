import '../css/start.css';
import logo from '../img/logo.png'
import React, { useState } from 'react';


// 번호키 확인 

  // function CheckNumber(event) {
  //   if(event.key === '.' 
  //     || event.key === '-'
  //     || event.key >= 0 && event.key <= 9) {
  //     return true;
  //   };
    
  //   return false;
  // };

  // const MainPage = ()=>{}
  //   const navigate = useNavigate ();

  //   const navigateToPurchase = () =>{
  //     navigate('/purchase');
  //   }
      


function Start (){
  return(
    <body>
      <div className='sm_box'> 
        <div className='box_img'>
          <img className='box_img_src' src={logo}></img>
        </div>
        <div className='box_text'>
          기업 인증하기
        </div>
        <div >
          <input className='box_input' type='text' placeholder='사업자 번호 입력'
          // //  onKeyPress={'return CheckNumber(event)'}
          //       value={text}
          //       onChange={(e)=>setText(e.target.value)}
           />
        </div>
        <div className='box_btn'>
          <button className='btn' type='button'  
          // onClick= {navigateToPurchase}
           hre>
            시작
          </button>
          
        </div>
      </div>
    </body>
  )
};


export default Start;