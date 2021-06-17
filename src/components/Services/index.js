import React from 'react';
import Icon1 from '../../images/gambar1.svg'
import Icon2 from '../../images/gambar2.svg'
import Icon3 from '../../images/gambar3.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesH2, 
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                {/* pertama */}
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                {/* kedua */}
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                {/* ketiga */}
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
