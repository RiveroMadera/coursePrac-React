import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, steVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => steVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
/*
Async/Await

useEffect(() => {
  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:3000/initialState");
      const data = await response.json();
      return setVideos(data);
    } catch {
      console.log(error);
    }
  };
  fetchVideos();
}, []);
*/
