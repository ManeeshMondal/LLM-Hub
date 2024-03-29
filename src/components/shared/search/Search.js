import React, { useState, Fragment, useMemo, useEffect } from "react";
import "./Search.css";
import { clearingError, getFilteredModel } from "../../../actions/ModelAction";
import { useDispatch, useSelector } from "react-redux";
import searchButton from "../../../images/icons8-search-30.png";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { models, filteredModels, error } = useSelector(
    (state) => state.models
  );

  const dispatch = useDispatch();

  const searchedModels = useMemo(() => {
    if (searchQuery !== "") {
      return models?.filter((model) =>
        Object.values(model).some((prop) =>
          prop.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      return filteredModels;
    }
  }, [models, filteredModels, searchQuery]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (error) {
        alert.error(error);
        dispatch(clearingError);
      }
      dispatch(getFilteredModel(searchedModels));
    } else {
      dispatch(getFilteredModel(models));
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        dispatch(getFilteredModel(searchedModels));
      } else {
        dispatch(getFilteredModel(models));
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return ( 
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Model ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
        <img src={searchButton} alt="Search" style={{ width: "20px" }} />

        </button>
      </form>
    </Fragment>
  );
};

export default Search;
