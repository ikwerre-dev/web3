import React, { useEffect, useRef, useState, memo } from 'react';

function TradingViewWidget() {
    const container = useRef();
    const scriptAdded = useRef(false);
    var [theme, setTheme] = useState('light'); // State to manage theme

    useEffect(() => {
        // Check for the 'dark' class on #main-body
        const mainBody = document.getElementById('main-body');
        if (mainBody && mainBody.classList.contains('dark')) {
            theme = ('dark');
        } else {
            theme = ('light');
        }
    }, []); // Dependency array is empty, so it runs only once

    useEffect(
        () => {
            if (!scriptAdded.current) {
                const script = document.createElement("script");
                script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
                script.type = "text/javascript";
                script.async = true;
                script.innerHTML = JSON.stringify({
                    "autosize": true,
                    "symbol": "SOL",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": theme, // Use the state variable here
                    "style": "1",
                    "locale": "en",
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "calendar": false,
                    "support_host": "https://www.tradingview.com"
                });
                container.current.appendChild(script);
                scriptAdded.current = true;
            }
        },
        [theme] // Re-run this effect if the theme changes
    );

    return (
       <div className="cont" style={{height: "25rem"}}>
         <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
       </div>
    );
}

export default memo(TradingViewWidget);
