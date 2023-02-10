import { Link } from 'react-router-dom'
import style from'./ProductList.module.css'
import { useState } from 'react'//React Hook
import Title from './Title'

export default function ProductList () {
    
    let productList = [
        {"id": 1 ,"name" :"Lipstick","price":100,"image":"lipstick.jpg","description":"red lipstick"},
        {"id": 2 ,"name" :"Liquid foundation","price":200,"image":"liquid foundation.jpg","description":"liquid foundation"},
        {"id": 3 ,"name" :"Eyeliner","price":50,"image":"eyeliner.jpg","description":"eyeliner"},
        {"id": 4 ,"name" :"Eyeshadow","price":100,"image":"eyeshadow.jpg","description":"eyeshadow"},
        {"id": 5 ,"name" :"Carmine","price":200,"image":"carmine.jpg","description":"carmine"},
        {"id": 6 ,"name" :"Concealer","price":300,"image":"concealer.jpg","description":"concealer"}
    
    ]
    //let product="cosmictic化妝品"
    //const[showProduct,setShowProduct] =useState(false)

    /*const handleClick= ()=>{
        //product ='react'
        setProduct('react')
        console.log(product)
        {showProduct&&<button onClick={()=>{setShowProduct(false)}}>隱薉產品</button>}
        {!showProduct&&<button onClick={()=>{setShowProduct(true)}}>顯示產品</button>}
    }*/
    
    return (
        <div>
            
           <Title mainTitle='請選擇產品'subTitle/>
          
            <div>
                {
                         productList.map(product =>(
                        <div className={style.productBorder}key={product.id}>
                            {product.name}<br/>
                            {product.price}<br/>
                            <Link to ={'/product/'+ product.id}>
                          <img src={process.env.PUBLIC_URL+'/img/'+product.image}/>
                          </Link>
                          <br/>
                            {product.description}<br/>
                        </div>
                        ))

                }
            </div>
        </div>
    )
}

