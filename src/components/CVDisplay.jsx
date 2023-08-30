/* eslint-disable react/prop-types */
function CVDisplay({ info }) {

  return (
    <div>
        <div>
            <h1>
                {info.generalInfo.fullName}
            </h1>
            {info.generalInfo.website}
            {info.generalInfo.location}
            {info.generalInfo.email}
            {info.generalInfo.phone}
        </div>

        <div>
            {info.generalInfo.summary}
        </div>

        <div>
            {info.skills.map( (skill, index) => {
                return <div key={index}>{skill.title}: {skill.desc}</div>
            })}
        </div>

    </div>
  )
}

export default CVDisplay
