import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import { Route, NavLink, Switch, Redirect }  from 'react-router-dom';

class App extends Component {
  render () {
    let activeStyle = {
      fontWeight: 'bold',
      color: 'red'
    };

    let links = {
      listStyle: 'none',
      margin: 'auto',
      padding: '0',
      position: 'relative',
      width: '100%',
      textAlign: 'center',
    };

    let styleLI = {
      margin: '10px',
      display: 'inline-block',
    }

    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>

        <hr/>
        
        <header>
          <nav>
            <ul style={links}>
              <li style={styleLI}><NavLink  to="/courses" activeStyle={activeStyle}>Courses</NavLink></li>
              <li style={styleLI}><NavLink  to="/users" activeStyle={activeStyle}>Users</NavLink> </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/courses' component={Courses}/>
          <Route path='/users' component={Users}/>
          <Route path='/all-courses' render={()=> <Redirect to='/courses'/>}/>
          <Route path='/' render={()=> <Redirect to='/courses'/>}/>
          <Route render={() => (<p>Incorrect Page</p>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
