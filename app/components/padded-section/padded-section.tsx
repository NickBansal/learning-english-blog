interface Type {
  children: React.ReactNode;
}
export const PaddedSection = ({ children }: Type) => (
  <section className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</section>
);
