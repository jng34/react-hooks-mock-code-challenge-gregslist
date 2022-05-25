import React, {useState} from "react";

function ListingCard( { id, description, image, location, handleDeleteList }) {
  const [favState, setFavState] = useState(true)

  function handleLike() {
    setFavState(false);
  }

  function handleUnLike() {
    setFavState(true);
  }

  function onDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(() => handleDeleteList(id))
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favState ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleUnLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button id={id} onClick={()=>onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
