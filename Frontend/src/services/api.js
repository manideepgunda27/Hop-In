export const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        return await response.json(); // Return the JSON data if login is successful
    } catch (error) {
        console.error('Login error:', error);
        throw error; // Rethrow the error to be handled by the calling function
    }
};


export const register = async (name, email, password, phone, role) => {
    try {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, phone, role }),
        });
        //if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }

};

