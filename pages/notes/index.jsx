import React from "react";
import Link from "next/link";
// import { useRouter } from 'next/router'
// use this when needing to route things programatically

const Page = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i + 1, title: `Note: ${i + 1}` }));

  return (
    <div>
      <h1>Index Page - note routes below</h1>
      {notes.map((note) => (
        <div key={note.id}>
          <Link href="/notes/[params]" as={`/notes/${note.id}`}>
            <a>{note.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
