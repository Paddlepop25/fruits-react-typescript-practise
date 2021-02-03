interface Props {
  text: string
}

const Banana: React.FC<Props> = ({ text, children }) => (
  <div>
    {text}, {children}
  </div>
)

export default Banana
