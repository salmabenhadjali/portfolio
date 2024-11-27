import styles from "./page.module.css";
import Quizz from "@/componens/quizz/Quiz";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// Function to fetch data based on category and level
const fetchData = async (category: string, level: string) => {
  try {
    // Define the file path to your JSON data
    const filePath = path.join(
      process.cwd(),
      "public/data", // Or your custom directory path
      category,
      `${level}.json`
    );

    // Read the file synchronously
    const fileData = fs.readFileSync(filePath, "utf-8");

    // Parse the JSON data
    return JSON.parse(fileData);
  } catch {
    notFound(); // Show 404 if there's an error fetching data
  }
};

const QuizzPage = async ({
  params,
}: {
  params: Promise<{ category: string; level: string }>;
}) => {
  // Access params directly without awaiting
  const { category, level } = await params; // Await params to resolve

  // Fetch the data based on category and level
  const data = await fetchData(category, level);

  return (
    <div className={styles.container}>
      <Quizz questions={data} />
    </div>
  );
};

export default QuizzPage;
