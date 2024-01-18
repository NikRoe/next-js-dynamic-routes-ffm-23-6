import Link from "next/link";
import { movies } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movies() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm("Are you Aquaman?")) {
            router.push("/movies/aquaman");
          }
        }}
      >
        Are you Aquaman?
      </button>
    </>
  );
}
