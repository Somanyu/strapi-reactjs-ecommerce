import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
    localStorage.setItem(
        "user",
        JSON.stringify({
            username: data.user.username,
            userId: data.user.id,
            email: data.user.email,
            jwt: data.jwt,
        })
    );
};


export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""';
    return JSON.parse(stringifiedUser || {});
};


export const Protector = ({ Component }) => {
    const navigate = useNavigate();

    const { jwt } = userData();

    useEffect(() => {
        if (!jwt) {
            navigate("/login");
        }
    }, [navigate, jwt]);

    return <Component />;
};



// export const storeUser = (data) => {
//     const userData = {
//         username: data.user.username,
//         userId: data.user.id,
//         email: data.user.email,
//     };

//     document.cookie = `userData=${JSON.stringify(userData)}; path=/; secure; HttpOnly`;
//     document.cookie = `jwt=${data.jwt}; path=/; secure; HttpOnly`;
// };

// export const userData = () => {
//     const userDataString = getCookie("userData");
//     return userDataString ? JSON.parse(userDataString) : {};
// };

// export const Protector = ({ Component }) => {
//     const navigate = useNavigate();

//     const jwt = getCookie("jwt");

//     useEffect(() => {
//         if (!jwt) {
//             navigate("/login");
//         }
//     }, [navigate, jwt]);

//     return <Component />;
// };


// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(";").shift();
// }