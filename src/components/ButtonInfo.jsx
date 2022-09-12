const ButtonInfo = ({title, icon}) => {
  return (
    <>
      <button className='buttonIcon'>{title} <img style={{marginLeft:"10px"}} src={icon} alt=""/></button>
    </>
  )
}
ButtonInfo.defaultProps = {
    title: "Register"
}
export default ButtonInfo