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
                            key={user.id} 
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