document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const generateButton = document.getElementById('generate-button');
    const apiUrl = 'https://catfact.ninja/fact';

    // Função para buscar e exibir o fato
    async function fetchCatFact() {
        factText.textContent = 'Carregando curiosidade...'; // Mensagem de carregamento
        generateButton.disabled = true; // Desabilita o botão enquanto carrega

        try {
            const response = await fetch(apiUrl);
            
            // Verifica se a resposta foi bem sucedida
            if (!response.ok) {
                throw new Error(`Erro de rede: ${response.status}`);
            }

            const data = await response.json();
            
            // O texto do fato está no campo 'fact' da resposta da API
            factText.textContent = data.fact;

        } catch (error) {
            console.error('Erro ao buscar o fato:', error);
            factText.textContent = 'Ops! Não foi possível carregar o fato. Tente novamente.';
        } finally {
            generateButton.disabled = false; // Reabilita o botão
        }
    }

    // Adiciona o evento de clique ao botão
    generateButton.addEventListener('click', fetchCatFact);

    // Carrega um fato ao carregar a página
    fetchCatFact();
});
