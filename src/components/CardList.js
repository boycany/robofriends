import react from 'react'
import Card  from './Card'

const CardList = ({robots}) => {

    return (
        <div className="pv4"> 
            {
                robots.map((user)=>{
                        // console.log(user)
                    return (
                        <Card 
                            key={user.id} //key這個屬性應該是一個獨特、不會改變的值，如果這個項目被移除，也不會影響其他的資料
                            name={user.name} 
                            email={user.email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList