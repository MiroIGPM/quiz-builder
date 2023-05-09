export interface IQuizLibraryItemProps { 
    name: string, 
    id: string, 
    deleteQuiz: (id: string) => void, 
    getActiveQuiz: (id: string) => void
}