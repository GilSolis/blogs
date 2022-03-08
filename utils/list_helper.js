const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    const reducer = (sum, item) => sum + item.likes;
    return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
  };

  const favoriteBlog = (blogs) => {
    return blogs
    
    // blogs.length === 0
    //   ? 0
    //   : blogs.reduce((current, prev) =>
    //       current.likes > prev.likes ? current : prev
    //     );
  }

  
  
  module.exports = {
    dummy, totalLikes, favoriteBlog
  }