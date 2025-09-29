
class Group177 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Design Tokens */
:host {
  --c7-color-brand-primary: rgba(0, 123, 255, 1);
  --c7-color-brand-secondary: rgba(108, 117, 125, 1);
  --c7-color-text-on-primary: rgba(255, 255, 255, 1);
  --c7-color-text-default: rgba(33, 37, 41, 1);
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --font-size-md: 16px;
  --font-size-xl: 24px;
  --font-size-sm: 14px;
  --font-size-lg: 20px;
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 28px;
  --line-height-normal: 1.5;
}

.web-component-root {
  display: flex; /* Define o layout como flexbox para o contêiner principal */
  flex-direction: row; /* Padrão em coluna ou inferido */
  gap: var(--spacing-md, 16px); /* Usar token de espaçamento ou fallback */
  width: 100%; /* Ocupa a largura disponível do pai */
  height: auto; /* Altura se adapta ao conteúdo */
  box-sizing: border-box;
  overflow: hidden;
  padding: var(--spacing-md, 16px); /* Padding base para o root */
}

.node-2400-1060 {
  box-sizing: border-box;
  margin: 0; padding: 0;
  flex-shrink: 0; /* Impede o encolhimento, preservando o tamanho original */
  min-width: 139px;
  min-height: 30px;
  width: auto; /* Permite expansão em layouts flex */
  height: auto; /* Altura se adapta ao conteúdo */
  border-radius: 6px;
.node-2400-1060.flex-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-sm, 8px);
  align-items: flex-start; /* Alinhamento padrão */
  justify-content: flex-start; /* Justificação padrão */
  padding: var(--spacing-sm, 8px); /* Padding interno */
  flex-wrap: wrap; /* Permitir quebra de linha para responsividade */
}

}

.node-2359-1061 {
  box-sizing: border-box;
  margin: 0; padding: 0;
  flex-shrink: 0; /* Impede o encolhimento, preservando o tamanho original */
  min-width: 139px;
  min-height: 30px;
  width: auto; /* Permite expansão em layouts flex */
  height: auto; /* Altura se adapta ao conteúdo */
  border-radius: 6px;
.node-2359-1061.flex-container {
  display: flex;
  flex-direction: row;
  gap: var(--spacing-sm, 8px);
  align-items: flex-start; /* Alinhamento padrão */
  justify-content: flex-start; /* Justificação padrão */
  padding: var(--spacing-sm, 8px); /* Padding interno */
  flex-wrap: wrap; /* Permitir quebra de linha para responsividade */
}

}

.node-2335-1072 {
  box-sizing: border-box;
  margin: 0; padding: 0;
  flex-shrink: 0; /* Impede o encolhimento, preservando o tamanho original */
  min-width: 139px;
  min-height: 30px;
  width: auto; /* Permite expansão em layouts flex */
  height: auto; /* Altura se adapta ao conteúdo */
  background-color: rgba(229, 160, 0, 1.00);
  border: 1px solid rgba(255, 255, 255, 1.00);
  border-radius: 6px;
}

.node-2335-1073 {
  box-sizing: border-box;
  margin: 0; padding: 0;
  flex-shrink: 0; /* Impede o encolhimento, preservando o tamanho original */
  min-width: 88.45455169677734px;
  min-height: 20px;
  width: auto; /* Permite expansão em layouts flex */
  height: auto; /* Altura se adapta ao conteúdo */
  background-color: rgba(255, 255, 255, 1.00);
  font-family: 'Inter', sans-serif;
  font-size: var(--font-size-md);
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  color: rgba(255, 255, 255, 1.00);
}


            </style>
            <div class="web-component-root">
<div class="node-2359-1061 flex-container"><div class="node-2335-1072"></div>
</div>
<p class="node-2335-1073">mudado</p>

    </div>
        `;
    }
    // Adicione lifecycle callbacks ou methods se necessário
    connectedCallback() {
        console.log('Group177 conectado ao DOM');
    }
}
customElements.define('-group177', Group177);
            