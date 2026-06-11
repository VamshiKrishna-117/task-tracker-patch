import { useState, useEffect } from 'react';
import { fetchTasks } from '../api';

export function useTasks(query, status, page, pageSize) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Debounce the query search parameter to avoid hammering the API on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    setLoading(true);

    fetchTasks({ query: debouncedQuery, status, page, pageSize })
      .then((data) => {
        setTasks(data.items);
        setTotal(data.total);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [debouncedQuery, status, page, pageSize]);

  return { tasks, total, loading, error };
}
