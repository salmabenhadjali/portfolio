"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import { categories, levels } from "@/data/categories";
import Link from "next/link";

const Quizz = () => {
  const [settings, setSettings] = useState<{
    categories: string[];
    level: string;
  }>({
    categories: [],
    level: "",
  });

  const handleCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
    category: string
  ) => {
    e.preventDefault();
    const newCategories = [...settings.categories, category];
    newCategories.push(category);
    setSettings((prev) => ({
      ...prev,
      categories: newCategories,
    }));
  };

  const handleLevel = (
    e: React.MouseEvent<HTMLButtonElement>,
    level: string
  ) => {
    e.preventDefault();
    setSettings((prev) => ({
      ...prev,
      level: level,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Quizz settings</h1>
      <hr />
      <h2>
        <span>Choose the topic</span>
      </h2>
      <div className={styles.setting}>
        {categories.map((category) => (
          <button
            className={
              settings.categories.includes(category) ? styles.liSelected : ""
            }
            onClick={(e) => handleCategory(e, category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <h2>
        <span>Choose the level</span>
      </h2>
      <div className={styles.setting}>
        {levels.map((level) => (
          <button
            className={settings.level === level ? styles.liSelected : ""}
            onClick={(e) => handleLevel(e, level)}
          >
            {level}
          </button>
        ))}
      </div>
      <Link href="/quizz">
        <button>Start a Quiz</button>
      </Link>
    </div>
  );
};

export default Quizz;
