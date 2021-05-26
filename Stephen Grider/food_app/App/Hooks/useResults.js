import {useState, useEffect} from 'react';
import yelp from '../API/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something Went Wrong!');
    }
  };

  useEffect(() => {
    searchApi('american');
  }, []);

  return [searchApi, results, errorMessage];
};
