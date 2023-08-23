import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Articles() {

  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/blogr.io/api/v1/articles');
      const data = await response.data;
      setArticles(data);
      console.log(articles);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(articles);
  }, []);
  return (
    <div>
      {articles?.blogs?.length > 0 ? articles?.blogs?.map(article => {
        return (
          <div>
            <img src={`http://localhost:5000/${article.coverImage}`} alt={article.title} width={400} />
            <p>{article.title}</p>
            <p className='px-10'>{article.categories.map(categ => categ.value)}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} className='px-10' />
          </div>
        )
      }) : <p>No articles available</p>}
    </div>
  )
}

export default Articles