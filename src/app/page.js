"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  const todos = useSelector((state) => state.todosReducer);
  console.log(todos);
  return (
    <main className={styles.main}>
      {todos.map((todo) => {
        return (
          <div>
            {todo.comment}
          </div>
        )
      })}
    </main>
  );
}
