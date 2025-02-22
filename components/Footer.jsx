import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-10 bg-[#EDEDED] text-[#666666]">
      <div>
        <p>
          © Copyright 2025 | {""}
          <a href="https://kaliumtheme.com/" target="_blank" className="underline">
            Kalium Theme
          </a>{" "}
          by{" "}
          <a href="https://laborator.co" target="_blank" className="underline">
            Laborator
          </a>
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#">Facebook</a>
        <a href="#">Twitter X</a>
        <a href="#">Instagram</a>
        <a href="#">Dribbble</a>
        <a href="#">YouTube</a>
      </div>
    </footer>
  );
}
