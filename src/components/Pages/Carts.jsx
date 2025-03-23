import { useContext } from "react"
import { CardList } from "../../context/CardListProvider"
import { RiDeleteBin6Line } from "react-icons/ri";

function Carts() {
  const {cardList, incrCard, decrCard, delCard} = useContext(CardList)
  
  const getSum = () => {
      let sum = 0;
    cardList.forEach((cart) => {
        sum += cart.count * cart.price;
    })
    return sum.toFixed(2);
  }

  return (
    <div className="Carts flex flex-col items-center gap-y-6 justify- w-[100%] py-12">
        {
            cardList.map((cart, i) => {
                return (
                    <div key={cart.id} className="flex gap-x-4 max-w-[850px] w-[100%] shadow-[0_0_4px_2px_rgba(0,0,0,.1)] rounded-lg max-sm:flex-wrap justify-center">
                        <img className="max-w-[300px] h-auto" src={cart.thumbnail} alt="" />
                        <div className="grow-1 py-8 pr-12 max-sm:px-12 max-sm:">
                            <h2 className="text-3xl font-medium mb-2">{cart.title}</h2>
                            <div className="flex gap-x-4 mb-10">
                                <div>Brand: <span className="font-bold">{cart.brand}</span></div>
                                <div>Category: <span className="font-bold">{cart.category}</span></div>
                            </div>
                            <div className="flex justify-between max-w-[120px] rounded-lg mb-12">
                                <button className="flex items-center justify-center w-[30px] h-[30px] bg-gray-300 font-bold text-2xl text-black rounded pb-[5px] cursor-pointer hover:text-white hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s]" onClick={() => {incrCard(i)}}>+</button>
                                <span className="font-bold text-[18px] pt-[2px]">{cart.count}</span>
                                <button className="flex items-center justify-center w-[30px] h-[30px] bg-gray-300 font-bold text-2xl rounded pb-[5px] cursor-pointer hover:text-white hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s]" onClick={() => {decrCard(i)}}>-</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-2xl">Price: <span className="font-bold">${cart.price}</span></div>
                                <button className="flex items-center justify-center bg-gray-300 font-medium p-2 text-black rounded pb-[5px] cursor-pointer hover:text-white hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s]" onClick={() => {delCard(i)}}><RiDeleteBin6Line /></button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <p className="font-bold text-2xl">Total Sum: $<span>{getSum()}</span></p>
    </div>
  )
}

export default Carts