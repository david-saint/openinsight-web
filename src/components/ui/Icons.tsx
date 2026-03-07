import { LucideProps } from "lucide-react";

export const SparkleIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
  </svg>
);

export const ShieldCheckIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChromeIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

export const CoffeeIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const OpenInsightLogo = ({ className, ...props }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M 143.89,226 C 139.71,226 137.72,221.31 137.49,217.72 C 136.24,196.09 127.01,150.96 78.49,133.02 C 67.71,129.72 58.41,129.15 48.72,128.82 C 44.16,128.66 42,125.25 42,123.25 C 42,120.74 44.42,117.67 48.07,117.67 H 48.27 C 58.78,117.67 79.61,114.32 93.93,106.78 C 117.93,94.26 133.83,73.07 138.72,30.53 C 139.31,25.54 141.21,23 144.22,23 C 147.13,23 149.49,25.75 149.49,29.21 C 149.49,44.99 156.19,89.47 190.58,103.81 C 195.47,105.91 199.05,106.85 201.96,107.29 C 205.61,107.83 206.79,110.39 206.79,112.36 C 206.79,115.04 204.62,117.56 201.31,117.56 C 200.69,117.56 200.03,117.47 199.31,117.29 C 173.05,110.97 156.91,97.17 144.71,62.41 C 135.13,94.86 115.76,112.89 83.07,124.74 C 115.21,135.48 134.66,153.95 143.95,186.83 C 153.77,160.02 170.82,143.77 198.02,135.16 C 199.11,134.79 200.16,134.62 201.14,134.62 C 205.32,134.62 206.92,137.81 206.92,140.21 C 206.92,142.74 205.32,145.26 201.87,146.11 C 172.71,154.96 157.11,177.95 149.91,209.26 C 149.22,212.36 149.36,215.77 149.36,218.91 C 149.32,222.81 147.85,226 143.89,226 Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M 73.86,196.71 C 70.48,196.71 68.74,194.11 68.74,191.52 C 68.74,189.67 69.53,187.79 71.07,186.43 L 93.67,165.06 C 95.11,163.69 96.61,162.98 98.01,162.98 C 101.05,162.98 103.51,166.11 103.51,168.62 C 103.51,169.86 102.92,171.06 101.51,172.42 L 79.18,195.12 C 77.61,196.27 75.65,196.71 73.86,196.71 Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M 97.81,84.93 C 96.51,84.93 95.11,84.21 93.67,82.53 L 70.81,60.67 C 69.27,59.15 68.68,57.11 68.68,55.37 C 68.68,52.31 70.71,50.11 73.92,50.11 C 75.75,50.11 77.71,50.89 79.48,52.8 L 101.91,75.36 C 103.28,76.78 103.87,78.23 103.87,79.56 C 103.87,82.41 100.82,84.93 97.81,84.93 Z"
        fill="hsl(var(--primary))"
      />
    </svg>
  );
};
