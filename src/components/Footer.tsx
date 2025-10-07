import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, Mail } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.red} 0%, 
    ${props => props.theme.colors.spiritual.saffron} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['4xl']} 0 ${props => props.theme.spacing.xl};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.spiritual.gold};
    margin-bottom: ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.fontSizes.xl};
  }

  p, li {
    margin-bottom: ${props => props.theme.spacing.sm};
    line-height: 1.6;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.spiritual.gold};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.gold};
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: ${props => props.theme.spacing.xl};
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  box-shadow: ${props => props.theme.shadows.xl};
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
  }
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>🕉️ खेड़ापति सरकार मंदिर</h3>
            <p className="text-devanagari">
              "ॐ नमः शिवाय। Welcome to the sacred abode of Khedapati Sarkar, 
              where divinity meets devotion. Join us in prayers, festivals, 
              and timeless traditions."
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <Youtube size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About the Mandir</Link></li>
              <li><Link to="/timings">Darshan Timings</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><Link to="/live-darshan">Live Darshan</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/prayer-wall">Prayer Wall</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Seva & Services</h3>
            <ul>
              <li><Link to="/donation">Donation</Link></li>
              <li><Link to="/puja-booking">Puja Booking</Link></li>
              <li><Link to="/bhajan">Daily Bhajan</Link></li>
              <li>Annadan Seva</li>
              <li>Prasad Seva</li>
              <li>Deepdan</li>
              <li>Shringar Seva</li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contact Information</h3>
            <ContactInfo>
              <MapPin size={16} />
              <span>Madhya Pradesh, India</span>
            </ContactInfo>
            <ContactInfo>
              <Phone size={16} />
              <span>+91 XXXXX XXXXX</span>
            </ContactInfo>
            <ContactInfo>
              <Mail size={16} />
              <span>info@khedapatisarkar.com</span>
            </ContactInfo>
            <ContactInfo>
              <Clock size={16} />
              <span>5:30 AM - 9:00 PM</span>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>&copy; 2025 Khedapati Sarkar Mandir. All rights reserved.</p>
          <p>
            <Link to="/privacy">Privacy Policy</Link> | 
            <Link to="/terms"> Terms & Conditions</Link> | 
            <Link to="/donation-terms">Donation Terms</Link>
          </p>
        </FooterBottom>
      </FooterContainer>

      <WhatsAppButton href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
        📲
      </WhatsAppButton>
    </>
  );
};

export default Footer;