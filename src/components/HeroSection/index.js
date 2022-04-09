import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

      </HeroBg>
      <HeroContent>
        <HeroH1>
          Burzza Represents Best Burgers and Pizzas
        </HeroH1>
        <HeroP>
          if you are a vegan, don't try us cause you you will no longer be !
        </HeroP>
        <HeroBtnWrapper>
          <Button to="starter" onMouseEnter={onHover} onMouseLeave={onHover}
          primary = "true"
          dark = "true"
          >
            Order Now {hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;