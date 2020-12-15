<template>
<div align= "center"  id="CreateProject">

        <body>
            <h2 align="center">NUEVO PROYECTO </h2>
        <ul align="justify">
            Nombre:         <input  type="text"  placeholder= "nombre" v-model="nombre"/><br/>
            Empresa:        <input  type="text" placeholder= "empresa" v-model="empresa"/><br/> 
            Descripcion:    <input type="text" placeholder= "descripción" v-model="descripcion"/><br/>
            Fases:          <input type="text" placeholder= "fases" v-model="fases"/><br/>
            Fecha_inicio:   <input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_inicio"/><br/>
            Fecha_fin:      <input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_fin"/><br/>
            Presupuesto:    <input type="number" placeholder= "presupuesto" v-model="presupuesto"/><br/>
            Encargado:      <input type="text" placeholder= "encargado" v-model="encargado"/><br/>
            Num_personas:   <input type="number" placeholder= "num. personas" v-model="num_personas"/><br/>
            Horas_estimadas:<input type="number" placeholder= "horas estimadas" v-model="horas_estimados"/><br/>
            <button style="position: absolute;top: 120%;left:44%" v-on:click="crear_proyecto" >Crear Proyecto </button>
        </ul> 
        </body> 
    </div>
    
    
</template>

<script>
import axios from 'axios';
export default {
    name: "crear",
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
        crear_proyecto: function()
        {
            var dataIn = {
                nombre: this.nombre ,
                empresa: this.empresa,
                descripcion: this.descripcion,
                fases: this.fases,
                fecha_inicio: this.fecha_inicio,
                fecha_fin: this.fecha_fin,
                presupuesto: this.presupuesto,
                encargado: this.encargado,
                num_personas: this.num_personas,
                horas_estimados: this.horas_estimados,
            };
            
            axios.post("http://127.0.0.1:8000/proyecto/crear", dataIn)
            .then(response => {

                alert("Se creó el proyecto con éxito");
                this.$router.push({ name:"consultanombre"})
            })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>

<style>

    #CreateProject{
        width: 100%;
        height: 0%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family:'Courier New', monospace;
        
    }

    #CreateProject h2{
        font-family:'Courier New', monospace;
        font-size: 32px;
        color: #f4f6f8;
    }

    #CreateProject ul button{
        font-family:'Courier New', monospace;
        font-size: 19px;
        color: #f4f6f8;
        background-color: #283747;
        border-radius: 6px;
        align-content:"center"
        
    
    }

    #CreateProject ul button:hover{
      background-color: #a7a8aa;
      color: white;
    }

</style>
