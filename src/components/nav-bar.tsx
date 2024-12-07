'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button, Image} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <Image src="/codelogo.png" className="h-8 w-10 rounded-none"/>
        <NavbarBrand className="mr-4">
          <p className="sm:block font-extrabold text-inherit text-purple-700">CodeFlow</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-3">
          <NavbarItem isActive>
            <Link href="/" aria-current="page" color="foreground">
                Acasă
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/limbaje">
              Limbaje
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/probleme">
              Probleme
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown className="bg-black">
              <DropdownTrigger>
                <p className="text-white text-base font-semibold" >Test</p>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new" className="text-purple-300 bg-black">Creează un test</DropdownItem>
                <DropdownItem key="copy" className="text-purple-300 bg-black">Intră într-un test</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-4" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Caută..."
          startContent={<p className="fa-solid fa-magnifying-glass"></p>}
          size="sm"
          type="search"
        />
        <>
          <NavbarItem className='lg:flex'>
            <Link href='/login' color="secondary" className="border-small border-purple-600 rounded-lg p-2">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="text-black" color='secondary' href='/register' variant='solid'>
              Register
            </Button>
          </NavbarItem>
        </>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Alexa Irina"
              size="sm"
              src="https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg?crop=0.703xw:1.00xh;0.297xw,0&resize=980:*"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">alexairinamaria@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
}