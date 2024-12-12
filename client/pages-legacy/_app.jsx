import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps }) => {
  console.log("From _app client side");
  return (
    <>
      <h1>Hi</h1>
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  console.log(Object.keys(appContext));
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  console.log(data);

  return data;
};

export default AppComponent;
