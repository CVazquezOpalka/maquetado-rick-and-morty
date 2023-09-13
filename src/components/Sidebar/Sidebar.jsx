import React, { useState } from "react";
import {
  WrapperSidebar,
  TitleAcordion,
  ContentAcordion,
  ItemContainer,
  InputField,
} from "./style";
import {
  genderFilter,
  statusFilter,
  speciesFilter,
  updateFilter,
} from "../../redux/filters/actions";
import { updateSearch } from "../../redux/filters/actions";
import { updatePagination } from "../../redux/page/action";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = ({ show, handleShow }) => {
  const dispatch = useDispatch();
  const { status, gender, species } = useSelector((state) => state.filters);
  const [selected, setSelected] = useState(null);
  const toogle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      title: "Status",
      value: ["alive", "dead", "unknown"],
    },
    {
      title: "Gender",
      value: ["female", "male", "genderless"],
    },
    {
      title: "Species",
      value: [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
      ],
    },
  ];
  const statusArr = ["alive", "dead", "unknown"];
  const genderArr = ["female", "male", "genderless", "unknown"];
  let speciesArr = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];
  const [filters, setFilters] = useState([]);

  const handleRadioButtons = (e) => {
    const { name } = e.target;
    if (statusArr.includes(name)) {
      dispatch(statusFilter(name));
      dispatch(updatePagination());
    } else if (genderArr.includes(name)) {
      dispatch(genderFilter(name));
      dispatch(updatePagination());
    } else if (speciesArr.includes(name)) {
      dispatch(speciesFilter(name));
      dispatch(updatePagination());
    }
  };
  const updateState = () => {
    dispatch(updateFilter());
    dispatch(updateSearch());
  };

  return (
    <>
      <WrapperSidebar>
        <div className="btn">
          <button onClick={handleShow}>
            <p>Filtros</p>
          </button>
        </div>
        {data.map((item, i) => (
          <ItemContainer>
            <TitleAcordion onClick={() => toogle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </TitleAcordion>
            <ContentAcordion className={selected === i ? "show" : ""}>
              {item.value.map((e, i) => (
                <InputField key={i}>
                  <input
                    type="radio"
                    name={e}
                    onChange={handleRadioButtons}
                    checked={
                      e === status
                        ? true
                        : e === gender
                        ? true
                        : e === species
                        ? true
                        : false
                    }
                  />
                  <label>{e}</label>
                </InputField>
              ))}
            </ContentAcordion>
          </ItemContainer>
        ))}
        <div className="div-btn-clear">
          {(status.trim() !== "" ||
            gender.trim() !== "" ||
            species.trim() !== "") && (
            <button className="btn-clear" onClick={updateState}>
              Clear Filters
            </button>
          )}
        </div>
      </WrapperSidebar>
    </>
  );
};
