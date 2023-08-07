import CardRepo from "./CardRepo";
import CardUser from "./CardUser";

function Card({
  data,
  category,
  key,
}){
  if(category === 'user') return <CardUser data={data} key={key}/>
  return <CardRepo data={data} key={key}/>
}

export default Card;