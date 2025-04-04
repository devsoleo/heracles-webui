export default function TaskBoxGame({ step, type }) {
  return (
    <select id={ step + "-" + type + "-value" } className="form-select">
      <option value="" selected disabled>Choose a mini-game</option>
      <option value="1">Memo</option>
      <option value="2">Hangman</option>
      <option value="3">The Price Is Right</option>
      <option value="4">Simon says</option>
      <option value="5">Floor is lava</option>
      <option value="6">Death Roll</option>
      <option value="7">Nim Game</option>
      <option value="8">Jigsaw Puzzle</option>
      <option value="9">TicTacToe</option>
      <option value="10">Question / Answer</option>
      <option value="11">What is this sound?</option>
      <option value="12">Who is this 3D model?</option>
      <option value="13">What is this icon?</option>
    </select>
  )
}