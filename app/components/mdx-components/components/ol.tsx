export default function OL({ children }: { children: React.ReactNode }) {
  return <ol className="px-8 pt-2 mb-4 text-lg list-decimal sm:pt-8 sm:px-12 md:text-xl last:mb-0">{children}</ol>;
}
