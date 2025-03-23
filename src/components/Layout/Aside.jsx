import { useContext } from "react";
import { Category } from "../../context/CategoryProvider";

function Aside({categories}) {
const {setCategory} = useContext(Category);

  return (
    <div className="Aside hidden  md:block w-[25%]">
      <div className="flex flex-col gap-y-2 text-center py-10 px-3 rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,.1)]">
        <h2 className="text-left font-bold text-[21px]">Categories:</h2>
        <button className="bg-[#873EFF] hover:bg-[#483ac9d2] active:bg-[#873EFF] duration-[.3s] cursor-pointer py-2 rounded-lg text-white font-medium" onClick={() => setCategory(null)}>All Products</button>
        {
          categories.map((category) => {
            return (
              <button key={category.name} className="bg-[#873EFF] hover:bg-[#483ac9d2] active:bg-[#873EFF] duration-[.3s] cursor-pointer py-2 rounded-lg text-white font-medium" onClick={() => setCategory(category.slug)}>{category.name}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Aside