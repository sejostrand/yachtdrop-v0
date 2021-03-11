import React from 'react'
import styled from 'styled-components'
import Truck from '../../../img/truck.png'
/* import Time from '../../../img/time.jpg'
 */

const StyledHIWImg = styled.img`
    width: 45%;
    height: 45%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const HowItWorksImg = () => {
    return (
        <StyledHIWImg src={ Truck } />
    )
}

export default HowItWorksImg
