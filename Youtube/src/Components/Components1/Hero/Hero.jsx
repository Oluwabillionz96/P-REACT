import './hero.css'
import LessonName from './LessonName'

const Hero = () => {
  return (
    <section>
      <div className="main-container">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <div className="search-field">
          <input type="search" />
          <button>Search</button>
        </div>
        <div className="lorems">
          <LessonName />
          <LessonName />
          <LessonName />
        </div>
      </div>
    </section>
  );
}

export default Hero