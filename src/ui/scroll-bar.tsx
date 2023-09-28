import { useScrollIndicator } from "../hooks/useScrollIndicator";

export const ScrollIndicator = () => {
  const completion = useScrollIndicator();

  return (
    <span
      style={{ width: `${completion}%` }}
      className="absolute h-1 w-full bg-slate-700"
    />
  );
};
