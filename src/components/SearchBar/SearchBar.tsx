import type { FormEvent } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface Props {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter your search query.");
      return;
    }
    onSubmit(query.trim());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
