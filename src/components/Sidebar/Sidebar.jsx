import React, { useState } from "react";
import {
  ContainerSidebar,
  FilterBar,
  StatusContainer,
  GenderContainer,
  SpeciesContainer,
} from "./style";

import {
  genderFilter,
  statusFilter,
  speciesFilter,
  updateFilter,
} from "../../redux/filters/actions";
import { updatePagination } from "../../redux/page/action";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { status, gender, species } = useSelector((state) => state.filters);

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
    "Planet",
  ];
  const [filters, setFilters] = useState([]);
  console.log(filters);
  const handleRadioButtons = (e) => {
    const { name } = e.target;
    // Dependiendo del grupo de radio buttons, actualiza el estado correspondiente
    if (statusArr.includes(name)) {
      dispatch(statusFilter(name));
      dispatch(updatePagination());
      setFilters((prevFilters) => prevFilters.concat(name));
    } else if (genderArr.includes(name)) {
      dispatch(genderFilter(name));
      dispatch(updatePagination());
      setFilters((prevFilters) => prevFilters.concat(name));
    } else if (speciesArr.includes(name)) {
      dispatch(speciesFilter(name));
      dispatch(updatePagination());
      setFilters((prevFilters) => prevFilters.concat(name));
    }
  };

  return (
    <ContainerSidebar heigth={filters.length}>
      <FilterBar show={filters.length}>
        <h3>Filtros Aplicados</h3>
        <div className="filters">
          {filters.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
        </div>
        <div className="btn-filters">
          <button
            onClick={() => {
              dispatch(updateFilter());
              setFilters([]);
            }}
          >
            clear filter
          </button>
        </div>
      </FilterBar>
      <StatusContainer>
        <h3>Status</h3>
        <div className="status">
          {statusArr.map((e, index) => (
            <div className="input-field" key={index}>
              <input
                type="radio"
                name={e}
                onChange={handleRadioButtons}
                checked={e === status ? true : false}
              />
              <label htmlFor="status">{e}</label>
            </div>
          ))}
        </div>
      </StatusContainer>
      <GenderContainer>
        <h3>Gender</h3>
        <div className="gender">
          {genderArr.map((e, index) => (
            <div className="input-field" key={index}>
              <input
                type="radio"
                name={e}
                onChange={handleRadioButtons}
                checked={e === gender ? true : false}
              />
              <label>{e}</label>
            </div>
          ))}
        </div>
      </GenderContainer>
      <SpeciesContainer>
        <h3>Species</h3>
        <div className="species">
          {speciesArr.map((e, index) => (
            <div className="input-field" key={index}>
              <input
                type="radio"
                name={e}
                onChange={handleRadioButtons}
                checked={e === species ? true : false}
              />
              <label>{e}</label>
            </div>
          ))}
        </div>
      </SpeciesContainer>
    </ContainerSidebar>
  );
};
