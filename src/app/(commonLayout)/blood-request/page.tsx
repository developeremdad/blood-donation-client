import PrivateRoute from "@/components/Dashboard/PrivateRoute";
import BloodRequestForm from "@/components/UI/BloodRequestForm";

const BloodRequestPage = ({
  searchParams,
}: {
  searchParams: { donorId: string };
}) => {
  return (
    <PrivateRoute roles={["user", "admin"]}>
      <div className="container mx-auto flex justify-center">
        <div className="lg:max-w-lg border rounded px-4 py-6 border-orange-500 my-10 shadow-md">
          <h3 className="text-2xl font-bold text-center text-orange-500">
            Blood Request Form
          </h3>
          <BloodRequestForm donorId={searchParams?.donorId} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default BloodRequestPage;
