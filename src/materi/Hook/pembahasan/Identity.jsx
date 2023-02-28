import { useCallback, useEffect, useState } from "react";

const Identity = () => {
    const fetchUser = useCallback(() => ['Alif', 'Zaqi', 'Difa'], []);
    let [user, setUser] = useState([]);

    useEffect(() => {
        const data = fetchUser();
        setUser(data);
    }, [fetchUser])

    return(
        <div>
            <ul>
                <li>
                    {
                        user.map(u => <li key={u}><p>{u}</p></li>)
                    }
                </li>
            </ul>
        </div>
    )
}

export default Identity