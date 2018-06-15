import React, { Component } from 'react';

import './Courses.css';
import { withRouter } from 'react-router-dom';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    handleRoute = (id) => {
        console.log(id);
        this.props.history.push(
            {
              pathname: "/courses/"+id,
              state: { some: 'state' }
            }
        );

    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article 
                                className="Course" 
                                key={course.id}
                                onClick={() => this.handleRoute(course.id)}>
                                {course.title} 
                                </article>;
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default withRouter(Courses);