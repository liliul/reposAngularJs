import React, { useState, useContext, createContext } from 'react';

// Contexto para gerenciar os toasts
const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        setToasts((prevToasts) => [...prevToasts, { ...toast, id: Date.now() }]);
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <Toaster toasts={toasts} onDismiss={removeToast} />
        </ToastContext.Provider>
    );
};

// Componente Toaster
const Toaster = ({ toasts, onDismiss }) => {
    return (
        <div className="toast-container">
            {toasts.map((toast) => (
                <div key={toast.id} className={`toast ${toast.type}`}>
                    <h4>{toast.title}</h4>
                    <div>{toast.description}</div>
                    {toast.action && (
                        <button onClick={toast.action.onClick}>{toast.action.label}</button>
                    )}
                    <button onClick={() => onDismiss(toast.id)}>Close</button>
                </div>
            ))}
        </div>
    );
};

// Hook personalizado para usar toasts
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast deve ser usado dentro de um ToastProvider');
    }
    return context;
};

// Função toast que usa o hook
export const toast = {
    show: (message, options = {}) => {
        const { addToast } = useToast(); // Agora estamos usando o hook
        addToast({ title: 'Notification', description: message, ...options });
    },
    success: (message, options) => toast.show(message, { type: 'success', ...options }),
    error: (message, options) => toast.show(message, { type: 'error', ...options }),
    info: (message, options) => toast.show(message, { type: 'info', ...options }),
    warning: (message, options) => toast.show(message, { type: 'warning', ...options }),
};
