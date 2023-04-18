import React from "react";
import Chat from "./component/Chat";
import Login from "./component/Login";
import { auth } from "./component/Firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState(() => auth.currentUser);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    const usubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return usubscribe;
  }, []);

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };
  if (initializing) return `Loading .....`;
  return <>{user ? <Chat signout={signOut} user={user}/> : <Login signin={signinWithGoogle} />}</>;
}

export default App;
