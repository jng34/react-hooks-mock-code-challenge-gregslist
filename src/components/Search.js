import React, {useState} from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const newSearch = e.target.value;
    console.log(newSearch)
    setSearch(newSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    console.log(search)
    onSearch(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
