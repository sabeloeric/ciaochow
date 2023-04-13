import Head from 'next/head';
import styles from '@/styles/Login.module.css';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fetchLoginData = (data) => {
    fetch('https://ciaochow.plusnarrative.biz/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: data.email,
        password: data.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.error) {
          alert(data.error.message)
        }
        if(data?.jwt) {
          localStorage.setItem('token', data.jwt);
          window.location.href = '/dashboard';
          alert('login success')
        }
      }).catch((error) => {
        alert('Something went wrong. Please try again later.');
      });
  };

  const onSubmit = (data) => {
    fetchLoginData(data);
  };

  return (
    <>
      <Head>
        <title>CiaoChow - Login</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className={`${styles.loginBackground} appWrap`}>
        <Image
          src='/images/welcome/ellipse.svg'
          width={100}
          height={100}
          alt='CiaoChow'
          className='backgrounImage'
        />
        <Image
          src='/images/back-arrow.svg'
          width={100}
          height={100}
          alt='back icon'
          className='backIcon'
        />
        <div className={styles.loginTitle}>Login</div>
        <Image
          src='/images/login/charactor.svg'
          width={100}
          height={100}
          alt='back icon'
          className={styles.charactor}
        />
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.emailLabel} htmlFor='email'>
            email
          </label>
          <input
            className={styles.emailInput}
            placeholder='yourmail@mail.com'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <span className={`error ${styles.emailError}`}>
              {errors.email.message}
            </span>
          )}
          <label className={styles.passwordLabel} htmlFor='password'>
            password
          </label>
          <input
            className={styles.passwordInput}
            placeholder='your password'
            type='password'
            {...register('password', { required: 'Password is required' })}
          />
          <Link className={styles.forgotPassword} href='/register'>
            Forgot password?
          </Link>
          {errors.password && (
            <span className={`error ${styles.passwordError}`}>
              {errors.password.message}
            </span>
          )}
          <span className={styles.registerLink}>Dont have an account? </span>
          <Link className={styles.registerLinkText} href='/register'>
            Register
          </Link>
          <input className={styles.loginButton} type='submit' value='Login' />
        </form>
      </main>
    </>
  );
}
