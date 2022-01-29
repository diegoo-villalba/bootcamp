/*Exportando un modulo*/
/*Para aumentar la reutibilidad de los componentes se pueden pasarle onda Argumentos, PROPIEDADES
es decir PROPS como argumento de la funcion/const y desde donde lo aplicamos al argumento se lo pasamos
como si fuesen propiedades de html onda: <h1 Mensaje message = ' ' >*/
const Mensaje = (props) => {
    console.log(props);
    return <h1 style={{color : props.color}}>
        {props.message}
        </h1>
  }
  
export default Mensaje;