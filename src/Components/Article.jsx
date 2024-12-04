import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Article = () => {
  const [searchParams, setsearchParams] = useSearchParams()
  const SortBy = searchParams.get("SortBy")
  const category = searchParams.get("category")

  const HandleSortBy = () => {
    setsearchParams({
      SortBy: "views",
      category,
    });
  };
  return ( 
    <div>
    <h2>Article</h2>
    <p>SoryBy: {SortBy}   Category: {category} </p>

    <button onClick={HandleSortBy}>Submit the view</button>
    </div>
  )
}

export default Article