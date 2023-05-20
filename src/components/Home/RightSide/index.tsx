import './rightside.scss'


function RightSide() {
  return (
    <>
      <div className="rightside-container">
        <div className="question-container">
          <img src="./images/logoQuestion.png" alt="" />
          <p className="question">What category best describes your website's purpose? (e.g. store, services, portfolio, blog)</p>
        </div>

        <p className="label">Search to find the theme that matches your profession, passion or hobby</p>

        <div className="search-container">
          <img className="search-icon" src="./images/browse.svg" alt="" />

          <input className="search" type="text" placeholder="For example: Beauty Salon, Clothing Store, Marketing Agency" />
        </div>

        <p className="label">Or browse through categories:</p>

        <div className="buttons-container">
          <div className="button">
            <img className="button-icon" src="./images/store.svg" alt="" />
            <p className="button-text">Online Store</p>
          </div>

          <div className="button">
            <img className="button-icon" src="./images/offer.svg" alt="" />
            <p className="button-text">Offer Services</p>
          </div>

          <div className="button">
            <img className="button-icon" src="./images/courses.svg" alt="" />
            <p className="button-text">Courses (Online or Offline)</p>
          </div>
        </div>

        <div className="buttons-container">
          <div className="button">
            <img className="button-icon" src="./images/blog.svg" alt="" />
            <p className="button-text">A Blog</p>
          </div>

          <div className="button">
            <img className="button-icon" src="./images/portfolio.svg" alt="" />
            <p className="button-text">OCreate a Portfolio</p>
          </div>

          <div className="button">
            <img className="button-icon" src="./images/food.svg" alt="" />
            <p className="button-text">Food & Drinks</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSide;