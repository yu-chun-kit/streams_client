import React, { useEffect, useState } from "react";

type Props = {};

const GoogleAuth = (props: Props) => {
  const [isSignedIn, setIsSignedIn] = useState<null | boolean>(null);

  useEffect(() => {
    window!.gapi.load("client:auth2", () => {
      window!.gapi.client.init({
        clientId: "YOUR_CLIENT_ID",
        scope: "email",
        plugin_name: "streamy",
      }).then(() => {
        const auth = window!.gapi.auth2.getAuthInstance();
        console.log(auth.isSignedIn.get());
      })
    });
  }, []);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (isSignedIn) {
      return <div>I am signed in!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  };

  return <div>
    {renderAuthButton()}
  </div>;
};

export default GoogleAuth;
