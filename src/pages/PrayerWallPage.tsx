import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, Send, Star, Flame, Users, Clock } from 'lucide-react';

const PrayerWallContainer = styled.div`
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

const PrayerForm = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const FormTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  font-size: ${props => props.theme.fontSizes['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
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

const VirtualDiyaSection = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const DiyaTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const DiyaButton = styled.button<{ isLit: boolean }>`
  background: ${props => props.isLit ? props.theme.colors.spiritual.red : props.theme.colors.gray[600]};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: translateY(-2px);
  }
`;

const PrayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const PrayerCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
  position: relative;
`;

const PrayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PrayerIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.spiritual.saffron};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const PrayerInfo = styled.div`
  flex: 1;
`;

const PrayerName = styled.h4`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const PrayerTime = styled.div`
  color: ${props => props.theme.colors.gray[500]};
  font-size: ${props => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const PrayerText = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
  font-style: italic;
`;

const PrayerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PrayerLikes = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.spiritual.saffron};
  font-weight: 600;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.spiritual.saffron};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.lg};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.spiritual.red};
    transform: scale(1.2);
  }
`;

const StatsSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const StatCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const StatIcon = styled.div`
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

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.gray[700]};
  font-weight: 600;
`;

const PrayerWallPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    prayer: ''
  });
  const [isDiyaLit, setIsDiyaLit] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle prayer submission
    console.log('Prayer submitted:', formData);
    setFormData({ name: '', prayer: '' });
  };

  const handleDiyaClick = () => {
    setIsDiyaLit(!isDiyaLit);
  };

  const samplePrayers = [
    {
      id: 1,
      name: 'Priya Sharma',
      prayer: 'May Lord Hanuman Ji bless my family with good health and happiness. Jai Hanuman!',
      time: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      prayer: 'Please bless my daughter with success in her exams. I have complete faith in your divine power.',
      time: '5 hours ago',
      likes: 8
    },
    {
      id: 3,
      name: 'Anita Devi',
      prayer: 'Thank you for all the blessings. May peace and prosperity be with all devotees.',
      time: '1 day ago',
      likes: 15
    },
    {
      id: 4,
      name: 'Vikram Singh',
      prayer: 'Please help me overcome the challenges in my life. I surrender to your divine will.',
      time: '2 days ago',
      likes: 6
    },
    {
      id: 5,
      name: 'Sunita Patel',
      prayer: 'May the temple continue to be a source of spiritual guidance for all devotees.',
      time: '3 days ago',
      likes: 20
    },
    {
      id: 6,
      name: 'Amit Jain',
      prayer: 'Please bless my business and help me serve the community better.',
      time: '1 week ago',
      likes: 9
    }
  ];

  const stats = [
    {
      icon: <Heart size={24} />,
      number: '1,250+',
      label: 'Prayers Submitted'
    },
    {
      icon: <Users size={24} />,
      number: '500+',
      label: 'Devotees Participated'
    },
    {
      icon: <Flame size={24} />,
      number: '2,500+',
      label: 'Virtual Diyas Lit'
    },
    {
      icon: <Star size={24} />,
      number: '98%',
      label: 'Prayers Answered'
    }
  ];

  return (
    <PrayerWallContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Prayer Wall
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Share your prayers and wishes with the divine community
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <PrayerForm>
            <FormTitle>
              <Heart size={24} />
              Submit Your Prayer
            </FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="prayer">Your Prayer/Wish *</Label>
                <TextArea
                  id="prayer"
                  name="prayer"
                  value={formData.prayer}
                  onChange={handleInputChange}
                  required
                  placeholder="Share your prayer, wish, or gratitude..."
                />
              </FormGroup>

              <SubmitButton type="submit">
                <Send size={20} />
                Submit Prayer
              </SubmitButton>
            </form>
          </PrayerForm>

          <VirtualDiyaSection>
            <DiyaTitle>
              <Flame size={24} />
              Light a Virtual Diya
            </DiyaTitle>
            <p style={{ marginBottom: '1.5rem' }}>
              Light a virtual diya and send your prayers to Lord Hanuman Ji
            </p>
            <DiyaButton isLit={isDiyaLit} onClick={handleDiyaClick}>
              {isDiyaLit ? <Flame size={20} /> : '🪔'}
              {isDiyaLit ? 'Diya is Lit' : 'Light Diya'}
            </DiyaButton>
          </VirtualDiyaSection>

          <PrayersGrid>
            {samplePrayers.map((prayer, index) => (
              <PrayerCard
                key={prayer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <PrayerHeader>
                  <PrayerIcon>🙏</PrayerIcon>
                  <PrayerInfo>
                    <PrayerName>{prayer.name}</PrayerName>
                    <PrayerTime>
                      <Clock size={14} />
                      {prayer.time}
                    </PrayerTime>
                  </PrayerInfo>
                </PrayerHeader>
                <PrayerText>"{prayer.prayer}"</PrayerText>
                <PrayerActions>
                  <PrayerLikes>
                    <LikeButton>
                      <Heart size={16} />
                    </LikeButton>
                    {prayer.likes} likes
                  </PrayerLikes>
                </PrayerActions>
              </PrayerCard>
            ))}
          </PrayersGrid>
        </Container>
      </ContentSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <StatIcon>{stat.icon}</StatIcon>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>
    </PrayerWallContainer>
  );
};

export default PrayerWallPage;