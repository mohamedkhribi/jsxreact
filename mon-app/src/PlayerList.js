import Player from "./Player";
import Link from "./Players";

function PlayerList() {
    const user="med"
    return(<div>
{Link.map(el=><Player elname={el.name} elimg={el.imgUrl} elage={el.age} elnati={el.Nationality}elteam={el.team} elnumber={el.jersynumber} elage={el.age}/>)}
</div>)

    
    
}
export default PlayerList