import React from 'react';
import './Showcase.css';
import Showcase_grid_item from './Showcase_grid_item';
import bannerAvatar from '../assets/banner-avatar.png';
import showcaseData from './functions/useShowcaseData';





const showcase_grid_item = () => {
    return (
        <div className="row mt-4 col-11 offset-1 showcase-filter-box">
            {showcaseData.map((item, index) => (
                <Showcase_grid_item
                    key={index}
                    id={item.id}
                    chain={item.chain}
                    PresaleType={item.PresaleType}
                    presaleProgress={item.presaleProgress}
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
            <div class=" no-records text-center pink">No record found</div>
        </div>
    );
};

export default showcase_grid_item;
