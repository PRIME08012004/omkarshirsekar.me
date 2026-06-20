export default function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-[15%] top-0 h-full w-px bg-border" />
      <div className="absolute right-[15%] top-0 h-full w-px bg-border" />
    </div>
  );
}