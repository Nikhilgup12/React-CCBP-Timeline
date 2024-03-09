import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {course} = props
  const {description, courseTitle, duration, tagsList} = course
  return (
    <div className="course-main-container">
      <div className="course-container">
        <h1 className="project-title"> {courseTitle} </h1>
        <p>
          <AiFillClockCircle /> {duration}
        </p>
      </div>
      <p className="project-para"> {description} </p>
      <ul className="course-list">
        {tagsList.map(each => (
          <li key={each.id} className="project-skill-list">
            {each.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
