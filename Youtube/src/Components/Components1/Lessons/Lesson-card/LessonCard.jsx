import './lesson-card.css'
const LessonCard = ({img}) => {
  return (
      <div className='card'>
          <img src={img} alt="img" />
    </div>
  )
}

export default LessonCard