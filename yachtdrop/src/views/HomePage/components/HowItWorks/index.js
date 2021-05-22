import {
  HowItWorksContainer,
  HowItWorksWrapper,
  HowItWorksHeading,
  HowItWorksTitle,
  HowItWorksCard,
  HowItWorksImg,
  HowItWorksInfo,
  HowItWorksDesc,
} from './HowItWorksStyles';

const HowItWorks = ({ heading, data }) => {
  return (
    <HowItWorksContainer>
      <HowItWorksHeading>{heading}</HowItWorksHeading>
      <HowItWorksWrapper>
        {data.map((howitworks, index) => {
          return (
            <HowItWorksCard key={index}>
              <HowItWorksImg src={howitworks.img} alt={howitworks.alt} />
              <HowItWorksInfo>
                <HowItWorksTitle>{howitworks.name}</HowItWorksTitle>
                <HowItWorksDesc>{howitworks.desc}</HowItWorksDesc>
              </HowItWorksInfo>
            </HowItWorksCard>
          );
        })}
      </HowItWorksWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorks;