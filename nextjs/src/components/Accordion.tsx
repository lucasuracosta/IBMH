'use client'

import { FaMinus, FaPlus } from 'react-icons/fa6'

import { useState } from 'react'

interface AccordionProps {
  title: string
  answer: string
}

export default function Accordion({ title, answer }: AccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-start w-full text-left group"
      >
        <span className="text-lg font-medium text-ibm-blue pr-8 group-hover:text-ibm-gold transition-colors">
          {title}
        </span>
        <span className="flex-shrink-0 mt-1 text-ibm-blue/60">
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-black/70 leading-relaxed">{answer}</div>
      </div>
    </div>
  )
}
