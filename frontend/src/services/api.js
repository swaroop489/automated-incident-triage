export const checkBackendConnection = async () => {
    try {
        const response = await fetch('/internal/health');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
};
