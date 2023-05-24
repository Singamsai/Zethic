import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <div>
            <h1>Discover <br/>Plots</h1><br/><br/>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <p>Copyright @ 2023 City Plots</p>
      </div>
      <div className='footer_right'>
        <div className='footer_right1'>
            <div>
                <h3>Company</h3><br/><br/>
                <p>Contact</p>
            </div>
            <div>
                <h3>Who we help</h3><br/><br/>
                <p>Customers</p>
                <p>Brokers</p>
                <p>Lenders</p>
            </div>
            <div>
                <h3>Follow us</h3><br/><br/>
                <p>Contact</p>
            </div>
        </div>
        <p>Privacy Policy  - Privacy Collection Notice . Terms</p>
      </div>
    </div>
  )
}
