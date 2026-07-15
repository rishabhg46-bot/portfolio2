import styled from "styled-components";
import heroImg from "../assets/hero1.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Content = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  padding: 120px 5%;
  box-sizing: border-box;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    padding: 100px 20px 40px;
  }
`;

const Left = styled(motion.div)`
  max-width: 550px;

  h1 {
    font-size: 3rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 10px 0;
  }

  b {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }

    b {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Btn = styled(motion.button)`
  margin-top: 30px;
  width: 220px;
  height: 52px;

  border: none;
  border-radius: 12px;

  background: #07074e;
  color: white;

  cursor: pointer;

  font-size: 16px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HeroImage = styled.img`
  width: min(350px, 85vw);
  aspect-ratio: 1;

  object-fit: cover;

  border-radius: 15px;

  border: 1px solid rgba(255,255,255,.2);

  box-shadow: 0 10px 25px rgba(255,255,255,.15);

  @media (max-width:768px){
    width:250px;
  }
`;

function Hero() {
  const [loading, setLoading] = useState(false);

  const downloadResume = async () => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();

    setLoading(false);
  };

  return (
    <Content>
      <Left
        id="home"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
       <h1>Rishabh Gupta</h1>

<p>Hello, I'm RISHABH GUPTA</p>

<b>Machine Learning Engineer</b>

<p>B.Tech Information Technology @ HBTU Kanpur</p>

        <Btn
          onClick={downloadResume}
          disabled={loading}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 20px rgba(70,120,255,.8)",
            backgroundColor: "#1b1b8f",
          }}
        >
          {loading ? "Downloading..." : "Download Resume"}

          {loading && (
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="loading"
              style={{ width: 24, height: 24 }}
            />
          )}
        </Btn>
      </Left>

      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <HeroImage src={heroImg} alt="Tanishq Katiyar" />
      </motion.div>
    </Content>
  );
}

export default Hero;