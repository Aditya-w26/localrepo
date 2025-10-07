import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Bell, Clock, Users, Heart } from 'lucide-react';

const LiveDarshanContainer = styled.div`
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

const VideoSection = styled.div`
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const VideoContainer = styled.div`
  position: relative;
  background: #000;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 500px;
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
    background: url('https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover;
    opacity: 0.3;
  }
`;

const VideoIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['6xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

const VideoTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  position: relative;
  z-index: 1;
`;

const VideoSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  position: relative;
  z-index: 1;
`;

const VideoControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.lg};
  background: rgba(0, 0, 0, 0.8);
  color: ${props => props.theme.colors.white};
`;

const ControlButton = styled.button`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.lightGold};
    transform: translateY(-2px);
  }
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: #ff0000;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  text-align: center;
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const InfoIcon = styled.div`
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

const InfoTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ScheduleSection = styled.div`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['3xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const ScheduleTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ScheduleItem = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  border-left: 4px solid ${props => props.theme.colors.spiritual.gold};
`;

const ScheduleTime = styled.div`
  font-weight: 700;
  color: ${props => props.theme.colors.spiritual.saffron};
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ScheduleEvent = styled.div`
  color: ${props => props.theme.colors.gray[700]};
  font-weight: 600;
`;

const NotificationSection = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
`;

const NotificationTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const NotificationButton = styled.button`
  background: ${props => props.theme.colors.spiritual.red};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: translateY(-2px);
  }
`;

const LiveDarshanPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const liveSchedule = [
    { time: '5:30 AM', event: 'Mangala Aarti' },
    { time: '7:00 AM', event: 'Shringar Aarti' },
    { time: '12:00 PM', event: 'Bhog Aarti' },
    { time: '6:30 PM', event: 'Sandhya Aarti' },
    { time: '9:00 PM', event: 'Shayan Aarti' }
  ];

  const infoCards = [
    {
      icon: <Users size={24} />,
      title: 'Live Viewers',
      description: 'Join thousands of devotees watching live darshan from around the world'
    },
    {
      icon: <Heart size={24} />,
      title: 'Divine Blessings',
      description: 'Receive the divine blessings of Lord Hanuman Ji through live darshan'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Access',
      description: 'Access live darshan anytime, anywhere with our streaming service'
    }
  ];

  return (
    <LiveDarshanContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Live Darshan
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the divine presence of Lord Hanuman Ji through our live streaming service
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <VideoSection>
            <VideoContainer>
              <VideoPlaceholder>
                <VideoIcon>🕉️</VideoIcon>
                <VideoTitle className="text-devanagari">श्री क्षेत्रपति हनुमान जी</VideoTitle>
                <VideoSubtitle>Live Darshan from Khedapati Sarkar Mandir</VideoSubtitle>
              </VideoPlaceholder>
              <VideoControls>
                <LiveIndicator>
                  <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>
                  LIVE
                </LiveIndicator>
                <ControlButton onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? 'Pause' : 'Play'}
                </ControlButton>
                <ControlButton onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  {isMuted ? 'Unmute' : 'Mute'}
                </ControlButton>
              </VideoControls>
            </VideoContainer>
          </VideoSection>

          <InfoGrid>
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <InfoIcon>{card.icon}</InfoIcon>
                <InfoTitle>{card.title}</InfoTitle>
                <p>{card.description}</p>
              </InfoCard>
            ))}
          </InfoGrid>

          <ScheduleSection>
            <ScheduleTitle>Daily Live Schedule</ScheduleTitle>
            <ScheduleGrid>
              {liveSchedule.map((item, index) => (
                <ScheduleItem key={index}>
                  <ScheduleTime>{item.time}</ScheduleTime>
                  <ScheduleEvent>{item.event}</ScheduleEvent>
                </ScheduleItem>
              ))}
            </ScheduleGrid>
          </ScheduleSection>

          <NotificationSection>
            <NotificationTitle>
              <Bell size={24} />
              Get Notified for Special Events
            </NotificationTitle>
            <p style={{ marginBottom: '1.5rem' }}>
              Stay updated with notifications for special aartis, festivals, and important events
            </p>
            <NotificationButton>
              <Bell size={20} />
              Notify Me
            </NotificationButton>
          </NotificationSection>
        </Container>
      </ContentSection>
    </LiveDarshanContainer>
  );
};

export default LiveDarshanPage;