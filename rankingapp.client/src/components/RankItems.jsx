import React, { useState, useEffect } from 'react';
import MovieImageArr from "./MovieImages.js"
import RankingGrid from "../components/RankingGrid.jsx"

const RankItems = () => {

    const [items, setItems] = useState([]);
    const dataType = 1;

    function drag(ev) {
        // Stores id value of item being dragged
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();

        const targetElm = ev.target;
        // If an image already exists in the target element, do not allow drop
        if (targetElm.nodeName === "IMG") {
            return false;
        }

        // Prevents users from dropping an images onto another image
        if (targetElm.childNodes.length === 0) {
            let data = parseInt(ev.dataTransfer.getdata("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElm.id.substring(5)) } : { ...item, ranking: item.ranking })
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then(results => results.json())
            .then(data => setItems(data));
    }, []);


  return (
      <main>
          <RankingGrid items={items} imgArr={MovieImageArr} drag={drag} allowDrop={allowDrop} drop={drop} />
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