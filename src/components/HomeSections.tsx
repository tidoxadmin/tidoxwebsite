import { Card } from '@astryxdesign/core/Card';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { AstryxProvider } from './AstryxProvider';
import {
  PRODUCT_CATEGORIES,
  products,
  productsByCategory,
  type Product,
} from '../data/products';

function ProductCard({ product }: { product: Product }) {
  return (
    <a href={`/${product.slug}/`} className="block no-underline text-inherit">
      <Card padding={5} className="h-full transition-transform hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <img
            src={product.icon}
            alt=""
            width={48}
            height={48}
            className="rounded-xl shrink-0"
            loading="lazy"
          />
          <div className="min-w-0">
            <div className="font-semibold text-primary">{product.name}</div>
            <div className="text-sm text-secondary mt-1">{product.tagline}</div>
          </div>
        </div>
      </Card>
    </a>
  );
}

export function ProductGrid() {
  return (
    <AstryxProvider>
      <div className="space-y-12">
        {PRODUCT_CATEGORIES.map((category) => {
          const items = productsByCategory(category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <div className="flex items-center gap-3 mb-6">
                <Badge label={category} variant="neutral" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AstryxProvider>
  );
}

export function HeroActions() {
  return (
    <AstryxProvider>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button label="Explore Our Apps" variant="primary" href="#products" size="large" />
        <Button label="About Tidox" variant="secondary" href="/about/" size="large" />
      </div>
    </AstryxProvider>
  );
}

export function StatsBar() {
  const stats = [
    { value: String(products.length), label: 'Android Apps' },
    { value: '100%', label: 'Privacy-First' },
    { value: '0', label: 'Accounts Required' },
    { value: 'Free', label: 'Core Features' },
  ];

  return (
    <AstryxProvider>
      <Card padding={6}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-primary">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>
    </AstryxProvider>
  );
}
