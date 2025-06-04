import React, { useState, useEffect } from 'react';
import MovieImageArr from "./MovieImages.js"
import RankingGrid from "../components/RankingGrid.jsx"

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then(results => results.json())
            .then(data => setItems(data));
    }, []);


  return (
      <main>
          <RankingGrid items={items} imgArr={MovieImageArr} />
          <div className="items-not-ranked">
          {
                  (items.length > 0) ? items.map((item) =>
                     <div className="unranked-cell">
                          <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image} />
                     </div>
                     ):
                  <div>Loading...</div>
          }
          </div>
        </main>
          )
};

export default RankItems;