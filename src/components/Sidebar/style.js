import styled from "styled-components";

export const ContainerSidebar = styled.aside`
  width: 100%;
  height: 1100px;
  display: grid;
  background-color: #111;
  border-radius: 0 10px 10px 0;
  grid-template-rows: 150px 200px 200px 500px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "a1 a1"
    "a2 a2"
    "a3 a3"
    "a4 a4";
  place-items: center;
  overflow: hidden;
`;
export const FilterBar = styled.div`
  grid-area: a1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #fff;
    text-decoration: underline;
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
  .filters {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    gap: 5px;

    span {
      background-color: grey;
      padding: 2px 4px;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
    }
  }
  .btn-filters {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background-color: blue;
      border: none;
      padding: 3px 7px;
      border-radius: 8px;
      color: #fff;
      text-transform: capitalize;
      font-weight: bold;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #191567;
      }
    }
  }
`;
export const StatusContainer = styled.div`
  grid-area: a2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 5px 0;
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: underline;
  }
  .status {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .input-field {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      label {
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;
export const GenderContainer = styled.div`
  grid-area: a3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    color: #fff;
  }
  .gender {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .input-field {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      label {
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;

export const SpeciesContainer = styled.div`
  grid-area: a4;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
    text-decoration: underline;
    color: #fff;
  }
  .species {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    .input-field {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      label {
        color: #fff;
        font-weight: 600;
      }
    }
  }
`;
