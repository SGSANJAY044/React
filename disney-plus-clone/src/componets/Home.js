import React from 'react'
import styled from 'styled-components'
import Scrollbar from './Scrollbar'
import Choices from './Choices'
function Home() {
  return (
    <Container>
        <Scrollbar />
        <Choices />
    </Container>
  )
}
export default Home
const Container=styled.main`
min-height: calc(100vh - 70px);
padding: 0px calc(3.5vw + 5px);
top: 70px;
position: relative;
overflow-x: hidden;
&:before{
    background: url("/images/home-background.png") center center / cover
    no-repeat;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index:-1;
}`