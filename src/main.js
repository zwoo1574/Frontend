import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';
import "/main.css";

function Main(){
    return(
        <div>
            {/* top font */}
            <div className='font'>
                
                다른 기업들의 홍보 방식을 <br></br>
                단어,영상,색 다양한 방식으로 <a>#분석
                </a>
                <button>더보기</button>
            </div>
            {/* 하단 분석 부분 */}
            <div>
                사용자의 <a>#분석</a>
                {/* 네가지 박스 */}
                <div>
                    <h6>#1</h6>
                    <span>연령별 분석 보기</span>
                    <span className='font'>연령별 소비를 분석하여<p></p> 제공합니다.</span>
                    {/* 구분선은 border top으로  */}
                    <div className=" border">
                        더보기 
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </div>
                </div>
            </div>
        </div>
    )
}