import { Fragment } from "react"

const Footer = () : JSX.Element => (
    <div className="absolute inset-x-0 bottom-0">
    <footer className="bg-gray-200 text-center lg:text-left">
  <div className="text-gray-700 text-center p-4">
    © 2021 Copyright: {' '}
    <a className="text-gray-800" href="https://tailwind-elements.com/">TailwindCSS</a>
  </div>
</footer>
    </div>

)

export default Footer;