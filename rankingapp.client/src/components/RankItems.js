import React, { useState, useEffect } from 'react';

const RankItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        //fetch collection of movie data from "server"
        fetch(`item/${dataType}`)
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
          <div>

          </div>
      </main>
  );
};

export default RankItems;