import { useEffect, useState } from "react";
import { apiClient } from "../../utils/Api";
import { useParams } from "react-router"
import { productsUrl } from "../../utils/Url";

function ProductDetail() {
    let params = useParams();
    const [productList, setProductList] = useState([])

    const getProducts = async () => {
        let res = await apiClient.get(`${productsUrl}/${params.id}`);
        setProductList(res.data);
    }
    
      useEffect(() => {
        getProducts()
      }, [])

  return (
    <div className="ProductDetail my-20">
      <div className="container flex gap-x-15 justify-center">
        <img className="shadow-md w-[400px]" src={productList.thumbnail} alt={productList.title} />
        <div className="product-detail--content">
          <h2 className="text-[50px] font-bold">{productList.title}</h2>
          <div className="flex gap-x-4 mb-10">
            <div>Brand: <span className="font-bold">{productList.brand}</span></div>
            <div>Category: <span className="font-bold">{productList.category}</span></div>
            <div>Price: <span className="font-bold">${productList.price}</span></div>
          </div>
          <p className="max-w-[500px]">{productList.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail