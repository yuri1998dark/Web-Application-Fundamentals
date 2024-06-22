import { Header } from "./Header"
import { Content } from "./Content"

export const Course = ({course}) => {

  return (
    <div>
        <Header/>
        {course.map(course =>  <Content key={course.id}  course={course} />)}
      
    </div>
  )
}
