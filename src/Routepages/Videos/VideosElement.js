import styled from "styled-components";
import background from "../../images/page-background.jpg";

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const ContainerWrapper = styled.div`
  padding-top: 15%;
  padding-left: 6%;
  padding-right: 5%;
`;
export const Heading = styled.p`
  font-size: 26px;
  color: #e4f4f3;
  text-transform: captilize;
  @media (max-width: 512px) {
    max-width: 100%;
    font-size: 20px;
  }
`;
export const Subheading = styled.h1`
  color: #25fcf4;
  font-weight: 100;
  font-size: 55px;
  max-width: 60%;
  @media (max-width: 992px) {
    max-width: 100%;
    font-size: 45px;
  }
  @media (max-width: 772px) {
    max-width: 100%;
    font-size: 40px;
  }
  @media (max-width: 512px) {
    max-width: 100%;
    font-size: 30px;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  max-width: 55%;
  line-height: 2.6rem;
  border-radius: 15px;
  padding: 20px 0px;
  color: #afe1e1;
  font-weight: 200;
  @media (max-width: 992px) {
    max-width: 80%;
    line-height: 2.4rem;
  }
  @media (max-width: 772px) {
    max-width: 100%;
    line-height: 2rem;
  }
`;
export const VidesNav = styled.div`
  width: 100%;
`;
export const MainVideoConatiner = styled.div``;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 512px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Li = styled.li`
  padding: 15px;
  font-size: 2rem;
  color: #25fcf4;
  font-weight: 600;
`;
