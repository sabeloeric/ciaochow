import Head from 'next/head';
import styles from '@/styles/Dashboard.module.css';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>CiaoChow - Meal</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className={`${styles.dashboardBackground} appWrap`}>
        <Image
          src='/images/dashboard/burger.png'
          width={100}
          height={100}
          alt='CiaoChow Meal'
          className={styles.mealImage}
        />
        <div className={styles.mealInfo}>
          <div className={styles.mealHeader}>
            <h1 className={styles.mealTitle}>Hamburger</h1>
            <Image
              src='/images/dashboard/like.svg'
              width={100}
              height={100}
              alt='CiaoChow Like Meal'
              className={styles.likeMealIcon}
            />
          </div>
          <div className={styles.mealButtonsContainer}>
            <button
              className={`${styles.mealDescriptionButton} ${styles.mealActiveButton}`}
            >
              Description
            </button>
            <button className={styles.mealFactsButton}>Nutrition facts</button>
          </div>
          <div className={styles.mealDescription}>
            A hamburger (or burger for short) is a food, which in American
            English is considered a sandwich consisting of one or more cooked
            patties—usually ground meat, typically beef—placed inside a sliced
            bread roll or bun. The patty may be pan fried, grilled, smoked or
            flame broiled. Hamburgers are often served with cheese, lettuce,
            tomato, onion, pickles, bacon, or chilis; condiments such as
            ketchup, mustard, mayonnaise, relish, or a &quot;special sauce&quot;, often a
            variation of Thousand Island dressing; and are frequently placed on
            sesame seed buns.
          </div>
          <div className={styles.nextButtonContainer}>
            <button className={styles.nextButton}>
                Nah! Find something else.
            </button>
          </div>
        </div>
      </main>
    </>
  );
}