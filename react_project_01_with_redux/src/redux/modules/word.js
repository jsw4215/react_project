// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";
const LOADED = "bucket/LOADED";

const initialState = {
  is_loaded: false,
  list: [{ text: "redux test", completed: "False" }, { text: "redux test2", completed: "False" }],
};

// Action Creators
export function loadWord(word) {
  return { type: LOAD, word };
}

export function addWord(word) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, word: word };
}

export function updateWord(word_obj, idx) {
  return { type: UPDATE, word_obj, idx };
}

export function deleteWord(idx) {
  console.log("지울 버킷 인덱스", idx);
  return { type: DELETE, idx };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

// middlewares


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { list: action.bucket_list, is_loaded: true };
    }

    case "word/CREATE": {
      console.log("이제 값을 생성할거야!");
      const new_word_list = [...state.list, action.word];
      return { ...state, list: new_word_list, is_loaded: true };
    }

    case "word/UPDATE": {
      
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.idx) === idx) {
          return { text : action.word_obj.text, completed : action.word_obj.completed };
        }else{
          return l;
        }
      });
      console.log({ list: new_word_list });
      return {list: new_word_list};

    }

    case "word/DELETE": {
      const new_word_list = state.list.filter((l, idx) => {
        return parseInt(action.idx) !== idx;
      });

      return { ...state, list: new_word_list };
    }

    case "bucket/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }
    default:
      return state;
  }
}