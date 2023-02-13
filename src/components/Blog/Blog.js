import React from "react";

import Icon1 from "../../images/madir.jpg";



import {
  BlogContainer,
  Heading,
  BlogWrapper,
  BlogCardFelx,
  BlogCard,
  BlogH2,
  BlogIcon,
  BlogP,
  Button,
} from "./BlogElements";
const Blog = () => {
  return (
    <BlogContainer>
       <BlogWrapper>
       <Heading>Latest Blog</Heading>
   
        <BlogCardFelx>
      <BlogCard>
        <BlogIcon src={Icon1} />
        <BlogH2>
          Know the Worth of your birth for which you got human life?
        </BlogH2>
        <BlogP>
          Acharya Gurudev shri was bron on 2nd september 1985 in a village named
          siswal named after the holy pilgrimage site of lord shiva of
          
        </BlogP>
        <Button>Read More</Button>
      </BlogCard>
      <BlogCard>
        <BlogIcon src={Icon1} />
        <BlogH2>
          Know the Worth of your birth for which you got human life?
        </BlogH2>
        <BlogP>
          Acharya Gurudev shri was bron on 2nd september 1985 in a village named
          siswal named after the holy pilgrimage site of lord shiva of
          
        </BlogP>
        <Button>Read More</Button>
      </BlogCard>
      <BlogCard>
        <BlogIcon src={Icon1} />
        <BlogH2>
          Know the Worth of your birth for which you got human life?
        </BlogH2>
        <BlogP>
          Acharya Gurudev shri was bron on 2nd september 1985 in a village named
          siswal named after the holy pilgrimage site of lord shiva of
          
        </BlogP>
        <Button>Read More</Button>
      </BlogCard>
      </BlogCardFelx>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog;
