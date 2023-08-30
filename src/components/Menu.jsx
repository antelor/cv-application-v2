/* eslint-disable react/prop-types */
function Menu({setMenuIndex}) {

    function handleClick(e) {
      setMenuIndex(e.target.value)
    }

    return (
      <div className="Menu">
      <button onClick={(e) => {handleClick(e)}} value={0}>General Info</button>
      <button onClick={(e) => {handleClick(e)}} value={1}>1</button>
      <button onClick={(e) => {handleClick(e)}} value={2}>2</button>
      <button onClick={(e) => {handleClick(e)}} value={3}>3</button>
      </div>
    )
  }
  
  export default Menu
  