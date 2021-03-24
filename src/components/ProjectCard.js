import * as React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardContainer = tw.div`w-full bg-gray-100 border-2 border-gray-200 p-5 rounded-md shadow-lg tracking-wide transform transition hover:scale-110 hover:z-10 `;
const CardContent = tw.div`flex items-center`;
const CardBody = tw.div`flex flex-col ml-5`;
const CardTitle = tw(Link)`text-xl font-bold mb-2`;
const CardText = tw.p`text-gray-800 mt-2`;

const Card = ({ item }) => {
  const image = getImage(item.featuredImage);
  return (
    <CardContainer>
      <CardContent>
        <GatsbyImage image={image} alt={item.title} />
        <CardBody>
          <CardTitle to={`${item.type}/${item.slug}`}>{item.title}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
