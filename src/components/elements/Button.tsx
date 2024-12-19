export default function Button({ className, children, link }: { link: string; className?: string; children: React.ReactNode }) {
  return (
    <a rel="noopener noreferrer" href={link} className={`rounded-3xl bg-[var(--primary-color)] hover:bg-[var(--third-color)] hover:text-[var(--primary-color)] text-3xl px-8 py-1 border-[4px]  border-[var(--primary-color)] text-white ${className}`}>
      {children}
    </a>
  );
}

export function ButtonBorder({ className, children, link }: { link: string; className?: string; children: React.ReactNode }) {
  return (
    <a rel="noopener noreferrer" href={link} className={`rounded-3xl text-3xl px-8 py-1  border-[4px]  border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--third-color)] ${className}`}>
      {children}
    </a>
  );
}
