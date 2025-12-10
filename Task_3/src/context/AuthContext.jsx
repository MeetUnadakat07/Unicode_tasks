import React, { createContext, useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { getCurrentUser } from "../api/authApi";

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = Cookies.get("token");

        if(!token) {
            setLoading(false);
            return;
        }

        const fetchMe = async () => {
            try {
                const res = await getCurrentUser();
                setUser(res.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching current user", err);
                Cookies.remove("token");
                setUser(null);
                setError("Session expired. Please login again.");
            } finally {
                setLoading(false);
            }
        };
        fetchMe();
    }, []);

    const logout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    const value = {user, setUser, loading, error, setLoading};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
