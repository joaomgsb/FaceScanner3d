import styled from "styled-components";

const gitAccount = "https://github.com/concentratedmilk";

const Container = styled.div`
  display: flex;
  cursor: default;
  .box {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    width: fit-content;
    border-radius: 20px;
    background: #c9ada7;
    justify-content: center;
    text-align: center;
    margin: auto;
    padding: 1rem;
    transition: all 0.4s ease-in-out;
    h1 {
      color: white;
      font-weight: 900;
    }
    h2 {
      border-radius: 20px;
      font-weight: 800;
      &:hover {
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

        transform: scale(1.06);
      }
      &:active {
        transform: scale(0.98);
        color: purple;
      }
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    .react-link {
    }
  }
`;
const Plug = styled.div`
  justify-content: center;
  text-align: center;
  margin: 2rem;
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 800;
    transition: 0.2s ease-in-out all;
  }
  p{
      transition: all 0.1s ease-in-out;
      &:hover{
          transform: scale(1.1);
      }
  }
`;
const About = () => {
  return (
    <>
      <Container>
        <div className="box">
          <h1>Technology</h1>
          <p>this project was built using</p>
          <h2 className="react-link">
            <a href="https://reactjs.org/">⚛️ React.js</a>
          </h2>
          <h2 className="styled-link">
            <a href="https://styled-components.com/">&lt;💅&gt; </a>
          </h2>
          <h2 className="tensorflow-link">
            <a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection">
              Tensorflow.js
            </a>
          </h2>
        </div>
      </Container>
      <Plug>
        <p>
          <a href={gitAccount}>Github</a>
        </p>
      </Plug>
    </>
  );
};

export default About;
