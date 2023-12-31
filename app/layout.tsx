import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
};
