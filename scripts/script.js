var app = angular.module('fimApp',[]); 
app.controller('AppCtrl', function($scope){
    $scope.mensagem = 'Opa, Deu Certo!';
    
    $scope.contatos = [{
        nome: "Gabriel",
        telefone : 223344
    },
    {
        nome: "Leninho",
        telefone : 556677
    },
    {
        nome: "Tutuzinho",
        telefone : 889933
    }]
    $scope.exibirNome = function(nome){
        console.log(nome);  
    }
    }
);