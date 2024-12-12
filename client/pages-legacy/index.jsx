import buildClient from "../api/build-client";

export const getServerSideProps = async (context) => {
  console.log("From landing page server side");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return { props: { data } };
};

export default ({ data: { currentUser } }) => {
  console.log("From landing page client side", currentUser);
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};
