import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function ServiceBreadcrumbs({ serviceName }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-white/50">
        <li className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Link to="/" className="flex items-center gap-1">
            <Home size={13} className="text-neon-blue" />
            <span>Home</span>
          </Link>
        </li>
        <ChevronRight size={12} className="text-white/20" />
        <li className="hover:text-white transition-colors">
          <Link to="/services">Services</Link>
        </li>
        <ChevronRight size={12} className="text-white/20" />
        <li className="text-white font-medium" aria-current="page">
          {serviceName}
        </li>
      </ol>
    </nav>
  );
}
