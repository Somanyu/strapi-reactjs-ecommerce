
import useFetch from '../../hooks/useFetch'

const CategoryHeroImage = ({ catId }) => {
    const { data, loading, error } = useFetch(`/categories/${catId}?populate=*`)

    return (
        <div>
            {loading ? 'Loading...' : error ? 'Error' : <img className="w-full h-[300px] object-cover" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} alt="" />}
        </div>
    )
}

export default CategoryHeroImage