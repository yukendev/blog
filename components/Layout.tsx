import { Navbar } from "./Navbar/Navbar";

export const Layout = ({children}): JSX.Element => {
  return (
    <div className="d-flex flex-column">
      <Navbar/>
      {children}
    </div>
  )
};