import CardRepo from "./CardRepo";
import CardUser from "./CardUser";

function Card({
  data,
  category,
}){
  if(category === 'user') return <CardUser data={data}/>
  return <CardRepo data={data}/>
}

export default Card;