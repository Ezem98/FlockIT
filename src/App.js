import logo from "./assets/images/logo.png";
import "./App.css";
import { SearchableTextInput } from "./components/SearchableTextInput.js";
import { getProvincias } from "./services/APIService.js";
import { useState, useEffect, useCallback } from "react";
import { Table } from "./components/table/table.jsx";

function App() {
  const [provincias, setProvincias] = useState([]);
  const [filteredProvincias, setFilteredProvincias] = useState([]);

  const getData = async () => {
    const { status, data } = await getProvincias();
    const { provincias } = data
    const orderedData = provincias.sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (status === 200 || status === 201) {
      setProvincias(orderedData);
      setFilteredProvincias(orderedData);
    }
  };

  const filterData = (e) => {
    e.preventDefault();
    const query = e.target.value;
    let updatedList = [...provincias];
    updatedList = updatedList.filter((p) => {
      return p.nombre.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProvincias(updatedList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <SearchableTextInput
          type="text"
          width="50%"
          onChange={(e) => filterData(e)}
        />
        <Table data={filteredProvincias} />
      </div>
    </div>
  );
}

export default App;
