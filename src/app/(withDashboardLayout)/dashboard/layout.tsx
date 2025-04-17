import DashboardDrawer from "@/components/dashboard/dashboardDrawer/dashboardDrader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
};

export default DashboardLayout;
