import LoginPageButton from "./button";
import LoginPageForm from "./texarea";

export default function Login() {
  return (
    <>
      <div>
        <LoginPageForm logintitle='ID'/>
        <LoginPageForm logintitle='PASSWORD'/>
      </div>
      <div className="flex mt-3">
        <LoginPageButton buttonname='sign up'/>
        <LoginPageButton buttonname='login'/>
      </div>
    </>
  )
}