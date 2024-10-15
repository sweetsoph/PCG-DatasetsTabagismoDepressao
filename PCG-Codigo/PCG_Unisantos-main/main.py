from plot_fumantes import plot_fumantes
from plot_depressivos import plot_depressivos
from plot_fd import plot_fd


dadosf = {
    'X': ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'],
    'Y1': [16.6, 19.0, 16.0, 16.5, 14.3, 15.0, 17.6, 16.0, 15.9, 15.4, 15.9, 14.5, 14.7, 13.9, 11.6, 13.7, 17.1, 14.0, 14.6, 17.7, 17.3, 15.7, 17.8, 20.8, 16.3, 18.1, 15.1],
    'Y2': [5.2, 11.5, 4.8, 6.8, 6.1, 7.0, 8.1, 7.0, 7.9, 9.5, 7.4, 9.4, 8.5, 7.9, 7.5, 6.8, 9.7, 7.1, 10.0, 11.5, 12.3, 10.6, 14.1, 12.4, 10.0, 10.1, 8.7],

}

# # dados para o gráfico de depressivos
dadosd = {
    'X': ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'],
    'Y1': [5.1, 2.5, 2.9, 2.8, 2.5, 2.0, 2.7, 2.4, 3.4, 4.0, 3.8, 3.9, 2.5, 3.3, 4.0, 2.2, 7.9, 5.7, 4.7, 5.7, 6.5, 5.6, 9.8, 4.3, 3.3, 5.9, 4.7],
    'Y2': [12.8, 9.3, 5.4, 7.3, 5.6, 6.9, 10.4, 8.2, 10.0, 11.6, 12.6, 10.7, 10.2, 8.7, 12.5, 10.0, 18.8, 16.3, 10.8, 17.2, 20.5, 20.2, 25.0, 15.1, 12.7, 17.7, 13.5],
}

# dados para o gráfico de fumantes e depressivos
dadosfd = {
    'X': ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'],
    'Y1': [10.8, 15.1, 10.2, 11.6, 10.1, 10.9, 12.8, 11.3, 11.7, 12.2, 11.3, 11.8, 11.3, 10.6, 9.4, 10.1, 13.2, 10.4, 12.1, 14.4, 14.7, 13.1, 15.8, 16.3, 13.0, 13.9, 11.6],
    'Y2': [9.0, 6.0, 4.2, 5.1, 4.1, 4.5, 6.6, 5.4, 6.9, 8.1, 8.5, 7.6, 6.8, 6.2, 8.5, 6.3, 12.7, 11.3, 8.1, 11.8, 13.9, 13.1, 17.9, 10.1, 8.2, 12.0, 9.4,],
}

# print e for usados para a criação do cabeçalho
print("")
print("------------------------------------------------------")
print("Trabalho de Felipe Carvalho, Kauan Alves, Sophia Araujo e Vinicius Peres")
print("------------------------------------------------------")
print("A relação entre o tabagismo e a depressão")

for i in range (6):
    print("|")

print("MENU")
print("Escreva: f (fumantes), d (depressivos) fd (para a comparação entre os dois) ou s (para terminar o programa)")
print("")

# # while infinito para sempre voltar para a pergunta do que o usuário deseja ver após o if ser chamado, apenas será interrompido 
# # caso ele digite 's' para chamar o elif com brake para parar o while
while True: 
 graf = input("O que deseja ver?:")
 print("")

 if (graf == "f"):
    plot_fumantes(dadosf)
    
 elif (graf == "d"):
    plot_depressivos(dadosd)
    print("")
        
 elif (graf == "fd"):
    plot_fd(dadosfd)
    print("")
 elif (graf == "s"):
     print("Obrigado pela atenção!")
     break       
 else:
     print("Opção não definida digite novamente")
     
# com um else feito caso o usuário digite uma opção não listada     
     
     
     
 