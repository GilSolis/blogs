const listHelper = require('../utils/list_helper')

describe("favorite blog", () => {
    const blogs =         {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
          }
   

    test("favorite blog", () => {
        const result = listHelper.favoriteBlog(blogs)
        
        expect(result).toEqual({
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          likes: 12,
        });
      });

})