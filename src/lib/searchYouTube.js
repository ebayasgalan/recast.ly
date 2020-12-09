var searchYouTube = (options, callback) => {
  const {query, max, key} = options;
  console.log('searchYouTube is being invoked!');
  console.log('query: ', query, 'max: ', max);
  console.log('callback: ', callback);
  $.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=${max}&videoEmbeddable=true&type=video`, ()=> callback(data));
};

export default searchYouTube;