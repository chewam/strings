const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-lg p-20">{children}</div>
    </div>
  );
};

export default Page;
