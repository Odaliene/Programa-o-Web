// Inicializar o módulo.
let nomeApp = 'EscolaWebApp';
let modulos = [];
var app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controlador.
var homeController = function($scope){
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller('HomeController', homeController);

var alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.nascimento = "";
  $scope.id_endereço = "";
}

app.controller('AlunoController', alunoController);

var turnoController = function($scope){
  $scope.nome = "";
}

app.controller('TurmaController', turmaController);

var alunoController = function($scope){
  $scope.nome = "";
  $scope.curso = "";

}

app.controller('TurmaController', turmaController);

var escolaController = function($scope){
  $scope.nome = "";
  $scope.logradouro = "";
  $scope.cidade = "";


app.controller('EscolaController', escolaController);

var endereçoController = function($scope){
  $scope.logradouro = "";
  $scope.complemento = "";
  $scope.bairro = "";
  $scope.cep = "";
  $scope.numero = "";
}

app.controller('EndereçoController', endereçoController);

var disciplinaController = function($scope){
  $scope.nome = "";
  $scope.profesor = "";

}

app.controller('DisciplinaController', disciplinaController);

var cursoController = function($scope){
  $scope.nome = "";
  $scope.turno = "";

}

app.controller('CursoController', cursoController);

var campusController = function($scope){
  $scope.nome = "";
  $scope.curso = "";
}

app.controller('CampusController', campusController);

// Aluno - Factory
var alunoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/aluno";

  var _cadastrar = function(aluno) {
    return $http.post(path, aluno)
  };

  var _atualizar = function(aluno) {
    return $http.put(path, aluno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("alunoApi", alunoFactory);

// Campus - Factory
var campusFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/campus";

  var _cadastrar = function(campus) {
    return $http.post(path, campus)
  };

  var _atualizar = function(campus) {
    return $http.put(path, campus)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("campusApi", campusFactory);

// Curso - Factory
var cursoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/curso";

  var _cadastrar = function(curso) {
    return $http.post(path, curso)
  };

  var _atualizar = function(curso) {
    return $http.put(path, curso)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("cursoApi", cursoFactory);

// disiciplina - Factory
var disciplinaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/disicplina";

  var _cadastrar = function(disicplina) {
    return $http.post(path, disciplina)
  };

  var _atualizar = function(disciplina) {
    return $http.put(path, disciplina)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("disciplinaApi", disciplinaFactory);

// Endereço - Factory
var endereçoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/endereço";

  var _cadastrar = function(endereço) {
    return $http.post(path, endereço)
  };

  var _atualizar = function(endereço) {
    return $http.put(path, endereço)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("endereçoApi", endreçoFactory);

// Escola - Factory
var EscolaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/escola";

  var _cadastrar = function(escola) {
    return $http.post(path, escola)
  };

  var _atualizar = function(escola) {
    return $http.put(path, escola)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("escolaApi", escolaFactory);

// Turma - Factory
var turmaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turma";

  var _cadastrar = function(turma) {
    return $http.post(path, turma)
  };

  var _atualizar = function(turma) {
    return $http.put(path, turma)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turmaApi", turmaFactory);

// Turno - Factory
var turnoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turno";

  var _cadastrar = function(turno) {
    return $http.post(path, turno)
  };

  var _atualizar = function(turno) {
    return $http.put(path, turno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turnoApi", turnoFactory);


// Professor - Factory
var professorFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/professor";

  var _cadastrar = function(professor) {
    return $http.post(path, professor)
  };

  var _atualizar = function(professor) {
    return $http.put(path, professor)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("professorApi", professorFactory);
