import React from 'react'
import Navbar from "@components/Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      { children}
      <footer>This is the footer</footer>

      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout
