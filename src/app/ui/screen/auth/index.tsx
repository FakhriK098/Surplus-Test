import React from "react";
import { AuthControler } from "../../../controllers";
import MyComponent from "./components/MyComponent";

const AuthScreen = () => {
    return (
        <AuthControler.Provider>
            <MyComponent/>
        </AuthControler.Provider>
    );
};

export default AuthScreen;