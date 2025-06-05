import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <>
                <main>
                    <div className="homepage-intro">
                        <h1>Rank Your Favorite Movies</h1>
                        <p>Welcome to our movie ranking tool! Just drag and drop each movie poster into one of the four tiers:</p>
                        <ul>
                            <li><strong>Top Tier</strong> - Your all-time favorites</li>
                            <li><strong>Middle Tier</strong> - Great, but not perfect</li>
                            <li><strong>Bottom Tier</strong> - Decent or forgettable</li>
                            <li><strong>Worst Tier</strong> - Movies you'd rather forget</li>
                        </ul>
                        <p>Simply grab a movie from the list below and drop it into a rank cell. You can rearrange them anytime by dragging them again.</p>
                        <p>Once you're done, take a screenshot or save your ranking to share with friends!</p>
                        <hr />
                    </div>
                </main>
                <footer className="powered-wrap">
                    <p className="powered-by">Built using React and ASP.NET Core.</p>
                </footer>
            </>
        );
    }
}