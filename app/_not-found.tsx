import { notFound } from 'next/navigation';

export default function NotFound() {
  notFound();
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
