import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
function Header() {
  const [sideNavstate,setSideNavState]=useState(false)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg'></img>
      </a>
      <Menu>
        <p><a href='#'>Model S</a></p>
        <p><a href='#'>Model 3</a></p>
        <p><a href='#'>Model X</a></p>
        <p><a href='#'>Model Y</a></p>
      </Menu>
      <RightMenu>
        <p><a href='#'>Shop</a></p>
        <p><a href='#'>Tesla Account</a></p>
       <Three onClick={() =>setSideNavState(true)}/>
      </RightMenu>
      <SideNav show={sideNavstate}>
        <Close onClick={() => setSideNavState(false)}/>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
      </SideNav>
    </Container>

  )
}

export default Header

const Container=styled.div`
display: flex;
position: fixed;
align-items: center;
padding: 0px 20px;
min-height: 60px;
top: 0;
left: 0;
right: 0;
z-index:1;
`
const Menu=styled.div`
display:flex;
justify-content: center;
flex: 1;
a{
  font-weight: 800;
  padding:0 10px;
  text-transform: uppercase;
}
@media(max-width:768px){
  display: none;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;
margin-left:auto;
a{
  display:flex;
  align-items:center;
  justify-content: center;
  font-weight: 800;
  text-transform: uppercase;
  margin-right:10px;
}`
const Three = styled(MenuIcon)`
cursor:pointer;`
const SideNav=styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background: white;
width:300px;
padding:20px;
display:flex;
flex-direction:column;
list-style: none;
transform: ${prop => prop.show ? 'translateX(0)' : 'translateX(100%)'};
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
  a{
    font-weight:600;
    font-family: Impact;
  }
}
`
const Close=styled(CloseIcon)`
margin-left:auto;
cursor:pointer;
`