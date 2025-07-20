import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [contents, setContents] = useState([])

    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((response) => {
                setContents(response.data.content)
            })
    }, [])

    return contents;
}