import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = styled(motion.section)`
  width: 100%;
  padding: 100px 20px 60px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  scroll-margin-top: 90px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: min(900px, 95vw);

  padding: 30px;
  box-sizing: border-box;

  border-radius: 18px;
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,.15);
  box-shadow: 0 10px 30px rgba(0,0,0,.35);

  @media (max-width:768px){
    width:100%;
    padding:20px;
  }
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:20px;

  @media(max-width:768px){
    grid-template-columns:1fr;
  }
`;

const Card = styled(motion.div)`
  padding:18px;
  border-radius:12px;

  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);

  transition:.3s;

  h3{
    color:#00d4ff;
    margin-bottom:10px;
  }

  p,a{
    color:white;
    text-decoration:none;
    word-break:break-word;
    line-height:1.6;
  }

  &:hover{
    transform:translateY(-5px);
    border-color:#00d4ff;
    box-shadow:0 8px 20px rgba(0,212,255,.25);
  }

  a:hover{
    color:#00d4ff;
  }
`;

function Contact() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.15,
    once: false,
  });

const contactInfo = [
  {
    label: "Name",
    value: "Rishabh Gupta",
  },
  {
    label: "Role",
    value: "Machine Learning Engineer | Python Developer",
  },
  {
    label: "Email",
    value: "rg9433573@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 8081261045",
  },
  {
    label: "College",
    value: "Harcourt Butler Technical University, Kanpur",
  },
  {
    label: "GitHub",
    value: "https://github.com/rishabhg46-bot",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/rishabh-gupta-bbb252328",
  },
  {
    label: "LeetCode",
    value: "https://leetcode.com/u/RISHABHG46/",
  },
];

  return (
    <Section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, x: -150 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: -150 }
      }
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 40,
        damping: 18,
      }}
    >
      <Title>Contact Me</Title>

      <Content>
        <Grid>
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 60 }
              }
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
            >
              <h3>{contact.label}</h3>

              {contact.value.startsWith("http") ? (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <p>{contact.value}</p>
              )}
            </Card>
          ))}
        </Grid>
      </Content>
    </Section>
  );
}

export default Contact;