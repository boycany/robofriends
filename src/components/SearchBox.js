import react from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" 
                   type="search" 
                   placeholder="search robots" 
                   onChange={searchChange}  
                   //callback function，所以沒加()，onChange事件發生時，才啟動function
            />
        </div>
    )
}


export default SearchBox