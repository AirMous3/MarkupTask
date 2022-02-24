import styled from "styled-components";

export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 17px 42px 16px 43px;
  box-shadow: 0px 100px 161px rgba(33, 94, 233, 0.08),
    0px 64.8148px 94.2894px rgba(33, 94, 233, 0.0607407),
    0px 38.5185px 51.2815px rgba(33, 94, 233, 0.0485926),
    0px 20px 26.1625px rgba(33, 94, 233, 0.04),
    0px 8.14815px 13.1185px rgba(33, 94, 233, 0.0314074),
    0px 1.85185px 6.33565px rgba(33, 94, 233, 0.0192593);
  border-radius: 40px;
  cursor: pointer;
  white-space: nowrap;
`;