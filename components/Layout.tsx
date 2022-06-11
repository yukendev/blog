import { Navbar } from "./Navbar/Navbar";

export const Layout = ({children}): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Navbar/>
      {children}
    </div>
  )
};