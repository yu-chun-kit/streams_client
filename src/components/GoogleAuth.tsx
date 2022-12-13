import React, { useEffect } from "react";

type Props = {};

const GoogleAuth = (props: Props) => {
  useEffect(() => {
    window!.gapi.load("client:auth2", () => {
      window!.gapi.client.init({
        clientId: "YOUR_CLIENT_ID",
        scope: "email",
        plugin_name: "streamy",
      });
    });
  }, []);

  return <div>GoogleAuth</div>;
};

export default GoogleAuth;
