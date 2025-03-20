receita = input('Digite sua receita mensal:')
despesas = input('Digite suas despesas mensais:')

try:
    despesas_float = float(despesas)
    receita_float = float(receita)

except ValueError:
    print('Por favor, digite apenas numeros válidos')
    exit()

res = receita_float - despesas_float

if res < 0 :
    print(f'você tem R${res:.2f} faltando para pagar as despesas')


else:
    print(f'Você tem R${res:.2f} de saldo')

print(f'Resumo:')
print(f'Receita: R${receita_float:.2f}')
print(f'despesas: R${despesas_float:.2f}')

if res >= 1000:
    print(f'relatorio: situação financeira positiva')

elif res > 0 and res < 1000:
    print('Relatório: situação financeira intermediaria')

else:
    print('Relatório: Situação financeira negativa!!!')
