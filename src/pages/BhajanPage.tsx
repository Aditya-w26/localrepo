import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Download, Heart, Share2, Clock, Music } from 'lucide-react';

const BhajanContainer = styled.div`
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

const DailyBhajanSection = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['3xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  text-align: center;
`;

const BhajanPlayer = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PlayerIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.spiritual.saffron};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const PlayerInfo = styled.div`
  flex: 1;
`;

const PlayerTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const PlayerSubtitle = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ControlButton = styled.button`
  background: ${props => props.theme.colors.spiritual.saffron};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.md};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.lg};
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;

  &:hover {
    background: ${props => props.theme.colors.spiritual.red};
    transform: scale(1.1);
  }

  &.play-pause {
    width: 60px;
    height: 60px;
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${props => props.theme.colors.gray[200]};
  border-radius: 3px;
  margin-bottom: ${props => props.theme.spacing.lg};
  position: relative;
  cursor: pointer;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: ${props => props.theme.colors.spiritual.gold};
  border-radius: 3px;
  transition: width 0.3s ease;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PlayerActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const ActionButton = styled.button`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.red};
    transform: translateY(-2px);
  }
`;

const BhajanList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const BhajanCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const BhajanHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const BhajanIcon = styled.div`
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

const BhajanInfo = styled.div`
  flex: 1;
`;

const BhajanTitle = styled.h4`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const BhajanDuration = styled.div`
  color: ${props => props.theme.colors.gray[500]};
  font-size: ${props => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const BhajanDescription = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
  font-style: italic;
`;

const BhajanActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayButton = styled.button`
  background: ${props => props.theme.colors.spiritual.saffron};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.red};
    transform: translateY(-2px);
  }
`;

const BhajanStats = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.gray[500]};
  font-size: ${props => props.theme.fontSizes.sm};
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

const BhajanPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes in seconds

  const progress = (currentTime / duration) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const bhajanList = [
    {
      id: 1,
      title: 'राम नाम की महिमा अपरंपार',
      duration: '4:32',
      description: 'A beautiful bhajan praising the glory of Lord Rama\'s name',
      plays: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'हनुमान चालीसा',
      duration: '8:45',
      description: 'Complete Hanuman Chalisa with traditional melody',
      plays: 2100,
      likes: 156
    },
    {
      id: 3,
      title: 'जय श्री राम',
      duration: '3:15',
      description: 'Devotional song in praise of Lord Rama',
      plays: 980,
      likes: 67
    },
    {
      id: 4,
      title: 'ओम नमः शिवाय',
      duration: '5:20',
      description: 'Sacred mantra dedicated to Lord Shiva',
      plays: 1750,
      likes: 134
    },
    {
      id: 5,
      title: 'गायत्री मंत्र',
      duration: '2:45',
      description: 'Ancient Vedic mantra for spiritual enlightenment',
      plays: 890,
      likes: 78
    },
    {
      id: 6,
      title: 'भजन गोविंदम',
      duration: '6:30',
      description: 'Classical devotional song in praise of Lord Krishna',
      plays: 1450,
      likes: 112
    }
  ];

  const stats = [
    {
      icon: <Music size={24} />,
      number: '50+',
      label: 'Bhajans Available'
    },
    {
      icon: <Play size={24} />,
      number: '25K+',
      label: 'Total Plays'
    },
    {
      icon: <Heart size={24} />,
      number: '1.2K+',
      label: 'Likes Received'
    },
    {
      icon: <Download size={24} />,
      number: '500+',
      label: 'Downloads'
    }
  ];

  return (
    <BhajanContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Daily Bhajan
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Immerse yourself in divine melodies and spiritual music
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <DailyBhajanSection>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>
              Today's Featured Bhajan
            </h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              "राम नाम की महिमा अपरंपार" - Experience the divine power of Lord Rama's name
            </p>
          </DailyBhajanSection>

          <BhajanPlayer>
            <PlayerHeader>
              <PlayerIcon>🎵</PlayerIcon>
              <PlayerInfo>
                <PlayerTitle className="text-devanagari">राम नाम की महिमा अपरंपार</PlayerTitle>
                <PlayerSubtitle>Traditional Devotional Song</PlayerSubtitle>
              </PlayerInfo>
            </PlayerHeader>

            <PlayerControls>
              <ControlButton onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </ControlButton>
              <ControlButton 
                className="play-pause"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </ControlButton>
              <ControlButton>
                <Download size={20} />
              </ControlButton>
            </PlayerControls>

            <ProgressBar>
              <Progress progress={progress} />
            </ProgressBar>

            <TimeDisplay>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </TimeDisplay>

            <PlayerActions>
              <ActionButton>
                <Heart size={16} />
                Like
              </ActionButton>
              <ActionButton>
                <Share2 size={16} />
                Share
              </ActionButton>
              <ActionButton>
                <Download size={16} />
                Download
              </ActionButton>
            </PlayerActions>
          </BhajanPlayer>

          <SectionTitle>Bhajan Collection</SectionTitle>
          <BhajanList>
            {bhajanList.map((bhajan, index) => (
              <BhajanCard
                key={bhajan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <BhajanHeader>
                  <BhajanIcon>🎵</BhajanIcon>
                  <BhajanInfo>
                    <BhajanTitle className="text-devanagari">{bhajan.title}</BhajanTitle>
                    <BhajanDuration>
                      <Clock size={14} />
                      {bhajan.duration}
                    </BhajanDuration>
                  </BhajanInfo>
                </BhajanHeader>
                <BhajanDescription>{bhajan.description}</BhajanDescription>
                <BhajanActions>
                  <PlayButton>
                    <Play size={16} />
                    Play
                  </PlayButton>
                  <BhajanStats>
                    <span><Play size={14} /> {bhajan.plays}</span>
                    <span><Heart size={14} /> {bhajan.likes}</span>
                  </BhajanStats>
                </BhajanActions>
              </BhajanCard>
            ))}
          </BhajanList>
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
    </BhajanContainer>
  );
};

export default BhajanPage;