import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

const List = ({ subCategories, maxPrice, sort, catId, isFeatured }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategories.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <>
      {loading ? "Loading..."
        : error ? "Error"
          : data?.length === 0 ? "No products"
            : data?.map(item => (
              <Card item={item} key={item.id} />
            ))}
    </>
  )
}

export default List