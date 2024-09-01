import CreateBoard from "./hexboards/hex-CreateBoard";
import GenerativeBoard from "./hexboards/hex-Generative";
import Keyboard from "./hexboards/hex-Keyboard";
import SavedBoard from "./hexboards/hex-SavedBoard";
import TriviaBoard from "./hexboards/hex-TriviaBoard";
import HexWordSoup from "./hexboards/hex-word-soup";

export type boardDef = {
  uid: string;
  element: JSX.Element;
  displayName: string;
}

export const boardList: boardDef[] = [
  { uid: 'word-soup', element: <HexWordSoup />, displayName: 'Hex Word Soup' },
  { uid: 'create', element: <CreateBoard />, displayName: 'Create Board' },
  { uid: 'saved', element: <SavedBoard />, displayName: 'Saved Boards' },
  { uid: 'generative', element: <GenerativeBoard />, displayName: 'Generative Board' },
  { uid: 'keyboard', element: <Keyboard />, displayName: 'Keyboard Board' },
  { uid: 'trivia', element: <TriviaBoard />, displayName: 'Trivia Board' },
  // { path: '/snowflake', element: <CreateBoard />, displayName: 'Snowflake Board'},
]