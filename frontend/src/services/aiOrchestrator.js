import { askAI } from "./aiService";

/*
    This file is the brain of HireMind.

    Every AI request goes through here.
*/

export async function executeAICommand({
  message,
  dispatch,
}) {
  const text = message.toLowerCase();

  //--------------------------------------------------

  // Resume

  //--------------------------------------------------

  if (
    text.includes("resume") ||
    text.includes("cv")
  ) {
    dispatch({
      type: "SET_TAB",
      payload: "resume",
    });

    dispatch({
      type: "SET_ACTION",
      payload: "resume-review",
    });

    return;
  }

  //--------------------------------------------------

  // Interview

  //--------------------------------------------------

  if (
    text.includes("interview") ||
    text.includes("mock")
  ) {
    dispatch({
      type: "SET_TAB",
      payload: "interview",
    });

    dispatch({
      type: "SET_ACTION",
      payload: "mock-interview",
    });

    return;
  }

  //--------------------------------------------------

  // Jobs

  //--------------------------------------------------

  if (
    text.includes("job") ||
    text.includes("backend") ||
    text.includes("company")
  ) {
    dispatch({
      type: "SET_TAB",
      payload: "jobs",
    });

    dispatch({
      type: "SET_ACTION",
      payload: "recommend-jobs",
    });

    return;
  }

  //--------------------------------------------------

  // Default Chat

  //--------------------------------------------------

  dispatch({
    type: "SET_TAB",
    payload: "chat",
  });

  dispatch({
    type: "SET_ACTION",
    payload: "chat",
  });

  // Later

  // const response = await askAI(message)

  // dispatch(...)
}