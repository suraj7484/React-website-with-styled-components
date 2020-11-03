import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook , FaInstagram ,FaYoutube , FaTwitter , FaLinkedin} from 'react-icons/fa'
import {FooterContainer ,
    FooterWrap,
    FooterLinksContainer ,
    FooterLinkWarpper,
    FooterLinkItems ,
    FooterLinkTitle,
    FooterLink ,
    SocialMedia ,
    SocialMediaWrap , 
    SocialMediaLogo ,
    WebsiteRights ,
    SocialIcons ,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinkWarpper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How It Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investor</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact us</FooterLinkTitle>
                                <FooterLink to='/signin'>Contact</FooterLink>
                                <FooterLink to='/signin'>Support</FooterLink>
                                <FooterLink to='/signin'>Destination</FooterLink>
                                <FooterLink to='/signin'>Sponsorship</FooterLink>                            </FooterLinkItems>
                        </FooterLinkWarpper>
                        <FooterLinkWarpper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signin'>Submit Video</FooterLink>
                                <FooterLink to='/signin'>Ambassadors</FooterLink>
                                <FooterLink to='/signin'>Agency</FooterLink>
                                <FooterLink to='/signin'>Influencer</FooterLink>                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Youtube</FooterLink>
                                <FooterLink to='/signin'>Twitter</FooterLink>                            </FooterLinkItems>
                        </FooterLinkWarpper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialMediaLogo to = "/" onClick = {toggleHome}>
                                MOne
                            </SocialMediaLogo>
                            <WebsiteRights>
                                MOne © {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href = "" target = "_blank"
                                aria-label = "Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href = "" target = "_blank"
                                aria-label = "Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href = "" target = "_blank"
                                aria-label = "Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href = "" target = "_blank"
                                aria-label = "Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href = "" target = "_blank"
                                aria-label = "Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
