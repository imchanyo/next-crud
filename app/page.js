import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import LoginBtn from "./LoginBtn";

export default async function Home() {
  const user = await getServerSession(authOptions);

  return (
    <>
      <LoginBtn user={user} />
    </>
  );
}
