import Proptypes from 'prop-types';


export const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);

  return (
    <>
      {/* <h1>{ getResult(1,2) }</h1> */}
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>    
  )
}

FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subTitle: Proptypes.string,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Luciano Labudia',
}
