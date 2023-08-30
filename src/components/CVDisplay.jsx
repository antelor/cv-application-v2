/* eslint-disable react/prop-types */
function CVDisplay({ info }) {

  return (
    <section className="Display">
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

        <div>
            {info.experience.map((job, index)=>{
                return <div key={index}>{job.position}, {job.location} {job.desc} {job.startDate} {job.endDate} </div>
            } )}
        </div>
    </section>
  )
}

export default CVDisplay
