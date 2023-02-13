import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    width: 70%;
    justify-content:center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Icon = styled.img``;
export const Felx = styled.div`
font-size:15px;
padding:10px 25px;
display flex;
align-items:center;
cursor: pointer;
transition:all ease-in-out   1s;
&:hover .hover{
    display: block;
    transition:all ease-in 7s;
}
&:hover .corsur{
    cursor: pointer;
}
`;
export const Img = styled.img`
  width: 20px;
  margin: 0 10px;
`;
export const HoverItem = styled.div`
  display: none;
  background: rgba(20, 20, 20, 0.7);
  padding: 15px 25px;
  position: absolute;
  top: 40px;
  right: 15px;
  border-radius: 10px;
  z-index: 1;
  &:before {
    display: inline-block;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 30px;
    content: " ";
    margin-top:-25px;
    right:25px;
    z-index:2;
    text-shadow: none;
    background: rgba(20, 20, 20, 0.7);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export const Postion = styled.div``;
export const Ul = styled.ul`
  list-style-type: none;
`;
export const Li = styled.li`
  position: relative;
  padding: 10px 5px;
  cursor: pointer;
  display:flex;
  align-items:center;
  &:hover {
    color: #25fcf4;
  }
`;
export const Log = styled.img`
width: 20px;
height:20px;

`