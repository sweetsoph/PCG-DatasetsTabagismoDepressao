import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def plot_fd(dadosfd):
    base = pd.DataFrame(dadosfd)

    # chama a função 'subplots' e dá o tamanho do gráfico
    fig, ax = plt.subplots(figsize=(12, 7))

    # gera as legendas para o gráfico
    ax.set_title("Percentual de Pessoas Fumantes e Depressivas no Brasil")
    ax.set_ylabel("Estados")
    
    # retira a númeração padrão para o axis x 
    ax.xaxis.set_visible(False)

    # define a largura das barras
    bar_height = 0.77

    # define as posições das barras
    bar_positions = np.arange(len(base.X))

    # cria as barras, e nomeia as legendas para serem iguais a ela
    ax.barh(bar_positions, base.Y1, height=bar_height, label="F", color='blue', align='center')
    ax.barh(bar_positions, -base.Y2, height=bar_height, label="D", color='red', align='center')

    # Adiciona os valores de Y1 e Y2 sobre as barras no gráfico
    for i in range(len(base)):
        ax.annotate(f"{base.Y1[i]}", (base.Y1[i], bar_positions[i]), textcoords="offset points", xytext=(5, 0), ha='left', va='center')
        ax.annotate(f"{base.Y2[i]}", (-base.Y2[i], bar_positions[i]), textcoords="offset points", xytext=(-5, 0), ha='right', va='center')

    # Adiciona linha vertical no meio
    ax.axvline(0, color='black', linewidth=0.8)

    # Define a posição dos rótulos do eixo y
    ax.set_yticks(bar_positions)

    # Atribui os nomes dos estados aos rótulos do eixo y
    ax.set_yticklabels(base.X)

    # Ajusta os limites do eixo x para que o zero esteja no centro
    max_value = max(max(base.Y1), max(base.Y2))
    ax.set_xlim(-max_value * 1.1, max_value * 1.1)
    
    # Junta o topo e a parte de baixo do gráfico para ser junto das barras
    ax.set_ylim(-0.5, len(base.X) - 0.5)

    plt.legend()
    plt.show()