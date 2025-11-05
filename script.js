// Data definition
const CARDS = [
  {
    "id": "tf-idf",
    "title": "TF–IDF",
    "definition": "Pondera términos por frecuencia en el documento y rareza en el corpus; base vectorial para similitud y recuperación de información.",
    "formula": "\\text{TF-IDF}(t,d,D) = \\text{tf}(t,d) \\times \\log\\left( \\frac{N}{\\text{df}(t)} \\right)",
    "interpretation": "El peso del término t en el documento d crece con su frecuencia local y decrece con su frecuencia global en el corpus D.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/02_eda_pivotes.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/LDA%20%2B%20TF-IDF.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/03_derechos_reproductivos.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/06_eda_signos_uandes.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/09_tf_idf_lda_intervalos.ipynb"
    ]
  },
  {
    "id": "lda",
    "title": "LDA (Latent Dirichlet Allocation)",
    "definition": "Modelo generativo que representa documentos como mezclas de tópicos y cada tópico como una distribución sobre palabras.",
    "formula": "p(w \\mid \\alpha, \\beta) = \\sum_{z} p(z \\mid \\alpha)\\, p(w \\mid z, \\beta)",
    "interpretation": "Un documento es una combinación ponderada de tópicos; cada tópico es una distribución léxica. La inferencia ajusta ambas distribuciones para explicar las palabras observadas.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/LDA%20%2B%20TF-IDF.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/03_derechos_reproductivos.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/06_eda_signos_uandes.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/09_tf_idf_lda_intervalos.ipynb"
    ]
  },
  {
    "id": "spacy",
    "title": "spaCy (`es_core_news_lg`)",
    "definition": "Pipeline industrial para español con tokenización, lematización, NER y dependencias; base para preprocesamiento estructural.",
    "formula": "x = f(\\text{tokenización},\\,\\text{lemmatización},\\,\\text{vectorización})",
    "interpretation": "No tiene una fórmula cerrada: combina reglas lingüísticas y embeddings estadísticos para obtener representaciones estructuradas del texto.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/02_eda_pivotes.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/03_derechos_reproductivos.ipynb"
    ]
  },
  {
    "id": "textblob",
    "title": "TextBlob",
    "definition": "Librería accesible para polaridad y subjetividad; útil en prototipos de análisis de sentimiento clásico.",
    "formula": "\\text{Sentiment}(d) = \\frac{1}{N} \\sum_{i=1}^{N} s(w_i)",
    "interpretation": "El sentimiento del documento se aproxima como el promedio de puntajes léxicos de sus palabras o frases, sin modelar el contexto sintáctico.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/02_eda_pivotes.ipynb",
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/03_derechos_reproductivos.ipynb"
    ]
  },
  {
    "id": "sentiment-bert",
    "title": "Sentiment BERT (finiteautomata/beto-emotion-analysis)",
    "definition": "Modelo BETO especializado en emociones para español; captura dependencias contextuales profundas en clasificación afectiva.",
    "formula": "y = \\operatorname{softmax}(W\\, h_{[CLS]} + b)",
    "interpretation": "El embedding contextual global (token [CLS]) se proyecta linealmente y se normaliza con softmax para obtener probabilidades por clase emocional.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/04_think_tank_bert_gpu.ipynb"
    ]
  },
  {
    "id": "mpnet",
    "title": "Sentence Transformers (paraphrase-multilingual-mpnet-base-v2)",
    "definition": "Embeddings oracionales multilingües basados en MPNet; optimizados para similitud semántica y búsqueda.",
    "formula": "\\text{Sim}(s_1,s_2) = \\frac{E(s_1) \\cdot E(s_2)}{\\lVert E(s_1)\\rVert\\,\\lVert E(s_2)\\rVert}",
    "interpretation": "Cada oración se mapea a un vector denso en un espacio semántico; la similitud coseno mide coincidencia de significado más allá del léxico superficial.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/12_BERTopic.ipynb"
    ]
  },
  {
    "id": "bertopic",
    "title": "BERTopic",
    "definition": "Topic modeling contextual: combina embeddings (p. ej., MPNet), UMAP y HDBSCAN para tópicos coherentes.",
    "formula": "\\text{topic}(E) = \\operatorname{HDBSCAN}(\\operatorname{UMAP}(E))",
    "interpretation": "Reduce dimensionalidad preservando estructura global (UMAP) y agrupa por densidad (HDBSCAN) para revelar conglomerados semánticos interpretables.",
    "repo_links": [
      "https://github.com/RodrigoMolinaAvila/minicoesfondap-1523A0005/blob/main/Analysis/12_BERTopic.ipynb"
    ]
  }
];

class NLPVisualization {
    constructor() {
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.isAutoPlaying = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }
    
    init() {
        this.setupProgressIndicators();
        this.renderCard(this.currentIndex);
        this.updateCounter();
        this.setupEventListeners();
        this.handleInitialHash();
        
        // Initialize MathJax
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }
    
    setupProgressIndicators() {
        const progressContainer = d3.select('#progress-container');
        
        // Bind data to dots
        const dots = progressContainer.selectAll('div')
            .data(CARDS)
            .enter()
            .append('div')
            .attr('class', 'progress-dot')
            .attr('data-index', (d, i) => i)
            .style('cursor', 'pointer')
            .on('click', (event, d) => {
                const index = CARDS.indexOf(d);
                this.goToCard(index);
            });
        
        // Set initial active state
        dots.classed('active', (d, i) => i === this.currentIndex);
    }
    
