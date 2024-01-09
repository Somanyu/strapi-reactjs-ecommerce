import React from 'react'
import useFetch from '../../hooks/useFetch'

const CategoryTitle = ({ catId }) => {

  const { data } = useFetch(`/categories/${catId}`)

  return (
    <div>
      <h2 className="text-xl font-dynaPuff font-bold text-gray-900 sm:text-3xl">{data?.attributes.title} Collection</h2>
    </div>
  )
}

export default CategoryTitle