import ResetPassword from "@/containers/resetPassword/ResetPassword";

const page = ({
  params,
  searchParams,
}: {
  params: { token: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div>
      <ResetPassword token={searchParams.token} />
    </div>
  );
};

export default page;
