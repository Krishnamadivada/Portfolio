import React from 'react'
import Dashboard from '../../assets/images/dashboard.png'
import Todo from '../../assets/images/todo.png'
import Expenses from '../../assets/images/expenses.png'
import Weather from '../../assets/images/weather.png'
import { Button, Carousel } from 'antd'
import "./Project.css"

const Projects = () => {

  return (
    <section id='project'>
        <div className='projectTextBox'>
        <span className='projectText'>My Projects</span>
        <div className='lineAnimation'></div>
        </div>
        <div className='projectContainer'>
        <div className='projectContent'>
        <span className='projectTitle'>All in one dashboard</span>
        <p className='projectPara'> This React dashboard application was crafted using Material UI,
         Firebase, and Redux. The dashboard boasts a seamless user authentication system with signup
          and login functionalities. Upon successful login, users are directed to the main application
           dashboard. The dashboard offers a set of key features including a Todo section with full
            CRUD operations utilizing Firebase, an Expenses section leveraging the power of Redux,
             and a Weather Forecast feature that retrieves data from the OpenWeatherMap API.
         </p>
         <a href='https://all-in-one-flame.vercel.app/' target='_blank' rel="noreferrer">
         <Button className='projectbtn' type="primary" shape="round" size='large'>Explore the project</Button>
         </a>
      </div>
      <div className='projectImageBox'>
      <Carousel autoplay className='carousel'>
      <img className='projectImage' src={Dashboard} alt='Dashboard'/>
      <img className='projectImage' src={Todo} alt='Todo'/>
      <img className='projectImage' src={Expenses} alt='Expenses'/>
      <img className='projectImage' src={Weather} alt='Weather'/>
      </Carousel>
      <div className='projectImageFrame' />
      </div>
      </div>
    </section>
  )
}

export default Projects