"use client";
import styles from "./page.module.css";
import { useRouter } from "next/router";
import Quizz from "@/componens/quizz/Quiz";

const QuizzPage = () => {
  const router = useRouter();
  const { categories, level } = router.query;

  console.log(categories, level);

  return (
    <div className={styles.container}>
      <Quizz />
    </div>
  );
};

export default QuizzPage;
