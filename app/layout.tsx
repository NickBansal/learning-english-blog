import { Navbar } from './components/navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto">{children}</main>
    </div>
  );
};
