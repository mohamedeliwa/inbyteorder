import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface PostListItemProps {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function PostListItem({
  slug,
  title,
  description,
  date,
}: PostListItemProps) {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="flex flex-row-reverse flex-wrap-reverse sm:flex-nowrap">
        <span className="text-wrap">
          <CardTitle className="mb-0.5">
            <span className="text-2xl text-(--identity-color)">#</span>{" "}
            <Link
              href={`/posts/${slug}`}
              className="text-2xl hover:bg-(--identity-color) hover:text-white"
            >
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-lg">
            {description}
            <br />
            <Link
              href={`/posts/${slug}`}
              className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white"
            >
              Read more ⟶
            </Link>
          </CardDescription>
        </span>
        <CardAction className="text-muted-foreground text-nowrap text-lg">
          <p>{date}</p>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
