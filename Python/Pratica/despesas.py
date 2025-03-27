valor = 0
receita = 0

while True:

    print('************ MENU *************')
    print('(1) adicionar despesa')
    print('(2) pagar despesa')
    print('(3) adicionar renda')
    print('(4) mostrar renda')
    print('(5) mostrar valor a pagar')
    print('(6) sair')
    print('*******************************')


    acao = int(input('qual ação deseja realizar? '))


    if acao == 1:
        despesa = float(input('digite o valor que deseja adicionar: '))
        valor += despesa
    elif acao == 2:
        pagamento = float(input('digite o valor que deseja pagar: '))
        if pagamento < valor:
            print('esse valor é menor que a sua despesa!')
        else:
            valor -= pagamento
    elif acao == 3:
        renda = float(input('digite o valor que deseja adicionar: '))
        receita += renda
    elif acao == 4:
        print(f'sua receita total é: {receita}')
    elif acao == 5:
        print('esse é o valor da sua despesa:')
        print(valor)
    elif acao.lower() == 6:
        break
    else:
        print('valor invalido,tente novamente')
print('processo finalizado, volte sempre!')

        

'''receita = input('Digite sua receita mensal:')
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

'''
