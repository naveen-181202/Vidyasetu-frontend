import { Link, useNavigate, useParams } from "react-router-dom";
import "./courseStudy.css";
import React, { useEffect } from "react";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();
  if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
    return navigate("/");
  }
  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>by-{course.createdBy}</h5>
          <h5>Duration-{course.duration}</h5>
          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
          <Link to={`/ai/quiz/${params.id}`}>
            <h1>Wanna give a quiz?</h1>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
