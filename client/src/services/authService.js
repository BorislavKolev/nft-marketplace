const baseUrl = 'http://localhost:3030/auth';

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = (username, email, password, repassword) => {
    if (password !== repassword) {
        throw new Error("Password and Repeat Password should match");
    }

    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
        .then(res => res.json()); 
};


export const logout = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ token })
    })
        .then(res => res.json()); 
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser())
};

export const getOne = (userId) => {
    return fetch(`${baseUrl}/${userId}/details`)
        .then(res => res.json())
        .then(res => res.user)
};