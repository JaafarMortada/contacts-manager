import logo from '../../CONTACT MANAGER.svg'
export default function Navbar() {
  return (
    <nav className="nav">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <ul>
        <CustomLink to="/">Logout</CustomLink>
      </ul> */}
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }