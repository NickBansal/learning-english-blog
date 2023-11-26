interface Type {
  children: React.ReactNode;
  className?: string;
}
export const PaddedSection = ({ children, className = '' }: Type) => (
  <section className={`pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);
