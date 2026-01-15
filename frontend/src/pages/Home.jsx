import { useEffect, useState } from "react";

export default function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/stories")
      .then(res => res.json())
      .then(setStories);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ANHUMIA</h1>
      {stories.map(s => (
        <div key={s.id}>
          <a href={`/truyen/${s.id}`}>{s.title}</a>
        </div>
      ))}
    </div>
  );
}
