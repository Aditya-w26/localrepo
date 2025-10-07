import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Smartphone, Gift, Users, Star, CheckCircle } from 'lucide-react';

const DonationContainer = styled.div`
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

const DonationGrid = styled.div`
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const SevaCard = styled(motion.div)<{ isSelected: boolean }>`
  background: ${props => props.isSelected ? props.theme.colors.spiritual.gold : props.theme.colors.white};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.gray[700]};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  cursor: pointer;
  border: 2px solid ${props => props.isSelected ? props.theme.colors.spiritual.red : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const SevaIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SevaName = styled.h4`
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SevaDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  opacity: 0.8;
`;

const DonationForm = styled.div`
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

const AmountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const AmountButton = styled.button<{ isSelected: boolean }>`
  background: ${props => props.isSelected ? props.theme.colors.spiritual.saffron : props.theme.colors.gray[100]};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.gray[700]};
  border: 2px solid ${props => props.isSelected ? props.theme.colors.spiritual.red : props.theme.colors.gray[300]};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.gold};
    color: ${props => props.theme.colors.white};
  }
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PaymentMethod = styled.button<{ isSelected: boolean }>`
  background: ${props => props.isSelected ? props.theme.colors.spiritual.gold : props.theme.colors.white};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.gray[700]};
  border: 2px solid ${props => props.isSelected ? props.theme.colors.spiritual.red : props.theme.colors.gray[300]};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    color: ${props => props.theme.colors.white};
  }
`;

const DonateButton = styled.button`
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

const BenefitsSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const BenefitCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
`;

const BenefitIcon = styled.div`
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

const BenefitTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const DonationPage: React.FC = () => {
  const [selectedSeva, setSelectedSeva] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const sevaOptions = [
    {
      id: 'annadan',
      name: 'Annadan Seva',
      description: 'Food distribution to devotees',
      icon: '🍽️'
    },
    {
      id: 'prasad',
      name: 'Prasad Seva',
      description: 'Sacred food offering',
      icon: '🙏'
    },
    {
      id: 'deepdan',
      name: 'Deepdan',
      description: 'Oil lamp offerings',
      icon: '🪔'
    },
    {
      id: 'shringar',
      name: 'Shringar Seva',
      description: 'Deity decoration',
      icon: '🌸'
    },
    {
      id: 'akhand',
      name: 'Akhand Ramayan Path',
      description: 'Continuous Ramayan reading',
      icon: '📚'
    },
    {
      id: 'bhandara',
      name: 'Bhandara Seva',
      description: 'Community feast service',
      icon: '👥'
    },
    {
      id: 'mahaprasad',
      name: 'Mahaprasadi Vitaran',
      description: 'Sacred prasad distribution',
      icon: '🎁'
    }
  ];

  const amountOptions = ['₹100', '₹500', '₹1000', '₹2500', '₹5000', '₹10000'];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard size={24} /> },
    { id: 'upi', name: 'UPI Payment', icon: <Smartphone size={24} /> },
    { id: 'netbanking', name: 'Net Banking', icon: <CreditCard size={24} /> }
  ];

  const benefits = [
    {
      icon: <Heart size={24} />,
      title: 'Divine Blessings',
      description: 'Receive the blessings of Lord Hanuman Ji for your generous contribution'
    },
    {
      icon: <Star size={24} />,
      title: 'Spiritual Merit',
      description: 'Accumulate spiritual merit through selfless service and donation'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Service',
      description: 'Support the temple community and help maintain sacred traditions'
    },
    {
      icon: <Gift size={24} />,
      title: 'Tax Benefits',
      description: 'Eligible for tax deduction under Section 80G of Income Tax Act'
    }
  ];

  return (
    <DonationContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Donation & Seva
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Support our temple and receive divine blessings through your generous contributions
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <DonationGrid>
            <SevaOptions>
              <SevaTitle>Choose Your Seva</SevaTitle>
              <SevaGrid>
                {sevaOptions.map((seva) => (
                  <SevaCard
                    key={seva.id}
                    isSelected={selectedSeva === seva.id}
                    onClick={() => setSelectedSeva(seva.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SevaIcon>{seva.icon}</SevaIcon>
                    <SevaName>{seva.name}</SevaName>
                    <SevaDescription>{seva.description}</SevaDescription>
                  </SevaCard>
                ))}
              </SevaGrid>
            </SevaOptions>

            <DonationForm>
              <FormTitle>Make Your Donation</FormTitle>
              
              <FormGroup>
                <Label>Donation Amount</Label>
                <AmountGrid>
                  {amountOptions.map((amount) => (
                    <AmountButton
                      key={amount}
                      isSelected={selectedAmount === amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                    >
                      {amount}
                    </AmountButton>
                  ))}
                </AmountGrid>
                <Input
                  type="text"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label>Payment Method</Label>
                <PaymentMethods>
                  {paymentMethods.map((method) => (
                    <PaymentMethod
                      key={method.id}
                      isSelected={selectedPayment === method.id}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      {method.icon}
                      {method.name}
                    </PaymentMethod>
                  ))}
                </PaymentMethods>
              </FormGroup>

              <FormGroup>
                <Label>Your Name</Label>
                <Input type="text" placeholder="Enter your full name" />
              </FormGroup>

              <FormGroup>
                <Label>Email Address</Label>
                <Input type="email" placeholder="Enter your email" />
              </FormGroup>

              <DonateButton>
                <Heart size={20} />
                Donate Now
              </DonateButton>
            </DonationForm>
          </DonationGrid>
        </Container>
      </ContentSection>

      <BenefitsSection>
        <Container>
          <SectionTitle>Benefits of Donation</SectionTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <p>{benefit.description}</p>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </BenefitsSection>
    </DonationContainer>
  );
};

export default DonationPage;