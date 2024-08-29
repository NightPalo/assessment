export type QuestionResponse = {
    id: string;
    number: number;
    text: string;
    choices: Choice[];
};

export type Choice = {
    id: string;
    description: string;

}

export type AssessmentQuestion = {
    order: number
    id: string
    title: string;
    answer1Id: string;
    answer1Title: string;
    answer2Id: string;
    answer2Title: string;
}