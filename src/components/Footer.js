import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer>
      <div>
        <SocialLinks />
        <p>
          &copy; {new Date().getFullYear()} Marcus Blog made by Marc Gotzens.
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
