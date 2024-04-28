import React from 'react';
import './Showcase.css'; 
import Showcase_grid_item from './Showcase_grid_item';  
import bannerAvatar from '../assets/banner-avatar.png';

const showcaseData = [
    {
        id: 1,
        backgroundImage: bannerAvatar,
        ticker: "IronMan",
        tickerCode: "IRON",
        creationTime: "3h",
        progress: 90,
        minSol: 3.00,
        maxSol: 500,
        saleStartTime: "05:12:34:56",
    },
    {
        id: 2,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 3,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 4,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 5,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 6,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 7,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
    {
        id: 8,
        backgroundImage: bannerAvatar,
        ticker: "Captain America",
        tickerCode: "CAP",
        creationTime: "1d",
        progress: 50,
        minSol: 1.75,
        maxSol: 260,
        saleStartTime: "12:01:02:03",
    },
   
];

const showcase_grid_item = () => {
    return (
        <div className="row mt-4 col-11 offset-1">
            {showcaseData.map((item, index) => (
                <Showcase_grid_item
                    key={index}
                    id={item.id}
                    backgroundImage={item.backgroundImage}
                    ticker={item.ticker}
                    tickerCode={item.tickerCode}
                    creationTime={item.creationTime}
                    progress={item.progress}
                    minSol={item.minSol}
                    maxSol={item.maxSol}
                    saleStartTime={item.saleStartTime}
                    onClickView={() => alert(`${item.ticker} Viewed`)}
                />
            ))}
        </div>
    );
};

export default showcase_grid_item;
