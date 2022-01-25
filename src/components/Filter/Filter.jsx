import React from "react";
import PropTypes from "prop-types";
import { Section, Title, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filter/filter-action";
import { useSelector } from "react-redux";

export default function Filter({ title }) {
  const dispatch = useDispatch();
  const filterQuery = useSelector(state => state.filter);

  const onFilterChange = e => {
    dispatch(filter(e.target.value));
  };

  return (
    <Section>
      <Title>{title}</Title>
      <FilterInput value={filterQuery} type="text" onChange={onFilterChange} />
    </Section>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
