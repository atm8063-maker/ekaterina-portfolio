import type { Metadata } from 'next';
import { NickPotapovCase } from '@/components/cases/nick-potapov-case';

export const metadata: Metadata = {
  title: 'Ник Потапов — Архитектура без рутины',
  description: 'Проектирование инженерного бруталистского сайта-портфолио и витрины автоматизаций.'
};

export default function CasePage() {
  return <NickPotapovCase />;
}
