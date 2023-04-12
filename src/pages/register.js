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

  console.log({errors})

  const onSubmit = (data) => console.log(data);

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
            {...register('username', { required: true })}
          />
          {errors.username && (
            <span className={styles.error}>This field is required</span>
          )}
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
          {errors.password && (
            <span className={styles.error}>This field is required</span>
          )}
          <span className={styles.loginLink}>
            Have an account?{' '}

          </span>
          <a className={styles.loginLinkText} href='/login'>
              Login
            </a>
          <input className={styles.registerButton} type='submit' />
        </form>
      </main>
    </>
  );
}
