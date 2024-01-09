import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import CategoryHeroImage from '../../components/CategoryHeroImage/CategoryHeroImage';
import CategoryTitle from '../../components/CategoryTitle/CategoryTitle';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';

const Products = () => {

  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc")
  const [selectedSubCategories, setSelectedSubCategories] = useState([])

  const { data, loading, error } = useFetch(`/subcategories?populate=*&[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    )
  }


  return (
    <>
      <div className="m mt-[6rem]">
        <section>
          <CategoryHeroImage catId={catId} />
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <CategoryTitle catId={catId} />
              {/* <h2 className="text-xl font-dynaPuff font-bold text-gray-900 sm:text-3xl">Product Collection</h2> */}
              <p className="mt-4 font-fredoka max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                presenting cumae iure dicta incident est ipsam, officia dolor fugit
                natus?
              </p>
            </header>

            <div className="mt-8 block lg:hidden">
              <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                <span className="text-sm font-medium"> Filters & Sorting </span>
                <BsChevronDown className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>

            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
              <div className="hidden space-y-4 lg:block sticky top-28">

                <h3 className="mb-2 font-dynaPuff font-semibold text-gray-900 dark:text-white">Sort by</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input type="radio" name="price" value="asc" id="asc" onChange={(e) => setSort("asc")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="asc" className="w-full font-fredoka py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lowest Price </label>
                    </div>
                  </li>

                  <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <input type="radio" name="price" value="desc" id="desc" onChange={(e) => setSort("desc")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="desc" className="w-full font-fredoka py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Highest Price</label>
                    </div>
                  </li>
                </ul>

                <div className='my-10'>
                  <h3 className="font-dynaPuff font-semibold text-gray-900 dark:text-white">Subcategory</h3>
                  <div className="mt-1 space-y-2">
                    <div className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                      {/* <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Product Categories </span>
                      </summary> */}
                      <div className="bg-white">
                        <ul className="space-y-1 p-4">
                          {loading ? <>Loading...</> : error ? <>Error...</> : data?.map(item => (
                            <li key={item.id}>
                              <label htmlFor={item.id} className="inline-flex items-center gap-2">
                                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} className="h-5 w-5 rounded border-gray-300" />
                                <span className="text-sm font-fredoka font-medium text-gray-700">{item.attributes.title}</span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 lg:py-8">
                <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                  <List catId={catId} maxPrice={maxPrice} sort={sort} subCategories={selectedSubCategories} />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Products