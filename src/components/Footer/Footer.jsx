import React from 'react'
import Logo from '../../assets/images/logo.png'
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import './Footer.css'

const Footer = () => { 

    const currentYear = new Date().getFullYear();

  return (
    <div className='footerContainer'>
      <img className='footerLogo' src={Logo} alt="MKV" />
      <div className='copyrightsBox'>
      <p className='footerText'> {currentYear} &copy; Krishna Vamsi Madivada. All rights reserved.</p>
      <p className='footerText'>Icons by <a href='https://icons8.com/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>icons8.com.</a></p>
      </div>
      <div className='socialContainer'>
      <div className='socialIconBox'>
      <a href='https://www.linkedin.com/in/krishna-vamsi-madivada-a9aab625a/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <LinkedinOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://github.com/Krishnamadivada' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <GithubOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://www.instagram.com/vamsi.madivada/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <InstagramOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://www.facebook.com/vamsi.madivada.9/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <FacebookOutlined />
      </a>
      </div>
      </div>
    </div>
  )
}

export default Footer