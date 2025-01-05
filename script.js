// Array de objetos com alunos e suas respectivas notas
const estudantes = [{
        aluno: "João",
        nota: 8
    },
    {
        aluno: "Maria",
        nota: 5
    },
    {
        aluno: "Pedro",
        nota: 6
    },
    {
        aluno: "Ana",
        nota: 7
    },
    {
        aluno: "Carlos",
        nota: 4
    },
    {
        aluno: "Beatriz",
        nota: 9
    },
    {
        aluno: "Lucas",
        nota: 3
    },
    {
        aluno: "Fernanda",
        nota: 10
    },
    {
        aluno: "Rafael",
        nota: 5.5
    },
    {
        aluno: "Juliana",
        nota: 6.5
    }
];

// Arrays para armazenar aprovados e reprovados
const aprovados = [];
const reprovados = [];

// Condicional para separar os alunos
estudantes.forEach(estudante => {
    if (estudante.nota >= 6) {
        aprovados.push(estudante);
    } else {
        reprovados.push(estudante);
    }
});

estudantes.forEach(estudante =>
    (estudante.nota >= 6 ? aprovados : reprovados).push(estudante)
);

// Exibindo os resultados
console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);