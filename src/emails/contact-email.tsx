import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Message</Heading>
          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            Sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: "'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '40px 24px',
  maxWidth: '600px',
};

const heading = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '700' as const,
  letterSpacing: '-0.03em',
  margin: '0 0 24px',
};

const hr = {
  borderColor: '#252b37',
  margin: '24px 0',
};

const section = {
  marginBottom: '16px',
};

const label = {
  color: '#a4a7ae',
  fontSize: '14px',
  fontWeight: '600' as const,
  margin: '0 0 4px',
};

const value = {
  color: '#fdfdfd',
  fontSize: '16px',
  margin: '0',
  lineHeight: '1.6',
};

const footer = {
  color: '#717680',
  fontSize: '12px',
  margin: '0',
};
