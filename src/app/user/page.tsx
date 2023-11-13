import { getServerAuthSession } from "@/server/auth";
import Header from "../_components/header/header";

export default async function Profile() {
  const session = await getServerAuthSession();
  return (
    <>
      <Header />
      <main className="m-8">{session?.user?.name}</main>
    </>
  );
}
