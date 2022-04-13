import React from 'react';
import Icon0 from '../../images/eating.svg';
import Icon1 from '../../images/img1.jpg';
import Icon2 from '../../images/img2.jpg';
import Icon3 from '../../images/img3.jpg';
import Icon4 from '../../images/img4.jpg';
import Icon5 from '../../images/img5.jpg';
import Icon6 from '../../images/img6.jpg';
import Icon7 from '../../images/img7.jpg';
import Icon8 from '../../images/img8.jpg';
import Icon9 from '../../images/img9.jpg';
import Icon10 from '../../images/img10.jpg';
import Icon11 from '../../images/img11.jpg';
import Icon12 from '../../images/img12.jpg';
import Icon13 from '../../images/img13.jpg';
import Icon14 from '../../images/img14.jpg';
import Icon15 from '../../images/img15.jpg';
import Icon16 from '../../images/img16.jpg';
import Icon17 from '../../images/img17.jpg';
import Icon18 from '../../images/img18.jpg';

import {MenuContainer, MenuH1, MenuWrapper, MenuCard, MenuIcon, MenuH2, MenuP} from './MenuElements';

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
          <MenuH2> Cheese Fries</MenuH2>
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


      <MenuH1> HotDogs </MenuH1>
      <MenuWrapper>
      <MenuCard>
          <MenuIcon src={Icon7}/>
          <MenuH2> The Classic HotDog </MenuH2>
          <MenuP> HotDog with Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon8}/>
          <MenuH2> Cheesy HotDog </MenuH2>
          <MenuP> HotDog with Cheese and Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon9}/>
          <MenuH2> White HotDog </MenuH2>
          <MenuP> HotDog with Mushroom Sauce </MenuP>
        </MenuCard>
      </MenuWrapper>


      <MenuH1> Burgers </MenuH1>
        <MenuWrapper>
        <MenuCard>
          <MenuIcon src={Icon10}/>
          <MenuH2> Normal Burger </MenuH2>
          <MenuP> 200gr Burger with Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon11}/>
          <MenuH2> Chili Burger </MenuH2>
          <MenuP> 200gr Burger with HotSauce </MenuP>
        </MenuCard>
        <MenuCard>
        <MenuIcon src={Icon12}/>
          <MenuH2> Cheese Burger </MenuH2>
          <MenuP> 200gr Burger with Cheese </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon13}/>
          <MenuH2> Mushroom Burger </MenuH2>
          <MenuP> 200gr Burger with Mushroom </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon14}/>
          <MenuH2> Special Burger </MenuH2>
          <MenuP> 250gr Burger with Sauce </MenuP>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon15}/>
          <MenuH2> Chicken Fillet Burger </MenuH2>
          <MenuP> 250gr Burger with Chicken </MenuP>
        </MenuCard>
      </MenuWrapper>


      <MenuH1> Drinks </MenuH1>
      <MenuWrapper>
      <MenuCard>
          <MenuIcon src={Icon16}/>
          <MenuH2> Pepsi </MenuH2>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon17}/>
          <MenuH2> Sprite </MenuH2>
        </MenuCard>
        <MenuCard>
          <MenuIcon src={Icon18}/>
          <MenuH2> Fanta </MenuH2>
        </MenuCard>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Menu