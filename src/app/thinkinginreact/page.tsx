
import Filterableproducttable from "../components/filterableproducttable";
const products=[ 
    
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "fruits", price: "$1", stocked: true, name: "Peas" }
      
]
function ThinkingInReact() {
  return (
    <div className="text-bold" >Thinking In React 
     <div><Filterableproducttable products={products} /></div>  
    </div>
  )
}

export default ThinkingInReact;