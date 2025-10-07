import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, Star, Bell } from 'lucide-react';

const BookingContainer = styled.div`
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

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SevaOptions = styled.div`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.xl};
`;

const SevaTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const SevaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.lg};
`;

const SevaCard = styled(motion.div)<{ isSelected: boolean }>`
  background: ${props => props.isSelected ? props.theme.colors.spiritual.gold : props.theme.colors.white};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.gray[700]};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  border: 2px solid ${props => props.isSelected ? props.theme.colors.spiritual.red : props.theme.colors.gray[300]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const SevaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SevaIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['2xl']};
`;

const SevaName = styled.h4`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const SevaPrice = styled.div`
  font-weight: 700;
  color: ${props => props.theme.colors.spiritual.saffron};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const SevaDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  opacity: 0.8;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SevaFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
`;

const FeatureTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: inherit;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;
`;

const BookingForm = styled.div`
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

const Select = styled.select`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.base};
  background: ${props => props.theme.colors.white};
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
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const BookingButton = styled.button`
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

const InfoSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
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

const PujaBookingPage: React.FC = () => {
  const [selectedSeva, setSelectedSeva] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const sevaOptions = [
    {
      id: 'sundarkand',
      name: 'Sundarkand Path',
      price: '₹500',
      description: 'Complete recitation of Sundarkand for divine blessings',
      icon: '📚',
      features: ['Complete Path', 'Prasad', 'Blessings', 'Certificate']
    },
    {
      id: 'eprasad',
      name: 'E-Prasad Order',
      price: '₹200',
      description: 'Order sacred prasad to be delivered to your home',
      icon: '🎁',
      features: ['Home Delivery', 'Sacred Prasad', 'Blessings', 'Tracking']
    },
    {
      id: 'shringar',
      name: 'Shringar Seva',
      price: '₹1000',
      description: 'Beautiful decoration of the deity with flowers and ornaments',
      icon: '🌸',
      features: ['Deity Decoration', 'Flowers', 'Ornaments', 'Photos']
    },
    {
      id: 'mahaprasad',
      name: 'Mahaprasadi Distribution',
      price: '₹300',
      description: 'Distribution of sacred mahaprasad to devotees',
      icon: '🍽️',
      features: ['Sacred Food', 'Community Service', 'Blessings', 'Satisfaction']
    },
    {
      id: 'akhand',
      name: 'Akhand Ramayan Ji Path',
      price: '₹2000',
      description: 'Continuous 24-hour recitation of Ramayan',
      icon: '🕉️',
      features: ['24-Hour Path', 'Community Participation', 'Blessings', 'Certificate']
    }
  ];

  const timeSlots = [
    '6:00 AM - 7:00 AM',
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM'
  ];

  const infoCards = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Easy Booking',
      description: 'Simple online booking process with instant confirmation'
    },
    {
      icon: <Bell size={24} />,
      title: 'Reminder Service',
      description: 'Get SMS and email reminders before your booked seva'
    },
    {
      icon: <Star size={24} />,
      title: 'Divine Blessings',
      description: 'Receive the blessings of Lord Hanuman Ji through your seva'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking submitted:', { selectedSeva, formData });
  };

  return (
    <BookingContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Puja Booking
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book your seva and receive divine blessings from Lord Hanuman Ji
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <BookingGrid>
            <SevaOptions>
              <SevaTitle>Choose Your Seva</SevaTitle>
              <SevaGrid>
                {sevaOptions.map((seva) => (
                  <SevaCard
                    key={seva.id}
                    isSelected={selectedSeva === seva.id}
                    onClick={() => setSelectedSeva(seva.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SevaHeader>
                      <SevaIcon>{seva.icon}</SevaIcon>
                      <div style={{ flex: 1 }}>
                        <SevaName>{seva.name}</SevaName>
                        <SevaPrice>{seva.price}</SevaPrice>
                      </div>
                    </SevaHeader>
                    <SevaDescription>{seva.description}</SevaDescription>
                    <SevaFeatures>
                      {seva.features.map((feature, index) => (
                        <FeatureTag key={index}>{feature}</FeatureTag>
                      ))}
                    </SevaFeatures>
                  </SevaCard>
                ))}
              </SevaGrid>
            </SevaOptions>

            <BookingForm>
              <FormTitle>Booking Details</FormTitle>
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
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Special Requests</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any special requests or prayers..."
                  />
                </FormGroup>

                <BookingButton type="submit">
                  <Calendar size={20} />
                  Book Seva Now
                </BookingButton>
              </form>
            </BookingForm>
          </BookingGrid>
        </Container>
      </ContentSection>

      <InfoSection>
        <Container>
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
        </Container>
      </InfoSection>
    </BookingContainer>
  );
};

export default PujaBookingPage;