interface EmailData {
  email: string;
  date: string;
  recipe?: string;
}

const STORAGE_KEY = 'callebaut_emails';

export const saveEmail = async (email: string, recipe?: string): Promise<boolean> => {
  try {
    // Salvando no localStorage
    const existingData = localStorage.getItem(STORAGE_KEY);
    const data = existingData ? JSON.parse(existingData) : { emails: [] };

    const newEmail: EmailData = {
      email,
      date: new Date().toISOString(),
      recipe
    };

    data.emails.push(newEmail);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Enviando para o servidor salvar no arquivo JSON
    try {
      const response = await fetch('http://localhost:3001/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmail)
      });

      const result = await response.json();
      if (!result.success) {
        console.error('Erro ao salvar no arquivo:', result.error);
      }
    } catch (error) {
      console.error('Erro ao salvar no arquivo:', error);
    }

    return true;
  } catch (error) {
    console.error('Erro ao salvar email:', error);
    return false;
  }
};

// Função para verificar os emails salvos
export const checkSavedEmails = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    alert('Emails salvos: ' + JSON.stringify(JSON.parse(data).emails));
  } else {
    alert('Nenhum email salvo ainda');
  }
};

export const getEmails = async (): Promise<EmailData[]> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    
    const parsedData = JSON.parse(data);
    return parsedData.emails;
  } catch (error) {
    console.error('Erro ao ler emails:', error);
    return [];
  }
}; 