import { Record, List } from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import generateId from '../utils/generateId';

import { appName } from '../config';

const ReducerRecord = Record({
  people: new List([]),
});

const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
});

export const moduleName = 'people';
const prefix = `${appName}/${moduleName}`;

export const ADD_PERSON = `${prefix}/ADD_PERSON`;
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`;


export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PERSON:
      return state.update('people', people => people.push(new PersonRecord(payload.person)));

    default:
      return state;
  }
}

export function addPersonRequest(person) {
  return {
    type: ADD_PERSON_REQUEST,
    payload: { person },
  };
}

export const addPersonSaga = function* (action) {
  const id = yield call(generateId);
  yield put({
    type: ADD_PERSON,
    payload: { ...action.payload.person, id },
  });
};

export const saga = function* () {
  yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga);
};
