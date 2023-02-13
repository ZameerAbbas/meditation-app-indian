import React, { useState, useEffect } from "react";
import { Container } from "../About/AboutElements";
import Icon1 from "../../images/madir.jpg";
import Contacta from "../../components/Contact/Contacta";
import NavBar from "../../components/NavBar";

import {
  ContainerWrapper,
  Heading,
  Paragraph,
  Subheading,
} from "../Videos/VideosElement";
import Sidebar from "../../components/Sidebar/Sidebar";

import {
  MoreBlogContianer,
  BlogCardFelx,
  BlogCard,
  BlogIcon,
  BlogH2,
  BlogP,
  Button,
  Button1,
} from "./BlogElements";
import { Link } from "react-router-dom";

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <ContainerWrapper>
        <Heading>Our Blogs</Heading>
        <Subheading>
          Know more about our Param Dham throughtout our weekly blog
        </Subheading>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because made up of a single page, they just look like multiple
          pages because made up of a single page, they just look like multiple
          pages because
        </Paragraph>
        <Paragraph>
          The purpose of the Param kaivalya Dham sanstha Many modern websites
          are actually made up of a single page, they just look like multiple
          pages because
        </Paragraph>
      </ContainerWrapper>

      <MoreBlogContianer>
        <BlogCardFelx>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
          <BlogCard>
            <Link
              to="SingleBlog"
              style={{ color: "#25fcf4", textDecoration: "none" }}
            >
              <BlogIcon src={Icon1} />
              <BlogH2>
                Know the Worth of your birth for which you got human life?
              </BlogH2>
              <BlogP>
                Acharya Gurudev shri was bron on 2nd september 1985 in a village
                named siswal named after the holy pilgrimage site of lord shiva
                of
              </BlogP>
            </Link>
            <Button>Read More</Button>
          </BlogCard>
        </BlogCardFelx>

        <Button1>Load More Post</Button1>
      </MoreBlogContianer>

      <Contacta />
    </Container>
  );
};
