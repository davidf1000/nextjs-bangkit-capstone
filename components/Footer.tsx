import { Fragment } from "react"

const Footer = () : JSX.Element => (
    <footer className="bg-gray-100 text-center lg:text-left static bottom-0">
  <div className="text-gray-700 text-center p-4">
    © 2021 Copyright: {' '}
    <a className="text-gray-800" href="https://tailwind-elements.com/">TailwindCSS</a>
  </div>
</footer>

)

export default Footer;