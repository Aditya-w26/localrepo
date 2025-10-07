import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, Calendar, Clock, Heart, Star, CheckCircle, MapPin, Phone } from 'lucide-react';

const VolunteerContainer = styled.div`
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

const VolunteerForm = styled.div`
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
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
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.gray[50]};
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: ${props => props.theme.colors.spiritual.saffron};
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

const OpportunitiesSection = styled.section`
  background: ${props => props.theme.colors.gray[50]};
  padding: ${props => props.theme.spacing['4xl']} 0;
`;

const OpportunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing['3xl']};
`;

const OpportunityCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  border: 2px solid ${props => props.theme.colors.spiritual.gold};
  text-align: center;
`;

const OpportunityIcon = styled.div`
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

const OpportunityTitle = styled.h3`
  color: ${props => props.theme.colors.spiritual.red};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const OpportunityDescription = styled.p`
  color: ${props => props.theme.colors.gray[700]};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const OpportunityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.gray[600]};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const OpportunityButton = styled.button`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.saffron};
    transform: translateY(-2px);
  }
`;

const BenefitsSection = styled.section`
  padding: ${props => props.theme.spacing['4xl']} 0;
  background: ${props => props.theme.colors.white};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const BenefitCard = styled(motion.div)`
  background: ${props => props.theme.colors.gray[50]};
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

const VolunteerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    sevaPreferences: [] as string[],
    availability: '',
    skills: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      sevaPreferences: checked 
        ? [...prev.sevaPreferences, value]
        : prev.sevaPreferences.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer form submitted:', formData);
  };

  const sevaOptions = [
    'Temple Cleaning',
    'Prasad Distribution',
    'Event Management',
    'Gardening',
    'Teaching',
    'Administrative Work',
    'Social Media',
    'Photography',
    'Transportation',
    'Cooking'
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Temple Maintenance',
      description: 'Help maintain the temple premises and keep it clean and beautiful',
      icon: <Heart size={24} />,
      time: '2-3 hours',
      frequency: 'Weekly'
    },
    {
      id: 2,
      title: 'Event Coordination',
      description: 'Assist in organizing festivals and special events at the temple',
      icon: <Calendar size={24} />,
      time: '4-6 hours',
      frequency: 'Monthly'
    },
    {
      id: 3,
      title: 'Community Service',
      description: 'Participate in community outreach and social service programs',
      icon: <Users size={24} />,
      time: '3-4 hours',
      frequency: 'Bi-weekly'
    },
    {
      id: 4,
      title: 'Teaching & Education',
      description: 'Help teach children about Hindu culture and traditions',
      icon: <Star size={24} />,
      time: '2-3 hours',
      frequency: 'Weekly'
    }
  ];

  const benefits = [
    {
      icon: <Heart size={24} />,
      title: 'Spiritual Growth',
      description: 'Experience personal spiritual development through selfless service'
    },
    {
      icon: <Users size={24} />,
      title: 'Community Connection',
      description: 'Build meaningful relationships with fellow devotees and community members'
    },
    {
      icon: <Star size={24} />,
      title: 'Divine Blessings',
      description: 'Receive the blessings of Lord Hanuman Ji through your seva'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Skill Development',
      description: 'Learn new skills and gain valuable experience in various areas'
    }
  ];

  return (
    <VolunteerContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-devanagari"
          >
            Volunteer with Us
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community of devoted volunteers and serve the divine cause
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <VolunteerForm>
            <FormTitle>
              <Users size={24} />
              Volunteer Registration
            </FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGrid>
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
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your age"
                    min="16"
                    max="80"
                  />
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label htmlFor="address">Address *</Label>
                <TextArea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your complete address"
                />
              </FormGroup>

              <FormGroup>
                <Label>Seva Preferences (Select all that apply)</Label>
                <CheckboxGroup>
                  {sevaOptions.map((option) => (
                    <CheckboxItem key={option}>
                      <Checkbox
                        type="checkbox"
                        value={option}
                        checked={formData.sevaPreferences.includes(option)}
                        onChange={handleCheckboxChange}
                      />
                      {option}
                    </CheckboxItem>
                  ))}
                </CheckboxGroup>
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both</option>
                    <option value="flexible">Flexible</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="skills">Skills & Talents</Label>
                  <Input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g., Cooking, Teaching, Photography"
                  />
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label htmlFor="experience">Previous Volunteer Experience</Label>
                <TextArea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about any previous volunteer experience..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="motivation">Why do you want to volunteer? *</Label>
                <TextArea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  placeholder="Share your motivation for volunteering..."
                />
              </FormGroup>

              <SubmitButton type="submit">
                <Users size={20} />
                Submit Application
              </SubmitButton>
            </form>
          </VolunteerForm>
        </Container>
      </ContentSection>

      <OpportunitiesSection>
        <Container>
          <SectionTitle>Volunteer Opportunities</SectionTitle>
          <OpportunitiesGrid>
            {opportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <OpportunityIcon>{opportunity.icon}</OpportunityIcon>
                <OpportunityTitle>{opportunity.title}</OpportunityTitle>
                <OpportunityDescription>{opportunity.description}</OpportunityDescription>
                <OpportunityDetails>
                  <span><Clock size={14} /> {opportunity.time}</span>
                  <span><Calendar size={14} /> {opportunity.frequency}</span>
                </OpportunityDetails>
                <OpportunityButton>Learn More</OpportunityButton>
              </OpportunityCard>
            ))}
          </OpportunitiesGrid>
        </Container>
      </OpportunitiesSection>

      <BenefitsSection>
        <Container>
          <SectionTitle>Benefits of Volunteering</SectionTitle>
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
    </VolunteerContainer>
  );
};

export default VolunteerPage;