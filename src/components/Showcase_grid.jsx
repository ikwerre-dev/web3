import React from 'react';
import './Showcase.css'; 
import Showcase_grid_item from './Showcase_grid_item';  
import bannerAvatar from '../assets/banner-avatar.png';
import showcaseData from './functions/useShowcaseData';




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
                    marketCap={item.marketCap}
                    saleStartTime={item.saleStartTime}
                    onClickView={() => alert(`${item.ticker} Viewed`)}
                />
            ))}
        </div>
    );
};

export default showcase_grid_item;
