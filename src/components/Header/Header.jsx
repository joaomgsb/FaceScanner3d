import styled from "styled-components";

//styles
const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  margin-top: 1rem;
  .box {
    border-radius: 17px;
    background: #c3c3e6;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1rem;
    transition: 0.3s all ease-in-out;
    justify-content: center;
    justify-self: center;
    text-align: center;
    width: fit-content;
    &:hover {
        transform: scale(1.02);
    }

    .header-logo {
      font-family: sans-serif;
      font-weight: 900;

      margin: 0;
    }
    h5 {
      margin: 0;
      a {
          text-decoration: none;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <Container>
        <div className="box">
          <h1 className="header-logo">Face Scanner</h1>
          <h5>
            poweredby <a href="https://www.tensorflow.org/js">tensorflow.js</a>
          </h5>
        </div>
      </Container>
    </>
  );
};
export default Header;
