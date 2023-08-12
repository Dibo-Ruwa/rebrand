import DashboardRoutes from "@/component/DasboardRoutes/DashBoardRoutes";
import AdminRoutes from "@/component/adminRoutes/AdminRoutes";
import { authOptions } from "@/utils/helpers/authOptions";
import { getServerSession } from "next-auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = getServerSession(authOptions);

  return (
    <section>
      {session?.user?.role === "user" ? <DashboardRoutes /> : <AdminRoutes />}

      {children}
    </section>
  );
}
