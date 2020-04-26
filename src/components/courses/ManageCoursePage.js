import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => console.log(error));
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <div>
        <h2>Manage Courses</h2>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
