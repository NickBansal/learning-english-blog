export default function LI({ children }: { children: React.ReactNode }) {
  return <li className="text-lg list-disc md:text-xl last:mb-0">{children}</li>;
}
