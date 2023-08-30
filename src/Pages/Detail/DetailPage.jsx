import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCharacter,
  updateCharacterDetail,
} from "../../redux/character/actions";
import styled from "styled-components";
import { HeaderDetail } from "../../components/HeaderDetail/HeaderDetail";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const characterDetail = useSelector(
    (state) => state.character.characterDetail
  );
  const loading = useSelector((state) => state.character.loadingDetail);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateCharacterDetail());
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getCharacter(id));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Cargandoo...</h1>
      ) : (
        <>
          <HeaderDetail />
          <DetailContainer>
            <div className="btn">
              <button onClick={handleClick}>{"<"}</button>
            </div>
            <TitleContainer>
              <h1>
                {" "}
                <span>#{characterDetail.id}</span> {characterDetail.name}
              </h1>
            </TitleContainer>
            <ImageContainer>
              <img src={characterDetail.image} alt="" />
            </ImageContainer>
            <ContentContainer>
              <div className="content">
                <span>Estado:</span>
                <h3>{characterDetail.status}</h3>
              </div>
              <div className="content">
                <span>Especie:</span>
                <h3>{characterDetail.species}</h3>
              </div>
              <div className="content">
                <span>Origen:</span>
                <h3>
                  {characterDetail.origin.name.length > 15
                    ? `${characterDetail.origin.name.slice(0, 13)}...`
                    : characterDetail.origin.name}
                </h3>
              </div>
            </ContentContainer>
          </DetailContainer>
        </>
      )}
    </>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 162, 1) 100%
  );
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "t1 t1 t1 t1 t1 t1"
    "i1 i1 c1 c1 c1 c1"
    "i1 i1 c1 c1 c1 c1"
    "i1 i1 c1 c1 c1 c1";
  .btn {
    position: absolute;
    top: 100px;
    left: 50px;
    width: 50px;
    height: 50px;
    button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fff;
      border: none;
      font-size: 25px;
      transition: 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        transform: scale(1.2);
        background-color: #333;
        color: #fff;
      }
    }
  }
`;

const TitleContainer = styled.div`
  grid-area: t1;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    letter-spacing: 5px;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    span {
      font-weight: 200;
    }
  }
`;
const ImageContainer = styled.div`
  grid-area: i1;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 20px;
    width: 360px;
    object-fit: cover;
  }
`;
const ContentContainer = styled.div`
  grid-area: c1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .content {
    width: 40%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: underline;
    }
    h3 {
      font-size: 30px;
      font-weight: 300;
      text-transform: capitalize;
    }
  }
`;
