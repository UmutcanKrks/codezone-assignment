export default function SkewButton({ children }: { children: React.ReactNode }) {
  return (
      <button className="relative inline-block -ml-2 px-10 py-2 font-bold text-black transition-transform duration-200 hover:scale-105">
      {/* Yellow shape */}
      <span className="absolute inset-0 bg-rapkology-yellow [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)]"></span>
      
      {/* Black shadow */}
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black [clip-path:polygon(6%_0%,100%_0%,96%_100%,8%_95%)] -z-10"></span>

      {/* Text */}
      <span className="relative">{children}</span>
    </button>
  );
} 