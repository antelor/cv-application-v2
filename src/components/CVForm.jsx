function CVForm({info, setInfo}) {
    
    function handleNameChange(e) {
        let newInfo = {...info};
        newInfo.generalInfo.fullName = e.target.value;
        setInfo(newInfo);
    }

    return (
        <div>
            Info
            <input onChange={(e) => {handleNameChange(e)}}></input>
        </div>
    )
}

export default CVForm
