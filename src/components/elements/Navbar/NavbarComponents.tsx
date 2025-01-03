'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { DATA_NAV } from './DATA_NAV';

export function NavbarComponents() {
  return (
    <div className="w-full fixed z-50 fixed w-full top-0 z-50 bg-white/10 backdrop-blur-lg shadow-lg">
      <Navbar fluid rounded className="text-[var(--third-color)] top-0  container bg-transparent">
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-3xl font-medium dark:text-white ">Aassgf</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {DATA_NAV.map((data, idx) => (
            <Navbar.Link className="text-[var(--third-color)] font-medium text-xl" href={data.path} key={idx}>
              {data.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}