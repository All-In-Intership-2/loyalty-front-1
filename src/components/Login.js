import { useState } from "react"

const Login = () => {
  const [passwordType, setPasswordType] = useState("password")

  return (
    <div className='login'>
      <h2 className='login-title'>
        Բարի գալուստ <span className='another-language'>Loyalty</span>
      </h2>
      <div className='login-btns'>
        <div className='login__btn'>
          <button className='active'>Մուտք</button>
        </div>
        <div className='login__btn'>
          <button>Գրանցվել</button>
        </div>
      </div>
      <form action=''>
        <div className='login-input__item'>
          <div className='login-input__item-icon'>
            <img src='img/icons/email.png' alt='email' />
          </div>
          <input type='email' placeholder='էլ․ Հասցե' />
        </div>
        <div className='login-input__item'>
          <div className='login-input__item-icon'>
            <img src='img/icons/lock.png' alt='password' />
          </div>
          <input type={passwordType} placeholder='Գաղտնաբառ' />
          <div
            className={`password-show__icon ${
              passwordType === "password" ? "active" : null
            }`}
            onClick={() =>
              setPasswordType(passwordType === "password" ? "text" : "password")
            }>
            <img src='img/icons/show.png' alt='' />
          </div>
        </div>
        <div className='forget-password__field'>
          <p className='forget-password__text'>Մոռացե՞լ եք գաղնաբառը</p>
        </div>
        <div className='login-input-radio'>
          <input id='remember-account' type='radio' />
          <div className='radio-btn'></div>
          <label className='login-radio__label' htmlFor='remember-account'>
            Հիշել մուտքանունը
          </label>
        </div>
        <div className='login-submit__btn'>
          <button>
            Մուտք
            <img src='img/icons/login.png' alt='login' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
