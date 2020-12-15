<template>
    <div id="ConsultarProjectName">
         
        <body align = "justify">
                Nombre:         <input type="text" placeholder= "nombre" v-model="nombre"/><br/>
                Empresa:        <input type="text" placeholder= "empresa" v-model="empresa"/><br/>
                <button style="position: absolute;top: 125%;left:46%" v-on:click="get_datos" >Consultar </button> 
            <h2 align="center">Consulta Tu Proyecto</h2>
        <ul align = "left">
            <li>Proyecto: <span>{{nombre}} </span> </li>
            <li>Empresa: <span>{{empresa}} </span> </li>
            <li>Descripcion: <span>{{descripcion}}</span></li>
            <li>Fases: <span>{{fases}}</span></li>
            <li>Fecha de Inicio: <span>{{fecha_inicio}}</span></li>
            <li>Fecha Fin: <span>{{fecha_fin}}</span></li>
            <li>Presupuesto: <span>{{presupuesto}}</span></li>
            <li>Encargado: <span>{{encargado}}</span></li>
            <li>Numero Personas: <span>{{num_personas}}</span></li>
            <li>Horas Estimadas: <span>{{horas_estimados}}</span></li> 
        </ul> 
        </body> 
        </div>
    
</template> 

<script>
import axios from 'axios';
export default {
    name: "consultanombre",
    data: function (){
        return {
            nombre: "" ,
            empresa: "",
            descripcion: "",
            fases:"",
            fecha_inicio:"",
            fecha_fin:"",
            presupuesto:0,
            encargado: "",
            num_personas: 0,
            horas_estimados: 0,
        }
    },
    methods: {
        get_datos: function()
        {
            var dataIn = {
                nombre: this.nombre ,
                empresa: this.empresa,
               
            };
            
            axios.post("http://127.0.0.1:8000/proyecto/consulta/", dataIn)
            .then(response => {
                this.nombre = response.data.nombre,
                this.empresa= response.data.empresa,
                this.descripcion= response.data.descripcion,
                this.fases =response.data.fases,
                this.fecha_inicio =response.data.fecha_inicio,
                this.fecha_fin =response.data.fecha_fin,
                this.presupuesto =response.data.presupuesto,
                this.encargado =response.data.encargado,
                this.num_personas =response.data.num_personas,
                this.horas_estimados =response.data.horas_estimados
                })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>
<style>
   
    #ConsultarProjectName{
        font-family:'Courier New', monospace;
        width: 100%;
        height: 0%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #ConsultarProjectName h2{
        font-family:'Courier New', monospace;
        font-size: 50px;
        color: #f4f6f8;
    }
    #ConsultarProjectName span{
        font-family:'Courier New', monospace;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
    #ConsultarProjectName body button{
        font-family:'Courier New', monospace;
        font-size: 19px;
        color: #f4f6f8;
        background-color: #283747;
        border-radius: 6px;
        align-content:"center"
    }
    #ConsultarProjectName Body button:hover{
        background-color: #a7a8aa;
        color: white;
    }

    /*li{
        display: flex;
        justify-content: space-between;
    }*/
</style>
