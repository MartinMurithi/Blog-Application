import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticle] = useState({});

  const { _id } = useParams();
  console.log(_id);

  const fetchBlog = async () => {
    try {
      const blog = await axios.get(
        `http://localhost:5000/blogr.io/api/v1/articles/${_id}`
      );
      setArticle(blog);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  console.log(article);
  return (
    <div>
          <h1>{article?.data?.blog?.title}</h1>
          <p>{ article?.data?.blog?.content }</p>
    </div>
  );
}

export default ArticlePage;
