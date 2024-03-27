import { useRouteError } from "react-router-dom";
//This is the error page, created a custom error message to let the user know how to get back.
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>You may have taken a wrong turn, smash that back button.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
