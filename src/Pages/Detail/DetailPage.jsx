import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCharacter,
  updateCharacterDetail,
} from "../../redux/character/actions";
import { Loader } from "../../components/Loader/Loader";
import { HeaderDetail } from "../../components/HeaderDetail/HeaderDetail";
import { updatePagination } from "../../redux/page/action";

import {
  DetailContainer,
  TitleContainer,
  ImageContainer,
  ContentContainer,
} from "./style";

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
    dispatch(updatePagination());
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getCharacter(id));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
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
