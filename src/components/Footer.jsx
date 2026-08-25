import React from 'react'

export default function Footer() {
  return (
    <div className="bg-black px-5 lg:px-28 py-4 lg:py-6 flex items-center justify-between mt-16">

      {/* LOGO */}
      <img
        className="brightness-0 invert h-10 lg:h-14 w-auto"
        src="/assets/logo_port.png"
        alt="Archita Pal Logo"
      />

      {/* FOOTER TEXT */}
      <div className="text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right">
        <p>Personal Portfolio</p>
      </div>

    </div>
  )
}