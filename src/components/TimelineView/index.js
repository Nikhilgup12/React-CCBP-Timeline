import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  // const course = () => {
  //   const courseCCbp = timelineItemsList.filter(
  //     each => each.categoryId === 'COURSE',
  //   )
  //   return courseCCbp
  // }

  // const ccbpCourse = course()

  // const project = () => {
  //   const courseCCbp = timelineItemsList.filter(
  //     each => each.categoryId === 'PROJECT',
  //   )
  //   return courseCCbp
  // }

  // const ccbpProject = project()

  return (
    <div className="ccbp-container">
      <div>
        <h1 className="ccbp-heading"> My Journey Of </h1>
        <p className="ccbp-para"> CCBP 4.0 </p>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              secondary: 'transparent',
              cardBgColor: '#ffffff',
              cardForeColor: '#2b237c',
              titleColor: ' #0967d2',
            }}
          >
            {timelineItemsList.map(each => (
              <div>
                {each.categoryId === 'COURSE' ? (
                  <CourseTimelineCard course={each} />
                ) : (
                  <ProjectTimelineCard project={each} />
                )}
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
