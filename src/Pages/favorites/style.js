import styled from "styled-components";

export const FavoriteContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    h1 {
      letter-spacing: 3px;
      text-decoration: underline;
    }
  }
  .grid {
    margin: 0 auto;
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
`;