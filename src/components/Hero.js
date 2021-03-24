import React from "react";
import tw, { styled } from "twin.macro";
import { StaticImage } from "gatsby-plugin-image";

const HeroContainer = tw.div`py-16 px-4 container mx-auto`;
const HeroContent = tw.div`grid grid-cols-12 gap-8 items-center`;
const HeroText = styled.div`
  ${tw`col-span-9`}
  h1 {
    ${tw`font-bold text-4xl max-w-xl text-gray-900`}
  }
  p {
    ${tw`text-gray-800 text-base leading-relaxed mt-8 font-semibold`}
  }
`;

const HeroImage = styled.div`col-span-3 `;
const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>
            Hi there{" "}
            <span role="img" aria-label="Hi">
              👋
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Parturient montes nascetur ridiculus mus mauris vitae ultricies leo
            integer.
          </p>
        </HeroText>
        <HeroImage>
          <StaticImage
            src="https://www.fillmurray.com/640/360"
            placeholder="blurred"
            alt="user profile"
            layout="fixed"
            height={200}
            width={200}
          />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
