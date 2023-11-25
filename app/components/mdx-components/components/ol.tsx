export default function LI({ children }: { children: React.ReactNode }) {
  return <ol className="pt-2 mb-4 text-lg list-inside num-list md:text-xl last:mb-0">{children}</ol>;
}
