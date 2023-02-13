import React from "react";
import { Container, Boxone, SceTitle,Parag, Link ,Button} from "./ItemsElements";
import Multiple from './slider/Slick/Mullitslider'


const Itemstock = () => {
  return (
    <>
      <Container>
        <Boxone>
          <div>
          <SceTitle>Popular Product</SceTitle>
          <Parag>Checkout our product range avaliable at our store</Parag>
          </div>
          <Link to="/Shop">
          <Button>
         View More
        </Button>
          </Link>
        </Boxone>
       <Multiple />
      </Container>
    </>
  );
};

export default Itemstock;
