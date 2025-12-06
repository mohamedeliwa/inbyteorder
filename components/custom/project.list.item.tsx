import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";

interface ProjectListItemProps {
  key: string;
  title: string;
  description: string;
  date: string;
}

export default function ProjectListItem({ key }: ProjectListItemProps) {
  return (
    <Item
      className="sm:basis-[48%] basis-full border-2 border-[#e6e6e6]"
      variant="muted"
    >
      <ItemContent>
        <ItemTitle>
          <span className="text-xl text-(--identity-color)">#</span>{" "}
          <Link
            href={`/posts/${key}`}
            className="border-b-(--identity-color) border-b-3 text-xl hover:bg-(--identity-color) hover:text-white"
          >
            Muted Variant
          </Link>
        </ItemTitle>
        <ItemDescription>
          Subdued appearance with muted colors for secondary content.
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
