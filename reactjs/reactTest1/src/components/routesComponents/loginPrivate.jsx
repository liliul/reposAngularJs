export const LoginPrivate = () => {
    const handleLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = '/private';
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
