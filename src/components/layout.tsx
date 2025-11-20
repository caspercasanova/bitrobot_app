export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-950 text-slate-50">
        {children}
    </div>
  );
};
