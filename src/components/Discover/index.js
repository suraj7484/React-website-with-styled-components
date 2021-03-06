import React from 'react'
import { Button } from '../ButtonElement'
import {
    DiscoverContainer,
    DiscoverWrapper,
    DiscoverRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img
} from './DiscoverElements'
import discover from '../../images/discover.svg'

const DiscoverSection = ({ lightBg,
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img,
    alt, 
    primary, 
    dark, 
    dark2 }) => {
    return (
        <>
            <DiscoverContainer lightBg={lightBg} id={id}>
                <DiscoverWrapper>
                    <DiscoverRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth = {true}
                                    duration = {500}
                                    spy = {true}
                                    offset = {-80}
                                    primary = {primary ? 1 : 0}
                                    dark = {dark ? 1 : 0}
                                    
                                    // dark2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={discover} alt={alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </DiscoverRow>
                </DiscoverWrapper>
            </DiscoverContainer>
        </>
    )
}

export default DiscoverSection
