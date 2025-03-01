import {
  Menubar,
  MenubarMenu,
} from "@/components/ui/menubar"

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar(){
  return (
    <Menubar className="p-8 flex justify-between items-center gap-8 m-4 font-[family-name:var(--font-geist-sans)]">
          <Link href={"/"} className="cursir-pointer font-bold">
            small
          </Link>
          <div className="flex items-center gap-4">

          <Menubar>
            <MenubarMenu>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button>Login</Button>
                </SignInButton >
              </SignedOut>
            {/* </MenubarMenu>
            <MenubarMenu> */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </MenubarMenu>
          </Menubar>
          <ModeToggle />
          </div>
        </Menubar>
  )
}

