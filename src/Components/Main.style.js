import styled from "styled-components";

export const Main = styled.div`
  position: relative;

  display: flex;
  width: 60vw;
  height: 50vh;

  //justify-content: right;
  
  background-color: hsl(244, 38%, 16%);
  
  
  
  
`
export const Mainpicture = styled.img`
  
  position: relative;
  display: flex;
  margin:auto;
  text-align: right;
  src: "https://i.ibb.co/dcB6nWf/image-header-desktop.jpg";
  justify-content: right;
  max-width: 405px;
  max-height: 403px;
  height: 353px;
  opacity: 0.6;
  

`
export const PicLayer=styled.div`
    background-color:  hsla(277, 64%, 61%);
    position: relative;
    top: 0;
    left: 0;
    max-width: 405px;
    max-height: 403px;
    height: 353px;
`

export const Text=styled.h1`
    font-family: -apple-system;
  //align-items: center;
    text-align: left;
    font-size: 23px;
    color: hsl(0, 0%, 100%);
  //justify-content: right;
    
    font-weight: 600;
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 21px;
`
export const Text1=styled.a`
    font-family: -apple-system;
  //align-items: center;
    text-align: left;
    font-size: 23px;
    color: hsl(0, 0%, 100%);
  //justify-content: right;
    
    font-weight: 600;
    padding-left: 30px;
    padding-top: 80px;
    padding-right: 21px;
    `