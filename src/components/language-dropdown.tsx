'use client';

import { Select, SelectItem } from '@nextui-org/select';

const limbaje = [
  { key: 'c', label: 'C' },
  { key: 'c++', label: 'C++' },
  { key: 'python', label: 'Python' }
];

export function LanguageDropdown() {
  return (
    <Select
      className='max-w-xs bg-black'
      label='Alege un limbaj'
      color='secondary'
    >
      {limbaje.map((limbaj) => (
        <SelectItem key={limbaj.key}>{limbaj.label}</SelectItem>
      ))}
    </Select>
  );
}