    renderCard(index) {
        const cardData = CARDS[index];
        const container = d3.select('#card-container');
        
        // Clear previous content
        container.selectAll('*').remove();
        
        // Create card
        const card = container.append('div')
            .attr('class', 'card p-8 rounded-2xl shadow-xl bg-white border border-orange-200')
            .attr('role', 'article')
            .attr('aria-live', 'polite');
        
        // Title
        card.append('h2')
            .attr('class', 'text-2xl md:text-3xl font-semibold text-orange-900 mb-4')
            .text(cardData.title);
        
        // Definition
        card.append('p')
            .attr('class', 'text-base md:text-lg text-stone-800 leading-relaxed mb-6')
            .text(cardData.definition);
        
        // Formula
        const formulaContainer = card.append('div')
            .attr('class', 'math-display');
        
        formulaContainer.append('div')
            .attr('class', 'MathJax')
            .html(`\\[${cardData.formula}\\]`);
        
        // Interpretation
        card.append('p')
            .attr('class', 'text-sm italic text-orange-800 mt-4 mb-6')
            .text(cardData.interpretation);
        
        // Repository links
        if (cardData.repo_links && cardData.repo_links.length > 0) {
            card.append('h3')
                .attr('class', 'text-lg font-medium text-orange-900 mb-3')
                .text('Notebooks de análisis:');
            
            const linksContainer = card.append('div')
                .attr('class', 'space-y-2');
            
            cardData.repo_links.forEach(link => {
                const filename = link.split('/').pop().replace(/%20/g, ' ');
                const linkElement = linksContainer.append('a')
                    .attr('href', link)
                    .attr('target', '_blank')
                    .attr('rel', 'noopener noreferrer')
                    .attr('class', 'repo-link flex items-center gap-2 p-3 border border-orange-200 rounded-lg bg-orange-50 text-orange-700 hover:text-orange-900 hover:bg-orange-100 transition-all');
                
                // GitHub icon
                linkElement.append('svg')
                    .attr('width', '20')
                    .attr('height', '20')
                    .attr('viewBox', '0 0 24 24')
                    .attr('fill', 'currentColor')
                    .html('<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>');
                
                linkElement.append('span')
                    .text(filename);
            });
        }
        
        // Trigger animation
        setTimeout(() => {
            card.classed('active', true);
            if (window.MathJax) {
                MathJax.typesetPromise([card.node()]);
            }
        }, 50);
        
        this.updateProgressIndicators();
        this.updateHash();
    }
    
    updateProgressIndicators() {
        d3.selectAll('.progress-dot')
            .classed('active', (d, i) => i === this.currentIndex);
    }
    
    updateCounter() {
        document.getElementById('counter').textContent = `${this.currentIndex + 1}/${CARDS.length}`;
    }
    
    updateHash() {
        const card = CARDS[this.currentIndex];
        window.location.hash = card.id;
    }
    
    handleInitialHash() {
        const hash = window.location.hash.substring(1);
        const index = CARDS.findIndex(card => card.id === hash);
        if (index !== -1) {
            this.currentIndex = index;
            this.renderCard(index);
            this.updateCounter();
        }
    }
    
    setupEventListeners() {
        // Button controls
        document.getElementById('prev-btn').addEventListener('click', () => this.prevCard());
        document.getElementById('next-btn').addEventListener('click', () => this.nextCard());
        document.getElementById('play-btn').addEventListener('click', () => this.toggleAutoPlay());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevCard();
            if (e.key === 'ArrowRight') this.nextCard();
            if (e.key === ' ') {
                e.preventDefault();
                this.toggleAutoPlay();
            }
        });
        
        // Touch navigation
        const container = document.getElementById('app');
        container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });
        
        container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        // Hash change
        window.addEventListener('hashchange', () => {
            this.handleInitialHash();
        });
        
        // Pause auto-play on interaction
        ['mousedown', 'touchstart', 'keydown'].forEach(event => {
            document.addEventListener(event, () => {
                if (this.isAutoPlaying) {
                    this.stopAutoPlay();
                }
            }, { once: true });
        });
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextCard();
            } else {
                this.prevCard();
            }
        }
    }
    
    goToCard(index) {
        if (index >= 0 && index < CARDS.length && index !== this.currentIndex) {
            this.currentIndex = index;
            this.renderCard(index);
            this.updateCounter();
        }
    }
    
    nextCard() {
        const nextIndex = (this.currentIndex + 1) % CARDS.length;
        this.goToCard(nextIndex);
    }
    
    prevCard() {
        const prevIndex = (this.currentIndex - 1 + CARDS.length) % CARDS.length;
        this.goToCard(prevIndex);
    }
    
    toggleAutoPlay() {
        if (this.isAutoPlaying) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }
    
    startAutoPlay() {
        this.isAutoPlaying = true;
        const playBtn = document.getElementById('play-btn');
        playBtn.innerHTML = '<i data-feather="pause" class="inline w-4 h-4"></i>';
        feather.replace();
        
        this.autoPlayInterval = setInterval(() => {
            this.nextCard();
        }, 7000);
    }
    
    stopAutoPlay() {
        this.isAutoPlaying = false;
        const playBtn = document.getElementById('play-btn');
        playBtn.innerHTML = '<i data-feather="play" class="inline w-4 h-4"></i>';
        feather.replace();
        
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NLPVisualization();
    
    // Initialize Feather icons
    feather.replace();
});