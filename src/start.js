import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding} from '@fortawesome/free-regular-svg-icons';
import './App.css';

function Start () {
  return (
    <div className='big_box'>
      <div className='sm_box'>
        <div>
          <div>
          <FontAwesomeIcon icon={faBuilding}  size='10x' className='icon'  />
          </div>
          <div>
            <div className='font'>기업 인증하기</div>
          </div>
            <input></input>
            <label for ='사업자 번호 입력'></label>
          <div>
          <button className='sm_box_btn' href='#'>
            시작
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;