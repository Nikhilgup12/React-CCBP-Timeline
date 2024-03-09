import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectTitle, imageUrl, description, duration, projectUrl} = project
  return (
    <div>
      <img src={imageUrl} className="project-image" alt={projectTitle} />
      <div className="project-title-container">
        <h1 className="project-title"> {projectTitle} </h1>
        <p className="project-para">
          <AiFillCalendar /> {duration}
        </p>
      </div>
      <p className="project-para"> {description} </p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
