import React from 'react'

const CartItemCard = ({item,deleteCartItems}) => {
  return (
    <div className='CartItemCard'>
        {/* <img src={item.images} alt="ssa" /> */}
        <div className='productcartinfo'>
        <b className={true ? "redColor" : "greenColor"}>
          {true ? " OutOfStock" : " InStock"}
        </b>
            {/* <Link to={`/product/${item.product}`}className="linkno" >{item.name}</Link> */}
            {/* <span><i class="fa-solid fa-indian-rupee-sign"></i>  {` ${item.price}`}</span> */}
            {/* <p onClick={() => deleteCartItems(item.product)}>remove <i class="fa-solid fa-trash"></i></p> */}
        </div>
    </div>
  )
}

export default CartItemCard