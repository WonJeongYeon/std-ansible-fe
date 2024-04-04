import styled from "styled-components";

const RoundButton = styled.button`

    width: 100%;
    height: 40px;
    //min-height: 50px;
    border-radius: 25px;
    border: none;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #97ffb5;
    margin-top: 30px;
    color: white;
    //margin-left: 50px;
    //margin-right: 50px;

    &:disabled {
        color: #CCCCCC;
        background-color: #f2f4f7;
        cursor: default;
    }
`;

export default RoundButton;
