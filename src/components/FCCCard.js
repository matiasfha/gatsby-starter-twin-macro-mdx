import * as React from "react";
import { Link } from "gatsby";
import tw, { styled } from "twin.macro";
import {
  CardContainer,
  CardContent,
  CardBody,
  CardTitle,
  CardText,
  CardDate,
} from "./PostCard";

const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardContent>
        <img
          src={item.image.attrs.url}
          placeholder="blurred"
          height={200}
          width={200}
        />
        <CardBody>
          <CardTitle as="a" href={item.link}>
            {item.title}
          </CardTitle>
          <CardDate>Published ${item.isoDate}</CardDate>
          <CardText>{item.contentSnippet}</CardText>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
