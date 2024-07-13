import Link from "next/link";
import React from "react";

type ButtonProps = {
  link: string;
  text: string;
};

function Button({ link, text }: ButtonProps): JSX.Element {
  return (
    <Link href={link} className="text-center">
      <button className="w-full bg-blue-500 rounded-xl hover:bg-blue-400 cursor-pointer py-2 text-white">
        {text}
      </button>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col items-center ">
      <h3 className="text-lg font-medium text-neutral-600 mb-20">
        React Interview Questions | Machine Coding Round
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Button text="File Explorer" link="/file-explorer" />
        <Button text="World" link="/" />
        <Button text="Hello" link="/" />
        <Button text="World" link="/" />
        <Button text="Hello" link="/" />
        <Button text="World" link="/" />
      </div>
    </main>
  );
}

/*

Use JSX.Element when:
The component consistently returns a single JSX element.
You want to be explicit and specific about the return type.

Use React.ReactNode when:
The component can return a variety of types (JSX elements, strings, numbers, arrays, fragments, or null).
You want to provide flexibility in what the component can render.
*/
