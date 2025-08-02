import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [show, setShow] = useState('book');

  const courses = [
    { id: 1, name: "React Basics", instructor: "Sam" },
    { id: 2, name: "Node.js Advanced", instructor: "Anna" },
    { id: 3, name: "Full Stack Web", instructor: "Kyle" }
  ];

  const handleSelect = (value) => setShow(value);

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1> Blogger App</h1>

      <div>
        <button onClick={() => handleSelect('book')}>Show Book</button>
        <button onClick={() => handleSelect('blog')}>Show Blog</button>
        <button onClick={() => handleSelect('course')}>Show Course</button>
      </div>

      <hr />
 {show === 'book' && <BookDetails />}
  {show === 'blog' ? <BlogDetails /> : null}
 {show === 'course' ? (
        <>
          <CourseDetails />
          <h3> Course List (using map):</h3>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                {course.name} - {course.instructor}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {/* Using Element Variable */}
      <div style={{ marginTop: 20 }}>
        <h3> Using Element Variable</h3>
        {(() => {
          let componentToRender;
          switch (show) {
            case 'book':
              componentToRender = <BookDetails />;
              break;
            case 'blog':
              componentToRender = <BlogDetails />;
              break;
            case 'course':
              componentToRender = <CourseDetails />;
              break;
            default:
              componentToRender = <p>Select a section</p>;
          }
          return componentToRender;
        })()}
      </div>
    </div>
  );
}

export default App;
