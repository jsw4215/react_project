// bucket.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";
const LOADED = "bucket/LOADED";

const initialState = {
  is_loaded: false,
  list: [{ text: "firebase test", completed: "False" }, { text: "firebase test2", completed: "False" }],
};

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list };
}

export function addWord(word) {
  console.log("액션을 생성할거야!", word);
  return { type: CREATE, word: word };
}

export function updateWord(word_obj, word_idx) {
  return { type: UPDATE, word_obj, word_idx };
}

export function deleteWord(idx) {
  console.log("지울 버킷 인덱스", idx);
  return { type: DELETE, idx };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    console.log("start loadWordFB")
    const word_data = await getDocs(collection(db, "word"));
    console.log(word_data);

    let word_list = [];

    word_data.forEach((b) => {
      console.log(b.data());
      word_list.push({ id: b.id, ...b.data() });
    });

    console.log("laod word list : ",word_list);

    dispatch(loadWord(word_list));
  };
};

export const addWordFB = (word) => {
  return async function (dispatch) {
    //dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "word"), word);
    const word_data = { id: docRef.id, ...word };

    console.log("addWord : ",word_data)
    dispatch(addWord(word_data));
  };
};

export const updateWordFB = (word_obj) => {
  return async function (dispatch, getState) {
    console.log("start updateWordFB", word_obj)

    const docRef = doc(db, "word", word_obj.id);
    await updateDoc(docRef, word_obj);

    console.log("updateWordFB : ",getState().word);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_obj.id;
    });

    dispatch(updateWord(word_obj, word_index));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    console.log("deleteFB", word_id)
    const docRef = doc(db, "word", word_id);
    await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === word_id;
    });

    dispatch(deleteWord(word_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "bucket/LOAD": {
      return { list: action.word_list, is_loaded: true };
    }

    case "word/CREATE": {
      console.log("이제 값을 생성할거야!",action.word);
      const new_word_list = [...state.list, action.word];
      return { ...state, list: new_word_list, is_loaded: true };
    }

    case "word/UPDATE": {
      
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_idx) === idx) {
          return action.word_obj;
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