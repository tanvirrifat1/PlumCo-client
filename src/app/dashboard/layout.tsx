import Sidebar from "@/components/ui/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
