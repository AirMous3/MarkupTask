import styled from "styled-components";
import union from "../../assets/icons/Union.svg";

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 508px;
  height: 68px;
  border-radius: 40px;
  background: #ffffff;
  margin-bottom: 117px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185),
    0px 20px 13px rgba(0, 0, 0, 0.035),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
`;
export const MessageIcon = styled.div`
  background-image: url(${union});
  margin-left: 24px;
  margin-right: 21px;
  width: 20px;
  height: 16px;
  opacity: 0.2;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 250px;
`;
export const InputButton = styled.button`
  width: 180px;
  height: 50px;
  background: #215ee9;
  border: none;
  box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
    0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
    0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
    0px 20px 26.1625px rgba(33, 94, 233, 0.04),
    0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
    0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
  border-radius: 40px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;
