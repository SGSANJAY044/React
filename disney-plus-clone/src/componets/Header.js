import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Container>
        <Logo src="/images/logo.svg"/>
        <Menu>
            <a>
                <img src='/images/home-icon.svg'></img>
                <span>Home</span>
            </a>
            <a>
                <img src='/images/search-icon.svg'></img>
                <span>search</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg'></img>
                <span>watchlist</span>
            </a>
            <a>
                <img src='/images/original-icon.svg'></img>
                <span>originals</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg'></img>
                <span>movies</span>
            </a>
            <a>
                <img src='/images/series-icon.svg'></img>
                <span>series</span>
            </a>
        </Menu>
        <Profile src="/images/Profile.jpg"/>
    </Container>
  )
}
const Container=styled.div`
background:#090b13;
top: 0;
left:0;
right: 0;
height:70px;
position:fixed;
width:100%;
padding: 0 32px;
justify-content:space-between;
align-items:center;
display:flex;
overflow-x: hidden;
`
const Profile=styled.img`
height:50px;
border-radius:50%;
padding:0 40px;
cursor: pointer;`
const Menu=styled.div`
display:flex;
align-items:center;
@media(max-width:800px){
    display:none;
}
    a{
        color:white;
        padding:0 10px;
        display: flex;
        align-items:center;
        cursor: pointer;
        img{
            min-width: 20px;
            width: 20px;
            height:20px;
            z-index: 0;
        }
        span{
            padding:13px 0;
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;
            &:after{

                content:"";
                height: 2px;
                background: white;
                position: absolute;
                right:0;
                left:0;
                bottom:6px;
                opacity:0;
                tranform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }`
const Logo=styled.img`
height:60px;
`

export default Header