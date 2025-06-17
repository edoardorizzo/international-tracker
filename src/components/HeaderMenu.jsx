'use client'
import { useState } from "react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

export default function HeaderMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
}
