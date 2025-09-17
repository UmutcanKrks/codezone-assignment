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
      <button className={`relative inline-block -ml-2 px-10 py-2 font-bold transition-transform duration-200 hover:scale-105 ${textColor}`}>
      {/* Colored shape */}
      <span className={`absolute inset-0 ${bgColor} [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)]`}></span>
      
      {/* Black shadow */}
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)] -z-10"></span>

      {/* Text */}
      <span className="relative">{children}</span>
    </button>
  );
}