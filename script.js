:root {
    --primary: #2A527A;
    --secondary: #439947;
    --accent: #FF6B35;
    --light: #F7F9FC;
    --dark: #1A2E4A;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    background-color: var(--light);
    color: var(--dark);
}

.app-container {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    width: 250px;
    background: var(--primary);
    padding: 2rem 1rem;
    color: white;
}

.logo {
    width: 80%;
    display: block;
    margin: 0 auto 2rem;
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 8px;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn:hover {
    background: rgba(255,255,255,0.1);
}

.nav-btn.active {
    background: var(--secondary);
    font-weight: 600;
}

.main-content {
    flex: 1;
    padding: 2rem;
}

.page {
    display: none;
    max-width: 800px;
    margin: 0 auto;
}

.page.active {
    display: block;
}

/* Chat Interface Styles */
.chat-history {
    height: 60vh;
    overflow-y: auto;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    background: white;
}

.input-area {
    display: flex;
    gap: 10px;
}

#user-input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
}

#send-btn {
    padding: 0 20px;
    background: var(--secondary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
}

#send-btn:hover {
    background: #367a3a;
}

/* Responsive Design */
@media (max-width: 768px) {
    .app-container {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
        padding: 1rem;
    }
}
