import std_logo from "../img/std_logo.png";
import InputLabel from "../common/InputLabel";
import InputText from "../common/InputText";
import RoundButton from "../common/RoundButton";
import axios from "axios";
import {useEffect, useState} from "react";

const Result = () => {

    const getData = async () => {
        const result = await axios.get(process.env.REACT_APP_DB_HOST + "/member/result");
        setData(result.data.response);
    }




    const [data, setData] = useState([])


    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{
            color: 'white', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', paddingTop: '30%'
        }}>
            <div>
                <div style={{
                    width: '150px', height: '150px', backgroundImage: `url(${std_logo})`, backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                </div>
            </div>
            <div style={{margin: '50px'}}>
                <div style={{fontSize: '30px'}}>당첨을 축하합니다!</div>
                <hr/>
                {
                    data.map((item, index) => {
                        return (
                            <div style={{width: '100%', textAlign: 'center'}}>
                                <span>{item.team} {item.name}님</span>
                            </div>
                        )
                    })
                }
            </div>

            <div>커피 기프티콘을 빠른 시간 내에 보내드리겠습니다.</div>

        </div>
    )
}

export default Result;
