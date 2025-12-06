import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { LinkedinRect } from "@/icons/linkedin.icon";
import { GithubIcon } from "@/icons/github.icon";
import { BaselineEmailIcon } from "@/icons/email.icon";
export function NavigationBar() {
  return (
    <NavigationMenu className="min-w-full justify-between flex-wrap">
      <NavigationMenuList className="gap-5">
        <NavigationMenuItem className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/" className=" text-3xl">
            Goroji
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="self-baseline-last">
          <Link href="https://linkedin.com" target="_blank">
            <LinkedinRect />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="self-baseline-last">
          <Link href="https://github.com" target="_blank">
            <GithubIcon />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="self-baseline-last">
          <Link href="mailto:support@goroji.com">
            <BaselineEmailIcon />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="gap-5">
        <NavigationMenuItem className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/docs">/Posts</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/">/Projects</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-b-(--identity-color)  border-b-3 hover:bg-(--identity-color) hover:text-white">
          <Link href="/projects">/About</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
