import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-400">
      <div>route1 layout</div>
      {children}
    </div>
  );
}
