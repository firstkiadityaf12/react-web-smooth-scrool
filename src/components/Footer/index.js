import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems> 
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems> 
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>     
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>CimoBank</SocialLogo>
                        <WebsiteRights>CimoBank © {new Date().getFullYear()}All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/adityaalmira" target="_blank" aria-label="facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/firstkiadityaf" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/jkt48" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/A_ZeeJKT48" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin/firstkiaditya" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
