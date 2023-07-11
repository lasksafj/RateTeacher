import React from 'react';

class RateMyProfessors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professorName: '',
      course: '',
      rating: '',
      comment: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Access form values from state
    const { professorName, course, rating, comment } = this.state;

    // Process the form data
    // You can perform further actions here, such as sending the data to a server

    // Reset form values
    this.setState({
      professorName: '',
      course: '',
      rating: '',
      comment: ''
    });
  }

  handleChange = (event) => {
    const { id, value } = event.target;

    this.setState({
      [id]: value
    });
  }

  render() {
    const { professorName, course, rating, comment } = this.state;

    return (
      <div>
        <header className="container my-4">
          <h1 className="text-center">Rate My Professors</h1>
        </header>

        <main className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <form onSubmit={this.handleSubmit} className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Rate a Professor</h2>
                  <div className="mb-3">
                    <label htmlFor="professorName" className="form-label">Professor's Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="professorName"
                      value={professorName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course</label>
                    <input
                      type="text"
                      className="form-control"
                      id="course"
                      value={course}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="rating"
                      min="1"
                      max="5"
                      value={rating}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                      className="form-control"
                      id="comment"
                      rows="3"
                      value={comment}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <p>Already have an account? <a href="#" className="btn btn-primary">Log In</a></p>
              <p>New user? <a href="#" className="btn btn-secondary">Sign Up</a></p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 offset-lg-3 text-center" id="image-container">
              <h3>Professor Toan Phong Truong</h3>
              <p>Department: Computer Science</p>
              <img
                src="E:/RatemyProf_project/Prof_toan.jpg"
                className="img-fluid rounded"
                alt="Professor name"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default RateMyProfessors;
