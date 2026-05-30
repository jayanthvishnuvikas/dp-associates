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
      ? "h-12 w-12 md:h-14 md:w-14"
      : size === "medium"
      ? "h-9 w-9 md:h-10 md:w-10"
      : "h-8 w-8 md:h-9 md:w-9";

  const textClasses =
    size === "large"
      ? "text-xl md:text-2xl lg:text-3xl"
      : size === "medium"
      ? "text-[15px] sm:text-lg md:text-xl lg:text-2xl"
      : "text-base md:text-lg";

  const imgSize = size === "large" ? 56 : size === "medium" ? 40 : 36;
  const gapClass = size === "large" ? "gap-3" : size === "medium" ? "gap-2.5 md:gap-3" : "gap-2";

  return (
    <span className={`inline-flex items-center ${gapClass} ${className}`}>
      <img
        src={logoUrl}
        alt="DP Associates"
        width={imgSize}
        height={imgSize}
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
