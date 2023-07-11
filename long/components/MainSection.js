import React, { useEffect } from 'react';
import Comment from '../Comment';
import '../App.css';
// import { Button } from './Button';
import './MainSection.css';

const comment1 = {
    "Quality": "3.0",
    "Difficulty": "3.0",
    "CourseCRN": "HSC403",
    "Date": "May 11th, 2023",
    "Comment": "Class was pretty boring. Basically just a stats className and barely had anything to do with the \"community health\" part of the title. Lectures were super long and boring. There are 2 massive projects at the end of the semester which were very tricky. Professor was nice and caring."
}

const comment2 = {
    "Quality": "5.0",
    "Difficulty": "3.0",
    "CourseCRN": "ENGR361",
    "Date": "May 11th, 2023",
    "Comment": "Class was pretty boring. Basically just a stats className and barely had anything to do with the \"community health\" part of the title. Lectures were super long and boring. There are 2 massive projects at the end of the semester which were very tricky. Professor was nice and caring."
}

const MainSection = () => {
  return (
    <div className="main">
        <div className="teacher--info__container">
            <div className="teacher--info__content">
                <div className="teacher--rating__content">
                    <div className="teacher--rating__container">
                        <div id="teacher--rating__content">4.4</div>
                        <div id="teacher--rating__description">/5</div>
                    </div>
                    <div className="rating--counter__container">
                        Overall Quality Based on <a href="#">4 ratings</a>
                    </div>
                </div>
                <div classNameName="teacher__container">
                    <div className="teacher--name">
                        Binh Goldstein
                    </div>
                    <div className="teacher--department">
                        Professor in the <a href="#">Engineering department</a> at <a href="#">California State University Long Beach</a>
                    </div>
                </div>
                <div className="take--again--difficulty__container">
                    <div className="take--again__container">
                        <div className="take--again--difficulty__content">
                            100%
                        </div>
                        <div className="take--again--difficulty__description">
                            Would take again
                        </div>
                    </div>
                    <div className="difficulty__container">
                        <div className="take--again--difficulty__content">
                            2.9
                        </div>
                        <div className="take--again--difficulty__description">
                            Level of Difficulty
                        </div>
                    </div>
                </div>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  Rate Professor Goldstein 
                </Button> */}
                <button className="rate__btn">
                  <a href="#">Rate Professor Goldstein</a>
                </button>
                <div className="professor--correction__container">
                  <a className="professor__content" href="#">
                      I'm Professor Goldstein
                  </a>
                  <a className="correction__content" href="#">
                        Submit a Correction
                  </a>
                </div>
                <div className="teacher--tags__container">
                    <div className="teacher--tags__header">
                        Professor Goldstein's Top Tags
                    </div>
                    <div className="teacher-tags__content">
                        <span>GIVE GOOD FEEDBACK</span>
                        <span>GROUP PROJECTS</span>
                        <span>CLEAR GRADING CRITERIA</span>
                        <span>LOTS OF HOMEWORK</span>
                        <span>PARTICIPATION MATTERS</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="rating--distribution__img--container">
            <img src="images/ratingdistribution.png" alt="" id="rating--distribution__img" />
        </div>
        <div className="similar--teachers__container">
            <div className="similar--teachers__header">
                Check out Similar Professors in the Engineering Department
            </div>
            <ul className="similar--teachers__content">
                <li className="sinmilar--teachers__list">
                    <a className="similar--teachers__link" href="#">
                        <span className="similar--teachers__score">
                            5.00
                        </span>
                        <span className="similar-teachers__name">
                            Andy Niknafs
                        </span>
                    </a>
                </li>
                <li className="sinmilar--teachers__list">
                    <a className="similar--teachers__link" href="#">
                        <span className="similar--teachers__score">
                            5.00
                        </span>
                        <span className="similar-teachers__name">
                            Andy Niknafs
                        </span>
                    </a>
                </li>
                <li className="sinmilar--teachers__list">
                    <a className="similar--teachers__link" href="#">
                        <span className="similar--teachers__score">
                            5.00
                        </span>
                        <span className="similar-teachers__name">
                            Andy Niknafs
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        {/* Student's Comments Section */}
        <div className="student--rating__container">
            <div className="student--ratings__counter">
                <a href="#">4 Student Ratings</a>
            </div>
            
            <div className="student--rating--comment__container">
                <div className="dropdown">
                    <button className="courses_btn">
                        <a href="#">All courses</a>
                    </button>
                    {/* <div className="dropdown-content">
                        <a href="#">All courses</a>
                        <a href="#">ENGR361 (3)</a>
                        <a href="#">HSC403 (1)</a>
                    </div> */}
                </div>
                <ul className="student--ratings__list">
                    <Comment comment1={comment1} />
                    <Comment comment1={comment1} />
                    <Comment comment1={comment1} />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MainSection;