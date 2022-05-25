import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(list => setLists(list))
  }, []);

  function updateDeletedList(id) {
    const updatedList = lists.filter((list) => list.id !== id);
    console.log(updatedList)
    setLists(updatedList);
  }

  function handleFilterSearch(input) {
    const updatedList = lists.filter((list) => list.description.toLowerCase().includes(input.tosowerCase())); 
    setLists(updatedList);
  } 

  //Advance Deliverable
  function handleSorting() {
    const sortedList = lists.map((list) => list.location.toLowerCase()).sort();
    
    console.log(sortedList)
    setLists(sortedList);
  }

  return (
    <div className="app">
      <Header handleFilterSearch={handleFilterSearch}/>
      <ListingsContainer lists={lists} updateDeletedList={updateDeletedList} onSortListings={handleSorting}/>
    </div>
  );
}

export default App;
