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
      <div className="container flex gap-x-15 justify-center max-[720px]:flex-col max-[720px]:justify-center">
        <img className="shadow-md w-[400px] max-[720px]:w-[350px] max-[720px]:mx-auto max-[720px]:mb-10" src={productList.thumbnail} alt={productList.title} />
        <div className="product-detail--content">
          <h2 className="text-[50px] font-bold max-[840px]:text-[28px] max-[720px]:text-center max-[375px]:mb-6">{productList.title}</h2>
          <div className="flex gap-x-4 mb-10 max-[840px]:mb-5 max-[720px]:justify-center max-[720px]:items-center">
            <div className="max-[375px]:text-center">Brand: <span className="font-bold">{productList.brand}</span></div>
            <div  className="max-[375px]:text-center">Category: <span className="font-bold">{productList.category}</span></div>
            <div className="max-[375px]:text-center">Price: <span className="font-bold">${productList.price}</span></div>
          </div>
          <p className="max-w-[500px] max-[720px]:text-center max-[720px]:mx-auto">{productList.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail