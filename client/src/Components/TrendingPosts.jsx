import React from 'react'
import { AiOutlineLineChart } from 'react-icons/ai'

function PopularPosts() {
  return (
    <>
      <section className='flex items-center space-x-2 bg-red-500 mt-6 pl-4'>
        <AiOutlineLineChart  className='text-xl'/>
        <h3 className='text-xl font-bold'>Trending Posts</h3>
      </section>

      {/* Trending posts list */}
      <article className=''>
        {/* A single article post */}
        <section>
          <div>
            <p>Author</p>
            <h5>Title of thr blog post</h5>
            <p>Date and time</p>
            <p>Category one</p>
            <p>Category two</p>
            <p>Save btn</p>
          </div>
          <img src="./assets/Images/Bcg.jpg" alt="" />
        </section>
      </article>
      
    </>
  )
}

export default PopularPosts