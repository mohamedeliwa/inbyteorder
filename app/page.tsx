import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-40">
      <h1 className="text-4xl">
        Hi There!<span className="text-(--identity-color) text-6xl">.</span>
      </h1>
      <br />
      <h2 className="font-semibold">Welcome to My Corner of the Internet!</h2>
      <br />
      <p>
        This blog is a reflection of my thoughts, experiences, and passions. I
        hope you find something that resonates with you. <br /> <br /> Feel free
        to explore{" "}
        <span className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/posts">my posts</Link>
        </span>
        .
      </p>
      <br />
      <p>
        For more about me, please check the{" "}
        <span className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/about">About</Link>
        </span>{" "}
        page.
      </p>
      <br />
      <p>Thank you for visiting</p>
    </div>
  );
}
