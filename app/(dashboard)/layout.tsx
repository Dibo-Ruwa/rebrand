import DashboardRoutes from "@/component/DasboardRoutes/DashBoardRoutes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <DashboardRoutes />
        {children}
      </body>
    </html>
  );
}
