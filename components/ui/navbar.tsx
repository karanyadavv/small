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
import { PencilLineIcon } from "lucide-react";


export default function Navbar(){
  return (
    <div className="w-full md:max-w-[1200px] mx-auto">
      <Menubar className="p-8 flex justify-between items-center gap-8 m-4 font-[family-name:var(--font-geist-sans)]">
            <Link href={"/"} className="cursir-pointer font-bold">
              small
            </Link>
            <div className="flex items-center gap-4">
                <SignedIn>
                  <MenubarMenu>
                    <Link href={"/dashboard"}>
                      <Button>
                        <PencilLineIcon className="h-4 w-4"/>Write
                      </Button>
                    </Link>
                  </MenubarMenu>
                </SignedIn>
              <Menubar>
                <MenubarMenu>
                  
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button>Login</Button>
                    </SignInButton >
                  </SignedOut>
                </MenubarMenu>
                <MenubarMenu>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </MenubarMenu>
              </Menubar>
              <ModeToggle />
            </div>
      </Menubar>
    </div>
  )
}

