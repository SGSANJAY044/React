import React from 'react'
import styled from 'styled-components'
function Choices() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png'></img>
            <video className='videoTag' autoPlay loop muted>
             <source src="/videos/disney.mp4" type='video/mp4' />
             </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png'></img>
             <video className='videoTag' autoPlay loop muted>
             <source src="/videos/marvel.mp4" type='video/mp4' />
             </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png'></img>
             <video className='videoTag' autoPlay loop muted>
             <source src="/videos/national-geographic.mp4" type='video/mp4' />
             </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png'></img>
             <video className='videoTag' autoPlay loop muted>
             <source src="/videos/pixar.mp4" type='video/mp4' />
             </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png'></img>
             <video className='videoTag' autoPlay loop muted>
             <source src="/videos/star-wars.mp4" type='video/mp4' />
             </video>
        </Wrap>
    </Container>
  )
}
const Container=styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0,1fr));
margin-top: 30px;
padding:30px 0 26px;
`
const Wrap=styled.div`
video{
    z-index: -1;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    right:0;
    left:0;
    bottom:0;
    top: 0;
    border-radius: 6px;
    object-fit: cover;
}
position: relative;
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249 ,249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
&:hover{
    video{
        opacity: 1;
    }
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border:3px solid  rgba(249, 249, 249, 0.8);
}
`
export default Choices