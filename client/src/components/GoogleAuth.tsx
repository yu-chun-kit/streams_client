import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

type Props = {
  isSignedIn: boolean | null;
  signIn: Function;
  signOut: Function;
};

const GoogleAuth = (props: Props) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
  // let auth: any;

  useEffect(() => {
    window!.gapi.load("client:auth2", () => {
      window!.gapi.client
        .init({
          clientId:
            "YOUR_CLIENT_ID.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          const auth = window!.gapi.auth2.getAuthInstance();
          // setIsSignedIn(auth.isSignedIn.get());
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      props.signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    } else {
      props.signOut();
    }
  };

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state: any) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
