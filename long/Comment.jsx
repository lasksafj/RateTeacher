import React from "react"

const Comment = ({ comment1 }) => {
  return (
    <li className="student--ratings__items">
      <div className="student--rating--comment__content">  
          <div className="student--rating__container">
              <div className="student--rating--quality__container">
                  <div className="student--rating--quality__header">
                      QUALITY
                  </div>
                  <div className="student--rating--quality__content">
                      {comment1.Quality}
                  </div>
              </div>
              <div className="student--rating--difficulty__container">
                  <div className="student--rating--difficulty__header">
                      DIFFICULTY
                  </div>
                  <div className="student--rating--difficulty__content">
                      {comment1.Difficulty}
                  </div>
              </div>
          </div>
          <div className="student--comment__container">
              <div className="student--crn--date_container">
                  <div className="student--rating--crn">
                      {comment1.CourseCRN}
                  </div>
                  <div className="student--rating--date">
                      {comment1.Date}
                  </div>
              </div>
              <div className="student--rating--notes">
                  <div>
                      For Credit: <span> Yes</span>
                  </div>
                  <div>
                      Attendance: <span> Not Mandatory</span>
                  </div>
                  <div>
                      Grade: <span> A</span>
                  </div>
                  <div>
                      Textbook: <span> Yes</span>
                  </div>
                  <div>
                      Online className: <span> Yes</span>
                  </div>
              </div>
              <div className="student--rating--comment">
                {comment1.Comment}
              </div>
              <div className="student--rating--keyword">
                  <span>
                      CLEAR GRADING CRITERIA
                  </span>
                  <span>
                      LECTURE HEAVY
                  </span>
                  <span>
                      ACCESSIBLE OUTSIDE CLASS
                  </span>
              </div>
          </div>
      </div>
  </li>
  )
}

export default Comment;