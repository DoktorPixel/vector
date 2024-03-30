'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const router = usePathname();
  const isActive = (path) => {
    return router === path;
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_body">
          <Image
            src="/logo/Logo.png"
            alt="Logo"
            width={565}
            height={176}
            className="header_logo"
          />

          <div div className="header_nav">
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Головна
            </Link>
            <Link
              href="/products"
              className={isActive('/products') ? 'active' : ''}
            >
              Товари
            </Link>
            <Link
              href="/services"
              className={isActive('/services') ? 'active' : ''}
            >
              Послуги
            </Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              Про компанию
            </Link>
            <Link
              href="/contacts"
              className={isActive('/contacts') ? 'active' : ''}
            >
              Контакти
            </Link>
            <Link href="tel:+380675201205" className="header_tel">
              +380 67 520 12 05{' '}
              <Image
                src="/logo/tel.svg"
                alt="telephone"
                height={20}
                width={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
