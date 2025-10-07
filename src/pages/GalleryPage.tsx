import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Camera, Play, Image, Calendar, Users, Star } from 'lucide-react';

const GalleryContainer = styled.div`
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? props.theme.colors.spiritual.saffron : props.theme.colors.gray[100]};
  color: ${props => props.isActive ? props.theme.colors.white : props.theme.colors.gray[700]};
  border: 2px solid ${props => props.isActive ? props.theme.colors.spiritual.red : 'transparent'};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};

  &:hover {
    background: ${props => props.theme.colors.spiritual.gold};
    color: ${props => props.theme.colors.white};
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const GalleryImage = styled.div<{ image: string }>`
  height: 250px;
  background: url('${props => props.image}') center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const OverlayIcon = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes['3xl']};
`;

const GalleryContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.white};
`;

const GalleryTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const GalleryDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const GalleryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.gray[500]};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const VideoSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const VideoCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const VideoThumbnail = styled.div<{ image: string }>`
  height: 200px;
  background: url('${props => props.image}') center/cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: scale(1.1);
  }
`;

const VideoContent = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const VideoTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const VideoDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const VideoDuration = styled.div`
  color: ${props => props.theme.colors.spiritual.saffron};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.sm};
`;

const StatsSection = styled.section`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['3xl']} 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const StatCard = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  opacity: 0.9;
`;

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: <Image size={16} /> },
    { id: 'festivals', label: 'Festivals', icon: <Star size={16} /> },
    { id: 'deity', label: 'Deity Shrungar', icon: <Star size={16} /> },
    { id: 'events', label: 'Community Events', icon: <Users size={16} /> },
    { id: 'volunteer', label: 'Volunteer Work', icon: <Users size={16} /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'festivals',
      title: 'Navratri Celebration 2024',
      description: 'Nine days of divine celebration with special pujas and cultural programs',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Oct 2024',
      type: 'image'
    },
    {
      id: 2,
      category: 'deity',
      title: 'Lord Hanuman Ji Shrungar',
      description: 'Beautiful decoration of the deity during special occasions',
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Dec 2024',
      type: 'image'
    },
    {
      id: 3,
      category: 'events',
      title: 'Community Bhandara',
      description: 'Devotees serving food during community feast',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Nov 2024',
      type: 'image'
    },
    {
      id: 4,
      category: 'volunteer',
      title: 'Temple Cleanup Drive',
      description: 'Volunteers working together to maintain temple premises',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Jan 2025',
      type: 'image'
    },
    {
      id: 5,
      category: 'festivals',
      title: 'Hanuman Jayanti 2024',
      description: 'Grand celebration of Lord Hanuman\'s birth anniversary',
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Apr 2024',
      type: 'image'
    },
    {
      id: 6,
      category: 'deity',
      title: 'Daily Aarti Ceremony',
      description: 'Devotees participating in evening aarti',
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Dec 2024',
      type: 'image'
    }
  ];

  const videoItems = [
    {
      id: 1,
      title: 'Sundarkand Path - Live Recording',
      description: 'Complete Sundarkand path performed at the temple',
      thumbnail: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2:30:45'
    },
    {
      id: 2,
      title: 'Navratri Mahotsav Highlights',
      description: 'Best moments from our nine-day Navratri celebration',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '15:30'
    },
    {
      id: 3,
      title: 'Temple History & Significance',
      description: 'Learn about the rich history of Khedapati Sarkar Mandir',
      thumbnail: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8:45'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <GalleryContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Photo & Video Gallery
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore beautiful moments from our temple, festivals, and community events
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <FilterTabs>
            {galleryCategories.map((category) => (
              <FilterTab
                key={category.id}
                isActive={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon}
                {category.label}
              </FilterTab>
            ))}
          </FilterTabs>

          <GalleryGrid>
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <GalleryImage image={item.image}>
                  <ImageOverlay>
                    <OverlayIcon>
                      {item.type === 'video' ? <Play size={32} /> : <Camera size={32} />}
                    </OverlayIcon>
                  </ImageOverlay>
                </GalleryImage>
                <GalleryContent>
                  <GalleryTitle>{item.title}</GalleryTitle>
                  <GalleryDescription>{item.description}</GalleryDescription>
                  <GalleryMeta>
                    <span><Calendar size={14} /> {item.date}</span>
                    <span>{item.type === 'video' ? 'Video' : 'Photo'}</span>
                  </GalleryMeta>
                </GalleryContent>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Container>
      </ContentSection>

      <VideoSection>
        <Container>
          <SectionTitle>Video Gallery</SectionTitle>
          <VideoGrid>
            {videoItems.map((video, index) => (
              <VideoCard
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <VideoThumbnail image={video.thumbnail}>
                  <PlayButton>
                    <Play size={24} />
                  </PlayButton>
                </VideoThumbnail>
                <VideoContent>
                  <VideoTitle>{video.title}</VideoTitle>
                  <VideoDescription>{video.description}</VideoDescription>
                  <VideoDuration>{video.duration}</VideoDuration>
                </VideoContent>
              </VideoCard>
            ))}
          </VideoGrid>
        </Container>
      </VideoSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Photos in Gallery</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Videos Available</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>12</StatNumber>
              <StatLabel>Festivals Covered</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Happy Devotees</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>
    </GalleryContainer>
  );
};

export default GalleryPage;