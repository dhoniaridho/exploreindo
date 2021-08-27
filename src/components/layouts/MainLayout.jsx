import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function MainLayout({children}) {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
