import Image from "next/image";
import Link from "next/link";

export interface IProject {
  title: string;
  tag: string;
  desc: string;
  img: string;
  url: string;
}
export default function ProjectCard({ data }: { data: IProject }) {
  return (
    <Link href={data.url} className="group relative block bg-white">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <Image
          width={200}
          height={100}
          alt={data.title}
          src={data.img}
          className="h-56 w-full object-cover"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {data.title}
            </h2>
            <p className="dark:text-gray-800">{data.desc}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Read more
          </button>
        </div>
      </div>
    </Link>
  );
}
