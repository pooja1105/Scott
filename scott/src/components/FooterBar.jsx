import React from 'react'
import styled from 'styled-components'

const BottomDiv = styled.div`


height: 70px;
background: #002E5B;
width: 100%;`;
const BottomText = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
text-align: center;
padding: 30px 0;
`;
const FooterBar = () => {
  return (
       <BottomDiv> 
         <BottomText>©2021–2022 All Rights Reserved. XYZ® is a registered trademark of The ABCD Group. Cookie Preferences, Privacy, and Terms.
         </BottomText>
       </BottomDiv>
  )
}

export default FooterBar