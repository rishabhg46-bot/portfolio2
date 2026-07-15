import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled.div`
  width: min(700px, 90vw);
  min-height: 35vh;

  margin: 20px auto;
  padding: 25px;

  color: aliceblue;

  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  box-shadow: 1px 1px 8px rgba(0,0,0,0.4);

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);

  box-sizing: border-box;

  p {
    margin: 15px 0;
    line-height: 1.8;
    font-size: 1.05rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    width: 95vw;
    padding: 18px;

    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.8,
        type: "spring",
        stiffness: 40,
        damping: 20,
      }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        About
      </h1>

      <Content>
        <p>
          I am Rishabh Gupta, a B.Tech student in Information Technology at
          Harcourt Butler Technical University (HBTU), Kanpur. I am passionate
          about Machine Learning, Artificial Intelligence, and Data Science.
        </p>

        <p>
          I enjoy building end-to-end machine learning applications using
          Python, Scikit-learn, TensorFlow, XGBoost, CatBoost, and Streamlit.
          I also have experience in data preprocessing, feature engineering,
          model evaluation, and deployment.
        </p>

        <p>
          My goal is to become an AI/ML Engineer by developing intelligent
          solutions that solve real-world problems while continuously improving
          my technical and problem-solving skills.
        </p>
      </Content>
    </motion.section>
  );
}

export default About;