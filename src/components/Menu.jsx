/* eslint-disable react/prop-types */
function Menu({setMenuIndex, generatePDF}) {

    function handleClick(e) {
      setMenuIndex(e.target.value)
    }

    return (
      <section className="Menu">
      <button onClick={(e) => {handleClick(e)}} value={0}>General Info</button>
      <button onClick={(e) => {handleClick(e)}} value={1}>Experience</button>
      <button onClick={(e) => {handleClick(e)}} value={2}>Education</button>
      <button onClick={generatePDF}>Export CV</button>
      </section>
    )
  }
  
  export default Menu
  