valor = 0

while True:

    print('************ MENU *************')
    print('(1) adicionar dispesa')
    print('(2) pagar despesa')
    print('(3) mostrar valor a pagar')
    print('(4) sair')
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
        print('esse é o valor da sua despesa:')
        print(valor)
    elif acao.lower() == 4:
        break
    else:
        print('valor invalido,tente novamente')
print('processo finalizado, volte sempre!')

        


