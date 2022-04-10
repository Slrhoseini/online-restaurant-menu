import React from 'react';
import Icon0 from '../../images/eating.svg'
import Icon1 from '../../images/img1.jpg'
import Icon2 from '../../images/img2.jpg'
import Icon3 from '../../images/img3.jpg'
import Icon4 from '../../images/img4.jpg'
import Icon5 from '../../images/img5.jpg'
import Icon6 from '../../images/img6.jpg'

import {MenuContainer, MenuH1, MenuH12, MenuWrapper, MenuCard, MenuIcon, MenuH2, MenuP} from './MenuElements';

const Menu = () => {
  return (
    <MenuContainer id="menus">
      <MenuH1> Starter </MenuH1>
      <MenuWrapper>
      <MenuCard>
          <MenuIcon src={Icon1}/>
          <MenuH2> New York Fries </MenuH2>
          <MenuP> Normal Fries </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon2}/>
          <MenuH2> Yellow Fries</MenuH2>
          <MenuP> Fries with Cheese </MenuP>
        </MenuCard>
        <MenuCard>
        <MenuIcon src={Icon3}/>
          <MenuH2> White Fries </MenuH2>
          <MenuP> Fries with Mushroom Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon4}/>
          <MenuH2> Chili Fries </MenuH2>
          <MenuP> Fries with Hot Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon5}/>
          <MenuH2> Caesar Salad </MenuH2>
          <MenuP> Normal Caesar Salad </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon6}/>
          <MenuH2> Chicken Caesar Salad </MenuH2>
          <MenuP> Caesar Salad with Fried Chicken </MenuP>
        </MenuCard>
      </MenuWrapper>
    </MenuContainer>

  )
}

export default Menu