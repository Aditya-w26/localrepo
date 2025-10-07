import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star, Music } from 'lucide-react';

const EventsContainer = styled.div`
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

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const EventCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.lg};
  overflow: hidden;
  border: 3px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const EventImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.saffron} 0%, 
    ${props => props.theme.colors.spiritual.red} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes['4xl']};
  color: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('${props => props.image}') center/cover;
    opacity: 0.3;
  }
`;

const EventContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const EventTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.xl};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.spiritual.saffron};
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const EventTime = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const EventDescription = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const EventFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FeatureTag = styled.span`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 600;
`;

const EventButton = styled.button`
  background: ${props => props.theme.colors.spiritual.saffron};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.red};
    transform: translateY(-2px);
  }
`;

const SpecialBanner = styled(motion.div)`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  box-shadow: ${props => props.theme.shadows.xl};
`;

const BannerTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['3xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const BannerDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const BannerButton = styled.button`
  background: ${props => props.theme.colors.spiritual.red};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.lg};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: translateY(-2px);
  }
`;

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Navratri Mahotsav',
      date: '10 Oct 2025',
      time: '6:00 AM - 10:00 PM',
      description: 'Nine days of divine celebration with special pujas, bhajans, and cultural programs. Join us for the grand celebration of Goddess Durga.',
      features: ['Special Pujas', 'Cultural Programs', 'Prasad Distribution', 'Live Bhajans'],
      icon: '🎉',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Hanuman Jayanti',
      date: '14 April 2026',
      time: '5:30 AM - 9:00 PM',
      description: 'Celebrate the birth anniversary of Lord Hanuman with special aartis, Sundarkand path, and community feast.',
      features: ['Sundarkand Path', 'Special Aartis', 'Community Feast', 'Cultural Events'],
      icon: '🕉️',
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Akhand Ramayan Path',
      date: 'First Sunday of Every Month',
      time: '6:00 AM - 6:00 PM',
      description: 'Continuous recitation of Ramayan for 12 hours. Devotees can participate in this sacred reading.',
      features: ['Continuous Reading', 'Community Participation', 'Prasad', 'Blessings'],
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Bhandara Seva',
      date: 'Every Purnima',
      time: '12:00 PM - 2:00 PM',
      description: 'Community meal service where devotees can participate in serving food to all visitors.',
      features: ['Community Service', 'Free Meal', 'Volunteer Opportunity', 'Blessings'],
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <EventsContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Upcoming Events & Festivals
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in celebrating divine festivals and special occasions throughout the year
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <SpecialBanner
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BannerTitle>
              <Star size={32} />
              Navratri Mahotsav - 10 Oct 2025
              <Star size={32} />
            </BannerTitle>
            <BannerDescription>
              Join us for nine days of divine celebration with special pujas, cultural programs, 
              and community gatherings. Experience the divine energy of Goddess Durga.
            </BannerDescription>
            <BannerButton>
              <Music size={20} />
              Join Celebration
            </BannerButton>
          </SpecialBanner>

          <SectionTitle>Upcoming Events</SectionTitle>
          <EventsGrid>
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <EventImage image={event.image}>
                  <span style={{ position: 'relative', zIndex: 1 }}>{event.icon}</span>
                </EventImage>
                <EventContent>
                  <EventTitle>
                    {event.title}
                  </EventTitle>
                  <EventDate>
                    <Calendar size={16} />
                    {event.date}
                  </EventDate>
                  <EventTime>
                    <Clock size={16} />
                    {event.time}
                  </EventTime>
                  <EventDescription>
                    {event.description}
                  </EventDescription>
                  <EventFeatures>
                    {event.features.map((feature, idx) => (
                      <FeatureTag key={idx}>{feature}</FeatureTag>
                    ))}
                  </EventFeatures>
                  <EventButton>
                    Learn More
                  </EventButton>
                </EventContent>
              </EventCard>
            ))}
          </EventsGrid>
        </Container>
      </ContentSection>
    </EventsContainer>
  );
};

export default EventsPage;