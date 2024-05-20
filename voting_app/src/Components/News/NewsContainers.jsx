import React, { useEffect, useState } from 'react';

export default function NewsContainers() {
    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1547c43b778c46ebac28737e9503fb1c");
            const data = await response.json();
            setMyNews(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-center sd:flex-col">
            {mynews.map((article, index) => (
                article.urlToImage && (
                    <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-grey-100 m-4 border-white">
                        <img 
                            src={article.urlToImage} 
                            alt={article.title} 
                            className="w-full h-48 object-cover transition-transform transform hover:scale-110" 
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-sky-400">{article.title}</div>
                            <p className="text-white text-base">{article.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href={article.url} target="_blank" rel="noopener noreferrer" className="text-sm text-white">Read More</a></button>  
                        </div>
                    </div>
                )
            ))}
        </div>
    );
}
