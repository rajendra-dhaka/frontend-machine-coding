import Link from "next/link";
import React from "react";

const navigateData = [
  { text: "File Explorer", link: "/file-explorer" },
  { text: "Interactive Shape", link: "/interactive-shape" },
  { text: "Progress Bar", link: "/progress-bar" },
  { text: "Tic Tac Toe", link: "/tic-tac-toe" },
  { text: "React Toast", link: "/react-toast" },
  { text: "", link: "" },
  { text: "", link: "" },
  { text: "", link: "" },
  { text: "", link: "" },
  { text: "", link: "" },
];

type ButtonProps = {
  link: string;
  text: string;
};

function Button({ link, text }: ButtonProps): JSX.Element {
  return (
    <Link href={link} className="text-center" target="_blank">
      <button className="w-full bg-blue-500 rounded-xl hover:bg-blue-400 cursor-pointer py-2 text-white">
        {text}
      </button>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen p-24 flex flex-col items-center ">
      <h3 className="text-lg font-medium text-neutral-600 mb-20 text-center">
        React Interview Questions | Machine Coding Round
      </h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {navigateData.map(
          (item, i) => item?.text && <Button key={i} {...item} />
        )}
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
