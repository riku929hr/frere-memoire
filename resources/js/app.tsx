import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <h1 className="text-3xl bg-sky-50">Hello, World!</h1>
    </React.StrictMode>,
);
