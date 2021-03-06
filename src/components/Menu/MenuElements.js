import styled from 'styled-components';

export const MenuContainer = styled.div`
  max-height: 12500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #010606;
  color: #000;

  @media screen and (max-width: 768px) {
    height: 5800px;
  }

  @media screen and (max-width: 480px) {
    height: 12500px;
  }
`;

export const MenuWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;

  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const MenuCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const MenuIcon = styled.img`
  height: 160px;
  width: 256px;
  margin-bottom: 10px;
`;

export const MenuH1 = styled.h1`
  font-size: 3.5rem;
  color: #FFD200;
  margin-bottom: 20px;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MenuH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const MenuP = styled.p`
  font-size: 1.05rem;
  text-align: center;
`;