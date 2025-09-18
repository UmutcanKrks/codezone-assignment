interface SkewButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function SkewButton({ children, className = "" }: SkewButtonProps) {
  // Extract background and text color classes from className
  const bgColorMatch = className.match(/bg-[\w-]+/);
  const textColorMatch = className.match(/text-[\w-]+/);
  
  const bgColor = bgColorMatch ? bgColorMatch[0] : "bg-rapkology-yellow";
  const textColor = textColorMatch ? textColorMatch[0] : "text-black";
  
  return (
      <button className={`relative inline-block cursor-pointer
        -ml-1 sm:-ml-2 
        px-4 py-1.5 sm:px-6 sm:py-2 xl:px-10 xl:py-2 
        text-sm sm:text-base xl:text-lg 
        font-bold transition-transform duration-200 hover:scale-105 
        ${textColor}`}>
      {/* Colored shape */}
      <span className={`absolute inset-0 ${bgColor} [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)]`}></span>
      
      {/* Black shadow - responsive shadow offset */}
      <span className={`absolute inset-0 
        translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 
        bg-black [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)] -z-10`}></span>

      {/* Text */}
      <span className="relative">{children}</span>
    </button>
  );
}