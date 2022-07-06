function limparCampos() {
    document.getElementById("nome").value= "";
    document.getElementById("telefone").value= "";
    document.getElementById("cidade").value= "";
    document.getElementById("email").value = "";
    document.getElementById("informacao").value= "";

    $("#estado").prop("selectedIndex", 0);
    $("#categoria").prop("selectedIndex", 0);
    $("select").formSelect();
   
    $("#salvo").hide();
    $("#erro").hide();
    
    
    
}


function salvarStorage(){
    
    
        var nome = document.getElementById("nome").value;
        var telefone = document.getElementById("telefone").value;
        var cidade = document.getElementById("cidade").value;
        var email = document.getElementById("email").value;
        var informacao = document.getElementById("informacao").value;
        var categoria = document.getElementById("categoria").value;

        var box = document.getElementById("estado");
        estado = box.options[box.selectedIndex].value;

       
        if(nome !="" && telefone != "" && cidade != "" && email != ""  && estado != "UF"){

            var formData = {
                nome: nome,
                telefone: telefone,
                cidade: cidade,
                estado: estado,
                email: email,
                informacao: informacao,
                categoria: categoria
            } ;

            form_json = JSON.stringify(formData);

            localStorage.setItem("formulario", form_json);
            
            limparCampos();
            
            $("#salvo").show();

            
            alert("Salvo com Sucesso");
        }
        else{
            alert("Prencha Todos os Campos obrigatorios!!");
            $("#erro").show();
            $("#salvo").hide();
        }
}



