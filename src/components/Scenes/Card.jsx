import { useContext } from "react"
import { Link } from "react-router-dom"
import { CardList } from "../../context/CardListProvider"

function Card({product, title, image, price, id}) {
  const {checkCardList} = useContext(CardList)
  return (
    <div className='max-w-[275px] rounded-[10px] pb-5 px-3 shadow-[0_0_4px_2px_rgba(0,0,0,.1)] flex flex-col'>
        <img className="w-[300px] mb-2 min-h-[250px]" src={image} alt="" />
        <h2 className="text-[14px] text-gray-500">{title}</h2>
        <div className="flex gap-x-2 items-center  mb-2">
            <div className="block text-[18px]"> Price: <span className="font-bold">${price}</span></div>
            <Link to={`/product-detail/${id}`} className="text-gray-600 text-[15px] hover:text-gray-700 duration-[.3s]">more...</Link>
        </div>
        <button className="bg-[#873EFF] hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s] cursor-pointer block w-[100%] rounded-[5px] text-white py-1 mt-auto" onClick={() => {checkCardList({...product, count: 1})}}>Buy it now</button>
    </div>
  )
}

export default Card

