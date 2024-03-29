import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId: any) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream =
  (formValues: any) => async (dispatch: any, getState: () => any) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });

    // Do some programmatic navigation to
    // get the user back to the root route
    history.push("/");
  };

export const fetchStreams = () => async (dispatch: any) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id: number) => async (dispatch: any) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id: number) => async (dispatch: any) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });

  history.push("/");
};

export const editStream = (id: number, formValues: any) => async (dispatch: any) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};
