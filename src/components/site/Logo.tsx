import logoUrl from "@/assets/logo.png";

export function Logo({
  variant = "light",
  className = "",
  size = "default",
}: {
  variant?: "light" | "dark";
  className?: string;
  size?: "default" | "medium" | "large";
}) {
  const sizeClasses =
    size === "large"
      ? "h-11 md:h-13 aspect-[5/3]"
      : size === "medium"
      ? "h-8.5 md:h-9.5 aspect-[5/3]"
      : "h-7 md:h-8 aspect-[5/3]";

  const textClasses =
    size === "large"
      ? "text-xl md:text-2xl lg:text-3xl"
      : size === "medium"
      ? "text-[15px] sm:text-lg md:text-xl lg:text-2xl"
      : "text-base md:text-lg";

  const imgWidth = size === "large" ? 92 : size === "medium" ? 67 : 60;
  const imgHeight = size === "large" ? 55 : size === "medium" ? 40 : 36;
  const gapClass = size === "large" ? "gap-2" : size === "medium" ? "gap-1.5" : "gap-1";

  return (
    <span className={`inline-flex items-center ${gapClass} ${className}`}>
      <img
        src={logoUrl}
        alt="DP Associates"
        width={imgWidth}
        height={imgHeight}
        className={`${sizeClasses} object-contain transition-all duration-300 ${
          variant === "dark" ? "invert animate-in fade-in duration-300" : "animate-in fade-in duration-300"
        }`}
      />
      <span
        className={`font-display tracking-[0.2em] leading-none transition-colors duration-300 ${textClasses} ${
          variant === "dark" ? "text-foreground" : "text-white"
        }`}
      >
        DP ASSOCIATES
      </span>
    </span>
  );
}
