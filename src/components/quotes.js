import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showerror, setError] = useState(false);
  const category = 'happiness';
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const quotes = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'PEmddxjuLBAJ9P3o7rn1eA==Nldmb5gy82ZeZrW5',
          },
        });
        const quotesData = await quotes.json();
        setData(quotesData);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData, setLoading]);

  if (showerror) return <div className="notification">something went wrong!</div>;

  if (loading) return <div className="notification">loading contents .........</div>;

  return (
    <>
      {data.map((quote) => (
        <div className="display" key={quote.category}>
          <p className="quote">
            {quote.quote}
          </p>
          <span className="author">{quote.author}</span>
        </div>
      ))}
    </>
  );
};

export default Quotes;
