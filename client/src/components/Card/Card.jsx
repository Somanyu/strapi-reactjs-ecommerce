import { BsStars } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item?.id}`} className="group relative block overflow-hidden">
      {
        item?.attributes.isNew &&
        <span className="bg-blue-200 font-fredoka z-10 text-sm font-medium inline-flex items-center text-blue-800 p-1 leading-none rounded-md px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 -translate-x-1/2 right-auto top-[1.1rem] left-[3.7rem]">
          <BsStars />
          New Season
        </span>
      }
      <div className="relative h-[350px] sm:h-[450px]">
        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.image?.data?.attributes.url} alt={`${item?.attributes.title}1`} className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0" />
        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.image2?.data?.attributes.url} alt={`${item?.attributes.title}2`} className="absolute rounded-lg inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100" />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-lg font-semibold font-dynaPuff text-gray-700">{item?.attributes.title}</h3>
        <p className="mt-1.5 font-fredoka tracking-wide text-gray-900">${item?.attributes.price}</p>
      </div>
    </Link>
  )
}

export default Card