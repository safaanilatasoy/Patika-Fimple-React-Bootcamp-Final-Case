
import {useState} from "react";

import SearchApplicationForm from "../../../components/SearchApplicationForm";
import ApplicationList from "../../../components/ApplicationList"

import style from './style.module.css';

function SearchApplication() {
  const [selectedApplicationId, setSelectedApplicationId] = useState("");

  const handleFormSubmit = (applicationId) => {
    setSelectedApplicationId(applicationId);
  };
  return (
    <div className={style.mainContainer}>
      <SearchApplicationForm onFormSubmit={handleFormSubmit} />
      {selectedApplicationId ? <ApplicationList applicationId={selectedApplicationId} /> : ""}
    </div>
  );
}

export default SearchApplication
