import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
function Section(data) {
  return ( 
    <Warp DImg={data.Img}>
        <HeadText>
            <Fade bottom >
                <h1>{data.title}</h1>
                <p>{data.dis}</p>
            </Fade>
        </HeadText>
        <Button>
            <Fade bottom>
                <ButtonGroup>
                    <Left>
                        {data.lf}
                    </Left>
                    {data.rf && 
                    <Right>
                        {data.rf}
                    </Right>}
                </ButtonGroup>
            </Fade>
            <Imagearrow src="/images/down-arrow.svg" />
        </Button>
    </Warp>
  )
}

export default Section
const Button=styled.div`
`
const Imagearrow=styled.img`
margin-left: 45%;
margin-top: 10px;
height: 40px;
animation: animateDown infinite 1.5s;`
const ButtonGroup=styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width: 648px){
    flex-direction: column;
}
`
const Left=styled.div`
background: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
opacity:0.8;
text-transform: uppercase;
font-size: 12px;
display:flex;
justify-content: center;
align-items: center;
margin:5px;
border-radius: 100px;
cursor:pointer;
`
const Right=styled(Left)`
background:white;
color:black;
opacity:0.6;`
const HeadText=styled.div`
padding-top:10vw;
text-align: center;
`
 const Warp=styled.div`
 width:100vw;
 height:100vh;
 background-size:cover;
 background-position: center;
 display:flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 background-repeat:no-repeat;
 background-image: ${data => `url("/images/${data.DImg}");`}
 `