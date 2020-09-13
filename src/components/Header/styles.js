import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6vw;
  height: 80px;
  /* background: white; */
  width: 100%;
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 60%;
  }
  
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    font-size: 21px;
    li {
      margin-left: 25px;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: transparent;
    height: 40px;
    width: 60px;
    margin-left: 30px;
    border-radius: 30% 30% 30% 30%; 
    div {
      margin-bottom: 8px;
      width: 30px;
      height: 5px;
      background: white;
    }
  }
`;