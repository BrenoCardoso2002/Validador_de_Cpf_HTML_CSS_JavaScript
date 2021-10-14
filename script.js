// Função de link que vai para o linkedin:
function CallLinkedin(){
    window.open("https://www.linkedin.com/in/breno-bernardo-da-silva-cardoso/")
}

// Função de mudança de texto:
function TextChanged(){
    let cpf = document.getElementById("txt_cpf")
    let status =  document.getElementById("status")
    status.innerHTML = ``

    if (ValidaChars(cpf.value) == false){
        cpf.value = `${cpf.value.substring(0, cpf.value.length-1)}`
    }

    if (cpf.value == ""){
        document.getElementById("Fonecido").innerHTML = `CPF fornecido:<br/>XXX.XXX.XXX-XX`
    }else{
        TransforToCpfStyle(cpf.value)
        if (ValidarCPF(cpf.value) == true){
            status.innerHTML = `CPF Válido`
        }else{
            status.innerHTML = `CPF Inválido`
        }
    }
}

// Função que exibe o dado do fonecido na tela:
function TransforToCpfStyle(CPF){
    // document.getElementById("Fonecido").innerHTML = `CPF fornecido:<br/>${CPF}`
    CpfExibecao = `${CPF.substring(0, 3)}.${CPF.substring(3, 6)}.${CPF.substring(6, 9)}-${CPF.substring(9, 11)}`
    document.getElementById("Fonecido").innerHTML = `CPF fornecido:<br/>${CpfExibecao}`
}

// Função que veridica se o CPF é válido ou não:
function ValidarCPF(cpf){
    //Verifica se a quantidade de caracteres é valida:
    if (cpf.length == 11){
        // return true
        // Verifica se todos os caracteres sao iguais:
        let AllEqual = true
        let FirstCgar = cpf.substring(0, 1)
        let indice1 = 0
        while (indice1 < 11){
            if (FirstCgar != cpf.substring(indice1, indice1+1)){
                AllEqual = false
            }
            indice1++
        }
        if (AllEqual == false){
            // return true
            // Verifica se o primeiro caracter é válido:
            let indice2 = 0
            let MultIndice1 = 10
            let FirstDigito = 0
            while (indice2 < 9){
                FirstDigito += (MultIndice1*parseInt(cpf.substring(indice2, indice2+1)))
                indice2++
                MultIndice1--
            }
            FirstDigito = (FirstDigito*10)%11
            if (FirstDigito == parseInt(cpf.substring(9, 10))){
                // return true
                // Verifica se o segundo caracter é válido:
                let indice3 = 0
                let MultIndice2 = 11
                let SecondDigito = 0
                while (indice3 < 10){
                    SecondDigito += (MultIndice2*parseInt(cpf.substring(indice3, indice3+1)))
                    indice3++
                    MultIndice2--
                }
                SecondDigito = (SecondDigito*10)%11
                if (SecondDigito == parseInt(cpf.substring(10, 11))){
                    return true
                }else{
                    return false
                }
            }else{
                return false
            }
        }else{
            return false
        }
    }else{
        return false
    }
}

// Valida caracteres digitados e permite que seja digitado apenas números:
function ValidaChars(cpf){
    let ultchar = cpf.substring(cpf.length-1, cpf.length)
    return !isNaN(parseInt(ultchar)) && isFinite(ultchar);
}
