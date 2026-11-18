const INTENTS = {
  JOBS: "recommend-jobs",
  RESUME: "resume-review",
  INTERVIEW: "mock-interview",
  CHAT: "chat",
};

const KEYWORDS = {
  [INTENTS.JOBS]: [
    "job",
    "jobs",
    "company",
    "backend",
    "frontend",
    "apply",
    "career",
    "opening",
  ],

  [INTENTS.RESUME]: [
    "resume",
    "cv",
    "ats",
    "improve",
    "review",
  ],

  [INTENTS.INTERVIEW]: [
    "interview",
    "mock",
    "question",
    "technical",
    "hr",
  ],
};

export function detectIntent(message) {

  const text = message.toLowerCase();

  let bestIntent = INTENTS.CHAT;

  let score = 0;

  Object.entries(KEYWORDS).forEach(
    ([intent, words]) => {

      let current = 0;

      words.forEach((word)=>{

        if(text.includes(word))
            current++;

      });

      if(current>score){

        score=current;

        bestIntent=intent;

      }

    }
  );

  return bestIntent;

}