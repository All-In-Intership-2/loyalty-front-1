import { Route } from "react-router"
import Login from "./Login"
import PasswordRecovery from "./PasswordRecovery"

const LoginPage = () => {
  return (
    <div className='login-page'>
      <ul className='login-page__languages'>
        <li className='login-language__item active'>հայ</li>
        <li className='login-language__item another-language'>en</li>
        <li className='login-language__item another-language'>ру</li>
      </ul>
      <div className='login-page-container'>
        {/* authentication url-um misht login a berum, /url? beruma grancum, verakangnum... */}
        <Route path='/authentication' exact component={Login} />
        <Route
          path='/authentication/password-recovery'
          component={PasswordRecovery}
        />
      </div>
    </div>
  )
}

export default LoginPage
