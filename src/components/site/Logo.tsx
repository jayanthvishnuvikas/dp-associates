import logoUrl from "@/assets/logo.png";

export function Logo({
  variant = "light",
  className = "",
  size = "default",
}: {
  variant?: "light" | "dark";
  className?: string;
  size?: "default" | "large";
}) {
  const sizeClasses = size === "large" ? "h-12 w-12 md:h-14 md:w-14" : "h-8 w-8 md:h-9 md:w-9";
  const textClasses = size === "large" ? "text-lg md:text-2xl" : "text-base md:text-lg";
  const imgSize = size === "large" ? 56 : 36;

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <img
        src={logoUrl}
        alt="DP Associates"
        width={imgSize}
        height={imgSize}
        className={`${sizeClasses} object-contain ${variant === "dark" ? "invert" : ""}`}
      />
      <span
        className={`font-display tracking-[0.22em] leading-none ${textClasses} ${
          variant === "dark" ? "text-foreground" : "text-white"
        }`}
      >
        DP ASSOCIATES
      </span>
    </span>
  );
}
