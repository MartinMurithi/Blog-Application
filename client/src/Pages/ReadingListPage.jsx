import React from 'react'
import { useGetSavedArticlesQuery } from '../redux/api/apiSlice' 
import BlogPostCard from '../Components/BlogPostCard';
const ReadingListPage = () => {
  let articleId = "";
  const { isLoading, isError, error, data: savedArticles } = useGetSavedArticlesQuery(articleId);
  console.log(savedArticles);
  return (
    <div>ReadingList
      {savedArticles?.length !== 0 && (
        savedArticles?.map((article) => {
          return (
            <>
              {articleId = article?._id}
              <BlogPostCard blog={article} />
            </>
            
            
          )
        })
      ) }
    </div>
  )
}

export default ReadingListPage