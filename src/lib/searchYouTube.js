var searchYouTube = (options, callback) => {
  const {query, max, key} = options;
  $.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=${max}&videoEmbeddable=true&type=video&part=snippet`, (data)=> callback(data.items));
};

export default searchYouTube;