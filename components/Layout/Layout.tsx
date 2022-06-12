import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = ({children}): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-grow bg-myBgColor px-48 pt-5">
        {children}
      </div>
      <Footer/>
    </div>
  )
};