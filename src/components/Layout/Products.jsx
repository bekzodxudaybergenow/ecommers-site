import { useContext, useEffect, useState } from "react";
import { apiClient } from "../../utils/Api";
import Card from "../Scenes/Card"
import Aside from "./Aside";
import { categoriesUrl, productsUrl, searchUrl } from "../../utils/Url";
import { Category } from "../../context/CategoryProvider";




function Products() {
  const [productList, setProductList] = useState([])
  const [categories, setCategories] = useState([])
  const {category, setCategory} = useContext(Category)
  const [search, setSearch] = useState(null);
  const [pages, setPages] = useState([]);
  const [skip, setSkip] = useState(1);

  
  const getProducts = async () => {
    let res = await apiClient.get(category === null ? productsUrl + `?limit=20&skip=${(skip - 1) * 20}` : `${productsUrl}/category/${category}`);

    if(res.status == 200) {
      setProductList(res.data.products);

      let paginationList = []
      for(let i = 1; i <= Math.ceil(res.data.total / 20); i++) {
        paginationList.push(i);
      }
      setPages(paginationList);
    }
  }

  const getCategories = async () => {
    let res = await apiClient.get(`${categoriesUrl}`);
    setCategories(res.data);
  }

  const getSearch = async () => {
    let res = await apiClient.get(`${searchUrl}${search}`);

    if(res.status == 200) {
      setProductList(res.data.products);
    }
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [category, skip])

  return (
    <div className="flex py-15 gap-x-5">
      <div className="w-[100%] md:w-[75%]">
          <div className="Input flex justify-center mb-15 gap-x-3">
            <input className="w-[400px] outline-none rounded px-6 py-2 shadow-[0_0_4px_2px_rgba(0,0,0,.1)]" type="text" placeholder="search" onChange={(e) => {setSearch(e.target.value)}}/>
            <button className="bg-[#873EFF] hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s] cursor-pointer block w-[160px] rounded-[5px] text-white py-2 px-2 mt-auto outline-none" onClick={() => {getSearch()}}>Search</button>
          </div>
          <div className="Products">
            <div className="product-list flex justify-center flex-wrap gap-y-8 gap-x-4">
              {
                productList.map((product) => {
                  return (
                    <Card key={product.id} product={product } title={product.title} image={product.thumbnail} price={product.price} id={product.id} />
                  )
                })
              }
            </div>
            <div className="flex justify-center flex-wrap mt-10 gap-3">
              {
                pages.map((page) => {
                  return (
                    <span key={page} className={`flex items-center justify-center  max-w-[40px] w-[100%] px-4 py-2 cursor-pointer hover:bg-[#873EFF] hover:text-white duration-[.3s] box-s shadow-[0_0_4px_2px_rgba(0,0,0,.1)] rounded-md ${skip == page && 'bg-[#873EFF] text-white'}`} onClick={() => {setSkip(page)}}>{page}</span> 
                  )
                })
              }
            </div>
          </div>
      </div>
      <Aside categories={categories}/>
    </div>
  )
}

export default Products