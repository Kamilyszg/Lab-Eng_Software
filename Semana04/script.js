window.onload = function() {
    function Pessoa(){
        
        this.nome = "";
        this.email = "";
        this.nascimento = "";
        this.tel_fixo = "";
        this.tel_celular = "";
        this.matricula = "";

        this.setNome = function(nome){this.nome = nome};
        this.getNome = function(){return this.nome};

        this.setEmail = function(email){this.email = email};
        this.getEmail = function(){return this.email};

        this.setNascimento = function(nascimento){this.nascimento = nascimento};
        this.getNascimento = function(){return this.nascimento};

        this.setFixo = function(tel_fixo){this.tel_fixo = tel_fixo};
        this.getFixo = function(){return this.tel_fixo};

        this.setCelular = function(tel_celular){this.tel_celular = tel_celular};
        this.getCelular = function(){return this.tel_celular};

        this.setMatricula = function(matricula){this.matricula = matricula};
        this.getMatricula = function(){return this.matricula};

    }

    function Professor(){

        Pessoa.call(this);

        this.setArea = function(area){this.area = area};
        this.getArea = function(){return this.area};

        this.setLattes = function(lattes){this.lattes = lattes};
        this.getLattes = function(){return this.lattes};

        this.adicionarCampos = function(){
            let div = document.getElementById("div");
            div.innerHTML = "";

            //Campo - Área
            let div_row = document.createElement("div");
            div_row.setAttribute("class", "row mt-3");

            let div_col = document.createElement("div");
            div_col.setAttribute("class", "col-7");

            div_row.appendChild(div_col);

            let label_area = document.createElement("label");
            label_area.setAttribute("for", "area");
            label_area.setAttribute("class", "form-label");

            let label_area_texto = document.createTextNode("Area");

            label_area.appendChild(label_area_texto);
            div_col.appendChild(label_area);

            let input_area = document.createElement("input");
            input_area.setAttribute("type", "text");
            input_area.setAttribute("name", "area");
            input_area.setAttribute("id", "area");
            input_area.setAttribute("class","form-control");
            input_area.setAttribute("placeholder","Digite sua área de atuação");

            div_col.appendChild(input_area);

            //Campo - Matrícula
            let div_col_matricula = document.createElement("div");
            div_col_matricula.setAttribute("class", "col");

            div_row.appendChild(div_col_matricula);

            let label_matricula = document.createElement("label");
            label_matricula.setAttribute("for", "matricula");
            label_matricula.setAttribute("class", "form-label");

            let label_matricula_texto = document.createTextNode("Matrícula");

            label_matricula.appendChild(label_matricula_texto);
            div_col_matricula.appendChild(label_matricula);

            let input_matricula = document.createElement("input");
            input_matricula.setAttribute("type", "number");
            input_matricula.setAttribute("name", "matricula");
            input_matricula.setAttribute("id", "matricula");
            input_matricula.setAttribute("class","form-control");
            input_matricula.setAttribute("placeholder","Digite sua matrícula");

            div_col_matricula.appendChild(input_matricula);

            div.appendChild(div_row);
            
            //Campo - Lattes
            let div_row2 = document.createElement("div");
            div_row2.setAttribute("class", "row mt-3");

            let div_col_lattes = document.createElement("div");
            div_col_lattes.setAttribute("class", "col");

            div_row2.appendChild(div_col_lattes);
            
            let label_lattes = document.createElement("label");
            label_lattes.setAttribute("for", "lattes");
            label_lattes.setAttribute("class", "form-label");
            
            let label_lattes_texto = document.createTextNode("Lattes");

            label_lattes.appendChild(label_lattes_texto);
            div_col_lattes.appendChild(label_lattes);

            let input_lattes = document.createElement("input");
            input_lattes.setAttribute("type", "text");
            input_lattes.setAttribute("name", "lattes");
            input_lattes.setAttribute("id", "lattes");
            input_lattes.setAttribute("class", "form-control");
            input_lattes.setAttribute("placeholder", "Digite aqui o endereço para seu Lattes");

            div_col_lattes.appendChild(input_lattes);
            div_row2.appendChild(div_col_lattes);
            div.appendChild(div_row2);
        }

        this.apresentarAtributos = function(){
            return `Nome: ${this.getNome()}\nEmail: ${this.getEmail()}\nNascimento: ${this.getNascimento()}\nTelefone Fixo: ${this.getFixo()}\nTelefone Celular: ${this.getCelular()}\nÁrea de Atuação: ${this.getArea()}\nMatrícula: ${this.getMatricula()}\nLattes: ${this.getLattes()}`;
        }
    }

    function Aluno(){

        Pessoa.call(this);

        this.setCurso = function(curso){this.curso = curso};
        this.getCurso = function(){return this.curso};

        this.adicionarCampos = function(){
            let div = document.getElementById("div");
            div.innerHTML = "";

            //Campo - Curso
            let div_row = document.createElement("div");
            div_row.setAttribute("class", "row mt-3");

            let div_col = document.createElement("div");
            div_col.setAttribute("class", "col-7");

            div_row.appendChild(div_col);

            let label_curso = document.createElement("label");
            label_curso.setAttribute("for", "curso");
            label_curso.setAttribute("class", "form-label");

            let label_curso_texto = document.createTextNode("Curso");
            label_curso.appendChild(label_curso_texto);

            div_col.appendChild(label_curso);

            let input_curso = document.createElement("input");
            input_curso.setAttribute("type", "text");
            input_curso.setAttribute("name", "curso");
            input_curso.setAttribute("id", "curso");
            input_curso.setAttribute("class", "form-control");
            input_curso.setAttribute("placeholder", "Digite seu curso");

            div_col.appendChild(input_curso);

            //Campo - Matrícula
            let div_col_matricula = document.createElement("div");
            div_col_matricula.setAttribute("class", "col");

            div_row.appendChild(div_col_matricula);

            let label_matricula = document.createElement("label");
            label_matricula.setAttribute("for", "matricula");
            label_matricula.setAttribute("class", "form-label");

            let label_matricula_texto = document.createTextNode("Matrícula");

            label_matricula.appendChild(label_matricula_texto);
            div_col_matricula.appendChild(label_matricula);

            let input_matricula = document.createElement("input");
            input_matricula.setAttribute("type", "number");
            input_matricula.setAttribute("name", "matricula");
            input_matricula.setAttribute("id", "matricula");
            input_matricula.setAttribute("class","form-control");
            input_matricula.setAttribute("placeholder","Digite sua matrícula");

            div_col_matricula.appendChild(input_matricula);

            div.appendChild(div_row);
        }

        this.apresentarAtributos = function(){
            return `Nome: ${this.getNome()}\nEmail: ${this.getEmail()}\nNascimento: ${this.getNascimento()}\nTelefone Fixo: ${this.getFixo()}\nTelefone Celular: ${this.getCelular()}\nCurso: ${this.getCurso()}\nMatrícula: ${this.getMatricula()}`;
        }
    }

    let professor, aluno;

    function formatarData(data) {
        return data.toLocaleDateString('pt-BR');
    }

    document.getElementById("radio_professor").addEventListener("click", ()=>{
        professor = new Professor();
        professor.adicionarCampos();
    });

    document.getElementById("radio_aluno").addEventListener("click", ()=>{
        aluno = new Aluno();
        aluno.adicionarCampos();
    });

    document.getElementById("botao").addEventListener("click", (event)=>{
        event.preventDefault();
        
        let resultado = document.getElementById("resultado");

        if (professor) {  
            let nome = document.getElementById("nome").value;
            professor.setNome(nome);

            let email = document.getElementById("email").value;
            professor.setEmail(email);

            let nascimento = new Date(document.getElementById("nascimento").value);
            professor.setNascimento(formatarData(nascimento));

            let fixo = parseInt(document.getElementById("tel_fixo").value);
            professor.setFixo(fixo);

            let celular = parseInt(document.getElementById("tel_celular").value);
            professor.setCelular(celular);

            let matricula = parseInt(document.getElementById("matricula").value);
            professor.setMatricula(matricula);
            
            let area = document.getElementById("area").value;
            professor.setArea(area);

            let lattes = document.getElementById("lattes").value;
            professor.setLattes(lattes);

            resultado.innerHTML = professor.apresentarAtributos().replace(/\n/g, "<br>");

        } else if (aluno) {
            let nome = document.getElementById("nome").value;
            aluno.setNome(nome);

            let email = document.getElementById("email").value;
            aluno.setEmail(email);

            let nascimento = new Date(document.getElementById("nascimento").value);
            aluno.setNascimento(formatarData(nascimento));

            let fixo = parseInt(document.getElementById("tel_fixo").value);
            aluno.setFixo(fixo);

            let celular = parseInt(document.getElementById("tel_celular").value);
            aluno.setCelular(celular);

            let matricula = parseInt(document.getElementById("matricula").value);
            aluno.setMatricula(matricula);

            let curso = document.getElementById("curso").value;
            aluno.setCurso(curso);

            resultado.innerHTML = aluno.apresentarAtributos().replace(/\n/g, "<br>");
        }
    });

}