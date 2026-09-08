import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CategoryDetail from '../components/CategoryDetail';
import { categories } from '../data/categories';

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl font-display font-800 mb-4">Category Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md">The portfolio category you requested could not be found.</p>
        <Link to="/portfolio" className="btn-primary py-2.5 px-6">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const categorySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `${category.title} Website Designs | Dynamic Designing`,
        description: category.description,
        url: `https://www.dynamicdesigninng.com/category/${category.id}`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: (category.designs || []).map((d, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://www.dynamicdesigninng.com${d.liveUrl}`,
            name: d.title,
            description: d.description,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.dynamicdesigninng.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: 'https://www.dynamicdesigninng.com/portfolio',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: category.title,
            item: `https://www.dynamicdesigninng.com/category/${category.id}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${category.title} Website Design & Demos | Dynamic Designing`}
        description={category.description}
        canonicalUrl={`https://www.dynamicdesigninng.com/category/${category.id}`}
        schemaData={categorySchema}
      />
      <CategoryDetail
        category={category}
        onBack={() => navigate('/portfolio')}
        onSelectCategory={(c) => navigate(`/category/${c.id}`)}
      />
    </>
  );
}
