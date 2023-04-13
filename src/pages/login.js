import Head from 'next/head';
import styles from '@/styles/Login.module.css';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link'

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log({ errors });

  const onSubmit = (data) => console.log(data);

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
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className={styles.error}>This field is required</span>
          )}
          <label className={styles.passwordLabel} htmlFor='password'>
            password
          </label>
          <input
            className={styles.passwordInput}
            placeholder='your password'
            type='password'
            {...register('password', { required: true })}
          />
          <Link className={styles.forgotPassword} href='/register'>Forgot password?</Link>
          {errors.password && (
            <span className={styles.error}>This field is required</span>
          )}
          <span className={styles.registerLink}>Dont have an account? </span>
          <Link className={styles.registerLinkText} href='/register'>
            Register
          </Link>
          <input className={styles.loginButton} type='submit' value='Login'/>
        </form>
      </main>
    </>
  );
}
