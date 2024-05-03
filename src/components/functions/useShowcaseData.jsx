function getRandomFutureDate() {
    const now = new Date();
    const futureDays = Math.floor(Math.random() * 6) + 10; // Random number of days from 10 to 15
    const futureHours = Math.floor(Math.random() * 24); // Random number of hours up to 24
    const futureMinutes = Math.floor(Math.random() * 60); // Random number of minutes up to 60

    now.setDate(now.getDate() + futureDays);
    now.setHours(now.getHours() + futureHours);
    now.setMinutes(now.getMinutes() + futureMinutes);

    return now.getTime(); // Return Unix timestamp in milliseconds
}

function randomFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 



const showcaseData = Array.from({ length: 12 }, (v, i) => ({
    id: i + 1,
    // Randomly select a chain
    chain : randomFromArray(["SOL", "Blast", "Base Chain"]),
    PresaleType : randomFromRange(1, 2),
    presaleProgress : randomFromRange(1, 2),
    hot : i+1,
    backgroundImage: require(`../../assets/banner/bg-${(i % 5) + 1}.jpg`), // Adjust if the number of backgrounds is less than 12
    ticker: ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Spider-Man", "Doctor Strange", "Ant-Man", "Wasp", "Falcon", "Winter Soldier"][i % 12],
    tickerCode: ["IRON", "CAP", "THOR", "HULK", "BWID", "HAWK", "SPID", "DRST", "ANTM", "WASP", "FALC", "WINT"][i % 12],
    creationTime: ["3h", "1d", "2d", "5h", "8h", "4d", "6d", "7h", "9h", "2h", "5d", "3d"][i % 12],
    progress: 50 + (i * 5) % 50, // Example progress
    minSol: 1.75 + (i * 0.25), // Example minimum
    marketCap: (1.75 + (i * 0.25)), // Ensure this is formatted correctly
    maxSol: 260 - (i * 20), // Example maximum
    saleStartTime: getRandomFutureDate() // Call the function to get a future date
}));



export default showcaseData;