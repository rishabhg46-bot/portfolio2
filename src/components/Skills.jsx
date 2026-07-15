import styled from "styled-components";
import "./Skills.css";
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
  margin-bottom: 40px;
  text-align: center;
`;

const Content = styled.div`
  width: min(1000px, 95vw);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

  gap: 25px;

  padding: 25px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;

  backdrop-filter: blur(10px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 18px;
    gap: 18px;
  }
`;

const skills = [
  {
    name: "Python",
    description: "Programming language for Machine Learning, AI and Data Science."
  },
  {
    name: "C++",
    description: "Strong foundation in programming, algorithms and problem solving."
  },
  {
    name: "SQL",
    description: "Database querying and relational database management."
  },
  {
    name: "Machine Learning",
    description: "Regression, Classification, Feature Engineering and Model Evaluation."
  },
  {
    name: "Scikit-learn",
    description: "Develop and evaluate machine learning models."
  },
  {
    name: "TensorFlow",
    description: "Build deep learning and neural network applications."
  },
  {
    name: "XGBoost",
    description: "High-performance gradient boosting for predictive analytics."
  },
  {
    name: "CatBoost",
    description: "Boosting algorithm optimized for categorical data."
  },
  {
    name: "Pandas",
    description: "Data cleaning, manipulation and preprocessing."
  },
  {
    name: "NumPy",
    description: "Numerical computing and array operations."
  },
  {
    name: "Matplotlib",
    description: "Create charts and data visualizations."
  },
  {
    name: "Seaborn",
    description: "Statistical data visualization library."
  },
  {
    name: "Streamlit",
    description: "Develop interactive Machine Learning web applications."
  },
  {
    name: "FastAPI",
    description: "Build high-performance REST APIs."
  },
  {
    name: "Git",
    description: "Version control for software development."
  },
  {
    name: "GitHub",
    description: "Collaborative software development and code hosting."
  },
  {
    name: "Linux",
    description: "Development and command-line environment."
  },
  {
    name: "VS Code",
    description: "Code editor for efficient software development."
  },
  {
    name: "Jupyter Notebook",
    description: "Interactive environment for Machine Learning and Data Science."
  },
  {
    name: "Google Colab",
    description: "Cloud-based notebook for Python and AI development."
  }
];

function Skills() {
  return (
    <Section
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Title>Technical Skills</Title>

      <Content>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 15px 35px rgba(0,150,255,.35)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              type: "spring",
              stiffness: 250
            }}
          >
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </Content>
    </Section>
  );
}

export default Skills;