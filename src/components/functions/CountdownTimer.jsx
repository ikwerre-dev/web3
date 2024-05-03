import  { useState, useEffect } from 'react';

const CountdownTimer = ({ saleStartTime }) => {
    const [timeLeft, setTimeLeft] = useState("Calculating...");

    useEffect(() => {
        console.log(`Sale starts at: ${saleStartTime}`); // Log the input time

        const targetTime = new Date(saleStartTime).getTime();
        console.log(`Target Time (ms): ${targetTime}`); // Log the target time in milliseconds

        const interval = setInterval(() => {
            const now = new Date().getTime();
            console.log(`Current Time (ms): ${now}`); // Log the current time in milliseconds

            const difference = targetTime - now;
            console.log(`Time Difference (ms): ${difference}`); // Log the difference in milliseconds

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft(`${days}:${hours}:${minutes}:${seconds}`);
            } else {
                setTimeLeft("Time's up!");
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [saleStartTime]);

    return (
        timeLeft
    );
};

export default CountdownTimer;
