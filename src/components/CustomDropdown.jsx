import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  label,
  options,
  value,
  onChange,
  id,
  placeholder = 'Select an option',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2"
        >
          {label}
        </label>
      )}

      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-4 py-3 rounded-xl text-left text-sm flex items-center justify-between transition-all duration-200 cursor-pointer ${
          isOpen
            ? 'bg-[#0e0e1a] border-neon-blue ring-1 ring-neon-blue shadow-[0_0_20px_rgba(79,142,247,0.2)] text-white'
            : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-white/90'
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          size={16}
          className={`text-white/50 shrink-0 ml-2 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-neon-blue' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            aria-label={label || 'Dropdown options'}
            className="absolute left-0 right-0 top-full mt-2 bg-[#0a0a14]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-1.5 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-64 overflow-y-auto no-scrollbar scrollbar-none"
          >
            {options.map((option) => {
              const isSelected = value === option;
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-all duration-150 cursor-pointer mb-0.5 last:mb-0 ${
                    isSelected
                      ? 'bg-neon-blue/15 text-neon-blue font-semibold border border-neon-blue/30'
                      : 'text-white/70 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  <span className="truncate">{option}</span>
                  {isSelected && <Check size={14} className="text-neon-blue shrink-0 ml-2" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
