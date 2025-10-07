import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { History, Heart, Users, Star } from 'lucide-react';

const AboutContainer = styled.div`
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

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  color: ${props => props.theme.colors.spiritual.red};
  font-size: ${props => props.theme.fontSizes['4xl']};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing['4xl']};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};
  }
`;

const TextContent = styled.div`
  h3 {
    color: ${props => props.theme.colors.spiritual.gold};
    margin-bottom: ${props => props.theme.spacing.lg};
    font-size: ${props => props.theme.fontSizes['2xl']};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.lg};
    line-height: 1.8;
    color: ${props => props.theme.colors.gray[700]};
  }

  .devanagari {
    font-family: ${props => props.theme.fonts.devanagari};
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.spiritual.saffron};
    font-weight: 600;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.xl};

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const DeitySection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const DeityCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['3xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const DeityIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['6xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const DeityTitle = styled.h2`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.fontSizes['3xl']};
`;

const DeityDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.8;
  color: ${props => props.theme.colors.gray[700]};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing['3xl']};
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.spiritual.gold};
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <History size={24} />,
      title: 'Rich History',
      description: 'Centuries of spiritual tradition and divine presence'
    },
    {
      icon: <Heart size={24} />,
      title: 'Divine Blessings',
      description: 'Receive the grace and blessings of Lord Hanuman Ji'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Devotion',
      description: 'Join thousands of devotees in prayer and service'
    },
    {
      icon: <Star size={24} />,
      title: 'Sacred Rituals',
      description: 'Experience authentic Hindu traditions and ceremonies'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            About Khedapati Sarkar Mandir
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the divine legacy and spiritual significance of our sacred temple
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContentGrid>
            <TextContent>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Sacred History
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                The Khedapati Sarkar Mandir stands as a beacon of faith and devotion in Madhya Pradesh. 
                This sacred shrine has been a center of spiritual energy for generations, drawing devotees 
                from far and wide to experience the divine presence of Lord Hanuman Ji.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Founded with the vision of spreading the teachings of devotion, service, and spiritual 
                enlightenment, our temple has become a cornerstone of the local community and a 
                destination for pilgrims seeking divine blessings.
              </motion.p>
            </TextContent>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Khedapati Sarkar Mandir Temple" 
                />
              </ImageContainer>
            </motion.div>
          </ContentGrid>

          <ContentGrid>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImageContainer>
                <img 
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Lord Hanuman Ji" 
                />
              </ImageContainer>
            </motion.div>
            <TextContent>
              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Lord Hanuman Ji
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="devanagari"
              >
                "श्री क्षेत्रपति हनुमान जी की जय"
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                This sacred shrine is dedicated to Shri Khedapati Hanuman Ji, revered across Madhya Pradesh 
                and beyond for his divine blessings and protective grace. Lord Hanuman, the embodiment of 
                devotion, strength, and selfless service, watches over our temple and all who seek his divine presence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Devotees come here to seek his blessings for courage, strength, and protection. The temple 
                resonates with the powerful energy of Lord Hanuman, offering solace and spiritual guidance 
                to all who visit with pure hearts and sincere devotion.
              </motion.p>
            </TextContent>
          </ContentGrid>
        </Container>
      </ContentSection>

      <DeitySection>
        <Container>
          <DeityCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DeityIcon>🕉️</DeityIcon>
            <DeityTitle className="text-devanagari">
              श्री क्षेत्रपति हनुमान जी
            </DeityTitle>
            <DeityDescription>
              Lord Hanuman Ji, the eternal devotee of Lord Rama, is worshipped here as Khedapati Sarkar. 
              His divine presence brings peace, protection, and spiritual strength to all devotees. 
              The temple serves as a sacred space where the divine energy of Lord Hanuman manifests 
              through daily prayers, rituals, and the collective devotion of thousands of worshippers.
            </DeityDescription>
          </DeityCard>
        </Container>
      </DeitySection>

      <ContentSection>
        <Container>
          <SectionTitle>Why Our Mandir is Special</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <p>{feature.description}</p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </ContentSection>
    </AboutContainer>
  );
};

export default AboutPage;