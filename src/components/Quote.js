import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: { 'X-Api-Key': 'DGUOoZHyZoFCEgCuZMbZxQ==mrddGoN1EMFfSyyd' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching quote');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
