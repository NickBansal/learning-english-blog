interface Type {
  children: React.ReactNode;
}
export const PaddedMain = ({ children }: Type) => (
  <section className="pt-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</section>
);
