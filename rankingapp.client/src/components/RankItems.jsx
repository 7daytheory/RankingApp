import React, { useState, useEffect } from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        //fetch collection of movie data from "server"
        fetch(`item/1`)
            .then(results => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    })

  return (
        <main>
          {
              (items != null) ? items.map((item) =>
                  <h3>{item.title}</h3>) :
                  <div>Loading...</div>
          }
        </main>
          )
};

export default RankItems;