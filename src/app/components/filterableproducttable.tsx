

function filterableproducttable({products} :any) {
   
  return (
    <div className='py-5'>
        <form className='px-3 flex flex-col gap-5' >
       <input type="text" placeholder='search any product'/>
       <label > 
        <input type="checkbox" />only show products that in stock
       </label>
       </form>
       <div className="mt-3 px-3" >{products.map((product:any,index:number)=>{ 
        return <div  key={index}>{product.name}   {product.price}</div>
       })}
</div>
    </div>
    
  )
}
export default filterableproducttable;
