import React from "react"

const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
      <div>
        <p>Copyright © {footerYear} - Progacademia UCT</p>
      </div>
    </footer>
  )
}

export default Footer
