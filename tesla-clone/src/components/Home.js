import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      
        <Section 
        title="Model S"
        Img="model-s.jpg"
        dis="Order online for Touchless Delivery"
        lf="custom order"
        rf="Existing inventory"
        />
        <Section 
        title="Model 3"
        Img="model-3.jpg"
        dis="Order online for Touchless Delivery"
        lf="custom order"
        rf="Existing inventory"
        />
        <Section 
        title="Model X"
        Img="model-x.jpg"
        dis="Order online for Touchless Delivery"
        lf="custom order"
        rf="Existing inventory"
        />
        <Section 
        title="Model Y"
        Img="model-y.jpg"
        dis="Order online for Touchless Delivery"
        lf="custom order"
        rf="Existing inventory"
        />
        <Section 
        title="Lowst Cost Solar Panels in America"
        Img="solar-panel.jpg"
        dis="Money-back guarantee"
        lf="Order now"
        rf="Learn more"
        />
        <Section 
        title="Solar for New Roofs"
        Img="solar-roof.jpg"
        dis="Solar Roof costs Less Than New Roof Plus Solar Panels"
        lf="Order"
        rf="Learn more"
        />
        <Section 
        title="Accessories"
        Img="accessories.jpg"
        lf="Shop now"
        />
    </Container>
  )
}

export default Home

const Container=styled.div`
height: 100vh;`