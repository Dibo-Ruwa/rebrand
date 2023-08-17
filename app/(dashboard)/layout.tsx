import DashboardRoutes from "@/component/DasboardRoutes/DashBoardRoutes";
import Dashboard from "@/component/dashboardLayout/DashboradLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Dashboard>{children}</Dashboard>
    </section>
  );
}
