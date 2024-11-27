"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { categories, levels } from "@/data/categories";
import Link from "next/link";

export default function Home() {
  const [settings, setSettings] = useState<{
    categories: string;
    level: string;
  }>({
    categories: categories[0].toLowerCase(),
    level: levels[0].toLowerCase(),
  });

  const handleCategory = (
    e: React.MouseEvent<HTMLButtonElement>,
    category: string
  ) => {
    e.preventDefault();
    setSettings((prev) => ({
      ...prev,
      categories: category.toLowerCase(),
    }));
  };

  const handleLevel = (
    e: React.MouseEvent<HTMLButtonElement>,
    level: string
  ) => {
    e.preventDefault();
    setSettings((prev) => ({
      ...prev,
      level: level.toLowerCase(),
    }));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>
          <span>Choose the topic</span>
        </h2>
        <div className={styles.setting}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={
                settings.categories.includes(category.toLowerCase())
                  ? styles.liSelected
                  : ""
              }
              onClick={(e) => handleCategory(e, category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2>
          <span>Choose the level</span>
        </h2>
        <div className={styles.setting}>
          {levels.map((level, index) => (
            <button
              key={index}
              className={
                settings.level === level.toLowerCase() ? styles.liSelected : ""
              }
              onClick={(e) => handleLevel(e, level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      <Link href={`/quizz/${settings.categories}/${settings.level}`}>
        <button className={styles.btn}>Start a Quiz</button>
      </Link>
    </div>
  );
}
