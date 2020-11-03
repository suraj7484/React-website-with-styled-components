import React from 'react'
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'
import {FacilityContainer, 
    FacilityH1,
    FacilityWrapper,
    FacilityCard,
    FacilityIcon,
    FacilityH2,
    FacilityP
    } from './FacilityElements'

const Facility = () => {
    return (
        <>
            <FacilityContainer id = "facility">
                <FacilityH1>We Offer</FacilityH1>
                <FacilityWrapper>
                    <FacilityCard>
                        <FacilityIcon src={Icon1} />
                        <FacilityH2>Reduce expenses</FacilityH2>
                        <FacilityP>We help reduce your fees and increase your overall revenue.</FacilityP>
                    </FacilityCard>
                    <FacilityCard>
                        <FacilityIcon src={Icon2} />
                        <FacilityH2>Virtual Office</FacilityH2>
                        <FacilityP>You can access our platform online anywhere in the world.</FacilityP>
                    </FacilityCard>
                    <FacilityCard>
                        <FacilityIcon src={Icon3} />
                        <FacilityH2>Premium Benefits</FacilityH2>
                        <FacilityP>Unlock our special membership card that returns 5% cash back.</FacilityP>
                    </FacilityCard>
                </FacilityWrapper>
            </FacilityContainer>
        </>
    )
}

export default Facility
