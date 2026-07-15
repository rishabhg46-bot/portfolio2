import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  width: 100%;
  padding: 100px 20px 60px;
  box-sizing: border-box;
  scroll-margin-top: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: min(900px, 95vw);
`;

const Card = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 25px;

  color: white;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  h2 {
    margin-bottom: 8px;
  }

  h4 {
    color: #00d4ff;
    margin-bottom: 15px;
    font-weight: 500;
  }

  p {
    line-height: 1.7;
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    padding: 18px;

    h2 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

function Education() {
  const education = [
    {
      title: "Bachelor of Technology",
      year: "2024 - Present",
      institute: "Harcourt Butler Technical University, Kanpur",
      percentage: "CGPA: 7.8 / 10",
      description:
        "Currently pursuing B.Tech in Information Technology with a focus on Machine Learning, Artificial Intelligence, Data Science, and Software Development.",
    },
    {
      title: "Diploma in Electronics Engineering",
      year: "2021 - 2024",
      institute: "Government Polytechnic, Kanpur",
      percentage: "78%",
      description:
        "Completed Diploma in Electronics Engineering with strong fundamentals in electronics, programming, and analytical problem-solving.",
    },
  ];

  return (
    <Section
      id="education"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <Title>Education</Title>

      <Content>
        {education.map((item, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: "0 15px 35px rgba(0,255,255,.35)",
            }}
          >
            <h2>{item.title}</h2>
            <h4>{item.institute}</h4>

            <p>
              <strong>Duration:</strong> {item.year}
            </p>

            <p>
              <strong>Result:</strong> {item.percentage}
            </p>

            <p>{item.description}</p>
          </Card>
        ))}
      </Content>
    </Section>
  );
}

export default Education;