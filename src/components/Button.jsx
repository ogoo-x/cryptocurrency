const Button = ({title}) => {
  return (
    <>
      <button className='button'>{title}</button>
    </>
  )
}
Button.defaultProps = {
    title: "Register"
}
export default Button