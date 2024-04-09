import std_logo from "../img/std_logo.png";
import InputLabel from "../common/InputLabel";
import InputText from "../common/InputText";
import RoundButton from "../common/RoundButton";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Apply = () => {

    const apply = async () => {
        console.log(name + team);
        const result = await axios.post(process.env.REACT_APP_DB_HOST + "/member",  {
            name: name,
            team: team
        });
        if (result.data.response === '성공') {
            localStorage.setItem("apply", "1");
            setApplied(true)
            alert("참여 완료되었습니다.")
        } else {
            alert("참여에 실패했습니다. 다시 시도해 주세요.")
        }
    }
    const viewResult = async () => {
        const data = await axios.get(process.env.REACT_APP_DB_HOST + "/member/result/check")
        setProcessed(data.data.response);
        if (data.data.response) {
            navigate('/result')
        } else {
            alert("결과 발표 전입니다.")
        }
    }


    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [team, setTeam] = useState('');

    const [processed, setProcessed] = useState(false);
    const [applied, setApplied] = useState(false);

    useEffect(() => {
        setApplied(localStorage.getItem("apply") === "1");
    }, []);

    return (
        <div style={{
            color: 'white', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '120px'
        }}>
            <div>
                <div style={{
                    width: '150px', height: '150px',
                    backgroundImage: `url(${std_logo})`, backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center', backgroundSize: 'cover'
                }}>
                </div>
            </div>
            {!applied && <div style={{margin: '50px'}}>
                <InputLabel>성명</InputLabel>
                <InputText onInput={(e) => {
                    setName(e.target.value)
                }} placeholder="성명을 입력해주세요."></InputText>
                <InputLabel>부서명</InputLabel>
                <InputText onInput={(e) => {
                    setTeam(e.target.value)
                }} placeholder="부서명을 입력해주세요."></InputText>
                <RoundButton onClick={() => {
                    apply()
                }}>응모하기</RoundButton>
            </div>
            }
            {
                applied && <div style={{margin: '50px'}}>
                    <div>참여해주셔서 감사합니다.</div>
                   <RoundButton onClick={() => {
                        viewResult()
                    }}>결과보기</RoundButton>
                </div>
            }
        </div>
    )
}

export default Apply;
