export type answerType = {
    id: number,
    text: string
}

export type questionType = {
    id: number,
    question: string,
    possibleAnswers: answerType[],
    rightAnswer: number[],
    source: string
}