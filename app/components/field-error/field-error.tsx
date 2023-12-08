export const FieldError = ({ data }: { data?: string | null }) =>
  data ? <p className="w-full text-center text-sm text-red-500 dark:text-red-300 mb-4">{data}</p> : null;
