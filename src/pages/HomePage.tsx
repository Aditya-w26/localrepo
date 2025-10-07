import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Play, Clock, Calendar, Heart, Camera, Users, Bell } from 'lucide-react';

const HomeContainer = styled.div`
  margin-top: 80px;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const WelcomeMessage = styled(motion.h1)`
  font-size: ${props => props.theme.fontSizes['5xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.xl};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.lightGold};
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(245, 158, 11, 0.4);
  }
`;

const QuickLinksSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.gray[50]};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  color: ${props => props.theme.colors.spiritual.red};
`;

const QuickLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const QuickLinkCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const QuickLinkIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.spiritual.saffron};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const QuickLinkTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const QuickLinkDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const QuickLinkButton = styled(Link)`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.lightGold};
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.saffron} 0%, 
    ${props => props.theme.colors.spiritual.red} 100%);
  color: ${props => props.theme.colors.white};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
`;

const FeatureIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.gold};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const HomePage: React.FC = () => {
  const quickLinks = [
    {
      icon: <Clock size={32} />,
      title: 'Darshan Timings',
      description: 'View daily aarti and darshan schedules',
      link: '/timings',
      buttonText: 'View Timings'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Puja Booking',
      description: 'Book special pujas and seva services',
      link: '/puja-booking',
      buttonText: 'Book Now'
    },
    {
      icon: <Heart size={32} />,
      title: 'Donate Now',
      description: 'Support the temple with your generous donations',
      link: '/donation',
      buttonText: 'Donate'
    },
    {
      icon: <Camera size={32} />,
      title: 'Photo Gallery',
      description: 'Explore beautiful temple photos and events',
      link: '/gallery',
      buttonText: 'View Gallery'
    },
    {
      icon: <Play size={32} />,
      title: 'Live Darshan',
      description: 'Join us for live darshan and prayers',
      link: '/live-darshan',
      buttonText: 'Watch Live'
    },
    {
      icon: <Users size={32} />,
      title: 'Volunteer',
      description: 'Join our community of devoted volunteers',
      link: '/volunteer',
      buttonText: 'Join Us'
    }
  ];

  const features = [
    {
      icon: '🕉️',
      title: 'Sacred Traditions',
      description: 'Experience timeless Hindu traditions and rituals'
    },
    {
      icon: '🙏',
      title: 'Divine Blessings',
      description: 'Receive blessings from Lord Hanuman Ji'
    },
    {
      icon: '🌸',
      title: 'Community Spirit',
      description: 'Join a vibrant community of devotees'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <WelcomeMessage
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            ॐ नमः शिवाय
          </WelcomeMessage>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to the sacred abode of Khedapati Sarkar, where divinity meets devotion. 
            Join us in prayers, festivals, and timeless traditions.
          </Subtitle>
          <CTAButton
            as={Link}
            to="/live-darshan"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={24} />
            🛕 Join Live Darshan
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <QuickLinksSection>
        <SectionTitle>Quick Access</SectionTitle>
        <QuickLinksGrid>
          {quickLinks.map((link, index) => (
            <QuickLinkCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <QuickLinkIcon>{link.icon}</QuickLinkIcon>
              <QuickLinkTitle>{link.title}</QuickLinkTitle>
              <QuickLinkDescription>{link.description}</QuickLinkDescription>
              <QuickLinkButton to={link.link}>
                {link.buttonText}
              </QuickLinkButton>
            </QuickLinkCard>
          ))}
        </QuickLinksGrid>
      </QuickLinksSection>

      <FeaturesSection>
        <SectionTitle style={{ color: 'white', marginBottom: '3rem' }}>
          Why Choose Our Mandir?
        </SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default HomePage;