import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Clock, Sun, Moon, Bell, Calendar } from 'lucide-react';

const TimingsContainer = styled.div`
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

const TimingsCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing['3xl']};
  border: 3px solid ${props => props.theme.colors.spiritual.gold};
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.gold} 0%, 
    ${props => props.theme.colors.spiritual.lightGold} 100%);
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

const CardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
`;

const CardSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  opacity: 0.9;
`;

const TimingsTable = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const TableHeader = styled.thead`
  background: ${props => props.theme.colors.gray[100]};
`;

const TableHeaderCell = styled.th`
  padding: ${props => props.theme.spacing.lg};
  text-align: left;
  font-weight: 600;
  color: ${props => props.theme.colors.spiritual.red};
  border-bottom: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.gray[50]};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: ${props => props.theme.spacing.lg};
  vertical-align: middle;
`;

const AartiName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.spiritual.saffron};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const AartiTime = styled.div`
  font-weight: 700;
  color: ${props => props.theme.colors.spiritual.red};
  font-size: ${props => props.theme.fontSizes.xl};
`;

const AartiDescription = styled.div`
  color: ${props => props.theme.colors.gray[600]};
  font-style: italic;
`;

const SpecialNote = styled(motion.div)`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.spiritual.saffron} 0%, 
    ${props => props.theme.colors.spiritual.red} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  margin-top: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
`;

const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing['3xl']};
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
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

const TimingsPage: React.FC = () => {
  const aartiTimings = [
    {
      name: 'Mangala Aarti',
      time: '5:30 AM',
      description: 'Morning prayers to start the day with divine blessings',
      icon: <Sun size={20} />
    },
    {
      name: 'Shringar Aarti',
      time: '7:00 AM',
      description: 'Beautification and adornment of the deity',
      icon: <Bell size={20} />
    },
    {
      name: 'Bhog Aarti',
      time: '12:00 PM',
      description: 'Midday offering of food to the deity',
      icon: <Sun size={20} />
    },
    {
      name: 'Sandhya Aarti',
      time: '6:30 PM',
      description: 'Evening prayers during sunset',
      icon: <Moon size={20} />
    },
    {
      name: 'Shayan Aarti',
      time: '9:00 PM',
      description: 'Night prayers before the deity rests',
      icon: <Moon size={20} />
    }
  ];

  const additionalInfo = [
    {
      icon: <Clock size={24} />,
      title: 'Temple Hours',
      description: 'The temple is open from 5:00 AM to 10:00 PM daily for darshan and prayers.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Special Days',
      description: 'Extended hours during festivals and special occasions. Check events page for updates.'
    },
    {
      icon: <Bell size={24} />,
      title: 'Aarti Participation',
      description: 'All devotees are welcome to participate in the aarti ceremonies. Please arrive 15 minutes early.'
    }
  ];

  return (
    <TimingsContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Darshan & Aarti Timings
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us for daily prayers and experience the divine vibrations of our sacred rituals
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <TimingsCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardHeader>
              <CardTitle>
                <Clock size={28} />
                Daily Aarti Schedule
              </CardTitle>
              <CardSubtitle>
                You are welcome to attend any Aarti and experience divine vibrations
              </CardSubtitle>
            </CardHeader>
            <TimingsTable>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHeaderCell>Aarti Name</TableHeaderCell>
                    <TableHeaderCell>Time</TableHeaderCell>
                    <TableHeaderCell>Description</TableHeaderCell>
                  </tr>
                </TableHeader>
                <tbody>
                  {aartiTimings.map((aarti, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <AartiName>
                          {aarti.icon}
                          {aarti.name}
                        </AartiName>
                      </TableCell>
                      <TableCell>
                        <AartiTime>{aarti.time}</AartiTime>
                      </TableCell>
                      <TableCell>
                        <AartiDescription>{aarti.description}</AartiDescription>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TimingsTable>
          </TimingsCard>

          <SpecialNote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            🙏 Please note: Timings may vary during special festivals and occasions. 
            We recommend calling ahead or checking our events page for any changes.
          </SpecialNote>

          <SectionTitle>Additional Information</SectionTitle>
          <AdditionalInfo>
            {additionalInfo.map((info, index) => (
              <InfoCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoTitle>{info.title}</InfoTitle>
                <p>{info.description}</p>
              </InfoCard>
            ))}
          </AdditionalInfo>
        </Container>
      </ContentSection>
    </TimingsContainer>
  );
};

export default TimingsPage;