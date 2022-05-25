import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ lists, updateDeletedList, onSortListings }) {

  const listings = lists.map((item) => (
    <ListingCard key={item.id} id={item.id} description={item.description} image={item.image} location={item.location} handleDeleteList={updateDeletedList}/>
  ))

  //Advanced deliverable - sorting alphabetically
  // const listSorter = <button type="button">Sort Alphabetically</button> 

  return (
    <main>
      <button type="button" onClick={onSortListings}>Sort Alphabetically</button> 
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
