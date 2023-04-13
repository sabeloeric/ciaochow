import Head from 'next/head';
import styles from '@/styles/Register.module.css';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fetchUserData = (data) => {
    fetch('https://ciaochow.plusnarrative.biz/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data })
        if (data?.error) {
          alert(data.error.message)
        }
        if(data?.jwt) {
          localStorage.setItem('token', data.jwt);
          window.location.href = '/dashboard';
          alert('user created')
        }
      }).catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    fetchUserData(data);
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>CiaoChow - Register</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className={`${styles.registerBackground} appWrap`}>
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
          onClick={() => {
            window.location.href = '/';
          }}
        />
        <div className={styles.registerTitle}>Register</div>
        <Image
          src='/images/register/charactor.svg'
          width={100}
          height={100}
          alt='back icon'
          className={styles.charactor}
        />
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.usernameLabel} htmlFor='username'>
            username
          </label>
          <input
            className={styles.usernameInput}
            placeholder='muncher'
            {...register('username', { required: 'The username is requred' })}
          />
          {errors.username && (
            <span className={`error ${styles.usernameError}`}>
              {errors.username.message}
            </span>
          )}
          <label className={styles.emailLabel} htmlFor='email'>
            email
          </label>
          <input
            className={`${styles.emailInput}`}
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
          {errors.password && (
            <span className={`error ${styles.passwordError}`}>
              {errors.password.message}
            </span>
          )}
          <span className={styles.loginLink}>Have an account? </span>
          <a className={styles.loginLinkText} href='/login'>
            Login
          </a>
          <input
            className={styles.registerButton}
            type='submit'
            value='Register'
          />
        </form>
      </main>
    </>
  );
}
