import react from 'react'
//即使沒有用到react，還是要import，才能使用JSX

const Card = ({name, email})=>{
    // console.log(id, username, name, email)
    return (
        <div className='tc bg-light-blue dib ma3 pa3 br3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${name}?size=200x200`} alt='Robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card