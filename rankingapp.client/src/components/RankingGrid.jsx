const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {
    
    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    function pushCellMarkerToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(o => o.rank === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} className="rank-cell"></div>)
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>
            );
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (let a = 1; a<= numCells; a++) {
                if(rowNum === 1) {
                    currCollection = cellCollectionTop;
                    label = "Top Tier";
                }
                else if (rowNum === 2) {
                    currCollection = cellCollectionMiddle;
                    label = "Middle Tier";
                } else if(rowNum === 3) {
                    currCollection = cellCollectionBottom;
                    label = "Bottom Tier";
                } else if(rowNum === 4) {
                    currCollection = cellCollectionWorst;
                    label = "Worst Tier";
                }

                for (let a = 1; a <= numCells; a++) {
                    rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;
                    pushCellMarkerToArr(currCollection, rankNum, label);
                }
        }
    }

    function createCellsForRows() {
        const maxRows = 4;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        // You can use this also but I wanted to use map for cleaner code with React
        // rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>)
        // rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>)
        // rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>)
        // rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>)

        const tierData = [
            {className: "top-tier", cells: "Top Tier"},
            {className: "middle-tier", cells: "Middle Tier"},
            {className: "bottom-tier", cells: "Bottom Tier"},
            {className: "worst-tier", cells: "Worst Tier" },
        ];
        return tierData.map((tier, index) => (
            <div key={index} className={`rank-row ${tier.className}`}>
                {tier.cells}
            </div>
        ))

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className="rankings">
              {createRankingGrid()}
        </div>
    )

}

export default RankingGrid;