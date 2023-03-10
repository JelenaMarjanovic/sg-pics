import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID nEr9O4Epyy8YC-glUHy-NAqpLFGYcberuPrjNtZGcK4'
    },
    params: {
      query: 'cars'
    }
  });

  console.log(response);
  
  return response;
};

export default searchImages;