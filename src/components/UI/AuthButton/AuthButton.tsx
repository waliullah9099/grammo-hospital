import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUser } from "@/services/auth.services";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo?.userId ? (
        <Button
          color="error"
          variant="contained"
          onClick={handleLogOut}
          sx={{ boxShadow: 0 }}
        >
          Logout
        </Button>
      ) : (
        <Button variant="contained" component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
