export type answerType = {
    id: number,
    text: string
}

export type questionType = {
    id: number,
    question: string,
    possibleAnswers: AnswerType[],
    rightAnswer: number[],
    source: string
}