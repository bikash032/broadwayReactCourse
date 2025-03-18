// import SectionTitle from "../../component/section/title/section-title.components";
// import SectionDetail from "../../component/section/detail/section-detail.component";


import "./login.page.css";
import { LeftSection } from "./leftSection";
import { RightSecton } from "./RightSection";
const LoginPage = () => {
  
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Left Section */}
       <LeftSection/>

        {/* Right Section */}
        <RightSecton label ={'Username'}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
