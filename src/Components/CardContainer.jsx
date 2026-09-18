import Card from './Card.jsx'
import './CardContainer.css'
function CardContainer({datas}){
    return(
        <div className="CardContainer">
            {datas.map((data)=>(<Card key={data.id}property={data}/>))}
        </div>
    )
}
export default CardContainer