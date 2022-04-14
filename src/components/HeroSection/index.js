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
          Hotger Represent Best HotDog and Burgers in Tehran
        </HeroH1>
        <HeroP>
          if you are a vegan, don't try us cause you you will no longer be !
        </HeroP>
        <HeroBtnWrapper>
          <Button to="starter" onMouseEnter={onHover} onMouseLeave={onHover}
          primary = "true"
          dark = "true"
          smooth={true} duration={500} spy={true} exact='true' offset={-80}
          >
            Order Now {hover ? <ArrowForward /> : <ArrowRight /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;