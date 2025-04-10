export const generateReport = async (transcript) => {
    const response = await fetch('http://localhost:8000/generate_report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript }),
    });
  
    return response.json();
  };