import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 20px 40px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: min(1000px, 95vw);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  padding: 25px;

  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 15px;

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);

  color: white;

  box-shadow: 0 10px 25px rgba(0,0,0,.3);

  h3{
    color:#00d4ff;
    margin-bottom:18px;
  }

  ul{
    padding-left:20px;
  }

  li{
    margin:12px 0;
    line-height:1.7;
  }
`;

const projects = [
  {
    title: "Sales Forecasting System",
    points: [
      "Built an end-to-end machine learning pipeline for sales forecasting.",
      "Performed data preprocessing, feature engineering and EDA.",
      "Compared multiple regression models to achieve the best performance.",
      "Developed a Streamlit dashboard for prediction visualization."
    ]
  },
  {
    title: "Employee Attrition Prediction",
    points: [
      "Developed a machine learning model using HR analytics data.",
      "Applied preprocessing, feature encoding and model optimization.",
      "Evaluated models using Accuracy, Precision, Recall, F1-Score and ROC-AUC.",
      "Built a Streamlit application for real-time prediction."
    ]
  },
  {
    title: "Hybrid ResNet50 + CatBoost Crowd Counting",
    points: [
      "Developed a hybrid crowd counting framework using transfer learning.",
      "Extracted image features with ResNet50.",
      "Used CatBoost regression for crowd estimation.",
      "Evaluated performance using MAE and MSE metrics."
    ]
  },
  {
    title: "AI-Powered Financial Fraud Detector",
    points: [
      "Developed a blockchain-enabled fraud detection system.",
      "Integrated Machine Learning for fraud prediction.",
      "Stored fraud reports using Aptos smart contracts.",
      "Designed a backend pipeline for real-time fraud alerts."
    ]
  }
];

function Projects() {
  return (
    <Section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Title>Projects</Title>

      <Content>
        {projects.map((project, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.03,
              y: -10,
              boxShadow: "0 15px 35px rgba(0,150,255,.35)",
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <h3>{project.title}</h3>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Content>
    </Section>
  );
}

export default Projects;