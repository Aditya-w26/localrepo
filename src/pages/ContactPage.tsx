import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Navigation } from 'lucide-react';

const ContactContainer = styled.div`
  margin-top: 80px;
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.saffron} 0%, 
    ${props => props.theme.colors.spiritual.red} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['4xl']} 0;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ContentSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
`;

const InfoTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.spiritual.saffron};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.lg};
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const InfoValue = styled.div`
  color: ${props => props.theme.colors.gray[700]};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const MapContainer = styled.div`
  background: ${props => props.theme.colors.gray[100]};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const MapPlaceholder = styled.div`
  height: 300px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.saffron} 0%, 
    ${props => props.theme.colors.spiritual.red} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover;
    opacity: 0.3;
  }
`;

const MapIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  position: relative;
  z-index: 1;
`;

const MapText = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const MapTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const MapAddress = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  opacity: 0.9;
`;

const ContactForm = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const FormTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.gray[700]};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.base};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.base};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.spiritual.red};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.lg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: translateY(-2px);
  }
`;

const WhatsAppButton = styled.a`
  background: #25D366;
  color: white;
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.lg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: ${props => props.theme.spacing.lg};

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }
`;

const TimingsSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const TimingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const TimingCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const TimingIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.spiritual.saffron};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const TimingTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      label: 'Address',
      value: 'Khedapati Sarkar Mandir, Madhya Pradesh, India'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 XXXXX XXXXX'
    },
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'info@khedapatisarkar.com'
    },
    {
      icon: <Clock size={24} />,
      label: 'Temple Hours',
      value: '5:30 AM - 9:00 PM (Daily)'
    }
  ];

  const timings = [
    {
      icon: <Clock size={24} />,
      title: 'Morning Darshan',
      time: '5:30 AM - 12:00 PM'
    },
    {
      icon: <Clock size={24} />,
      title: 'Afternoon Darshan',
      time: '12:00 PM - 6:00 PM'
    },
    {
      icon: <Clock size={24} />,
      title: 'Evening Darshan',
      time: '6:00 PM - 9:00 PM'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Office Hours',
      time: '9:00 AM - 5:00 PM'
    }
  ];

  return (
    <ContactContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Contact Us
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us for any queries, bookings, or spiritual guidance
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContactGrid>
            <div>
              <ContactInfo>
                <InfoTitle>Contact Information</InfoTitle>
                {contactInfo.map((info, index) => (
                  <InfoItem key={index}>
                    <InfoIcon>{info.icon}</InfoIcon>
                    <InfoContent>
                      <InfoLabel>{info.label}</InfoLabel>
                      <InfoValue>{info.value}</InfoValue>
                    </InfoContent>
                  </InfoItem>
                ))}
              </ContactInfo>

              <MapContainer>
                <MapPlaceholder>
                  <MapIcon>🗺️</MapIcon>
                  <MapText>
                    <MapTitle>Find Us</MapTitle>
                    <MapAddress>Khedapati Sarkar Mandir<br />Madhya Pradesh, India</MapAddress>
                  </MapText>
                </MapPlaceholder>
              </MapContainer>
            </div>

            <ContactForm>
              <FormTitle>Send us a Message</FormTitle>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter message subject"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your message..."
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  <Send size={20} />
                  Send Message
                </SubmitButton>
              </form>

              <WhatsAppButton href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </WhatsAppButton>
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContentSection>

      <TimingsSection>
        <Container>
          <TimingsGrid>
            {timings.map((timing, index) => (
              <TimingCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <TimingIcon>{timing.icon}</TimingIcon>
                <TimingTitle>{timing.title}</TimingTitle>
                <p>{timing.time}</p>
              </TimingCard>
            ))}
          </TimingsGrid>
        </Container>
      </TimingsSection>
    </ContactContainer>
  );
};

export default ContactPage;