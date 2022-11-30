
        var operacion; 

        function sumar(){ operacion="sumar"}

        function restar(){operacion="restar"}

        function multiplicar(){ operacion="multiplicar" }

        function dividir(){ operacion="dividir" }

        function calcular() {

            let dato1, dato2; 

           if (!document.getElementById("input1").value==''&&!document.getElementById("input2").value==''){
           
            switch (operacion) {

            case 'sumar':
                dato1=document.getElementById("input1").value
                dato2=document.getElementById("input2").value
                document.getElementById("salida").innerHTML=parseFloat(dato1)+parseFloat(dato2);
            break;
            case 'restar':
                dato1=document.getElementById("input1").value
                dato2=document.getElementById("input2").value
                document.getElementById("salida").innerHTML=parseFloat(dato1)-parseFloat(dato2);
            break;
            case 'multiplicar':
                dato1=document.getElementById("input1").value
                dato2=document.getElementById("input2").value
                document.getElementById("salida").innerHTML=parseFloat(dato1)*parseFloat(dato2);
            break;
            case 'dividir':
                dato1=document.getElementById("input1").value
                dato2=document.getElementById("input2").value
                document.getElementById("salida").innerHTML=parseFloat(dato1)/parseFloat(dato2);
                if (dato2==0){ document.getElementById("salida").innerHTML="No se puede divir por cero"}
            break;

            default:
            document.getElementById("salida").innerHTML="Debes indicar una operacion para calcular"

    // code block
            }}
            else if (document.getElementById("input1").value==''||document.getElementById("input2").value=='') {
            document.getElementById("salida").innerHTML="Algunas de las entradas están vacias"
        }
        
    }
