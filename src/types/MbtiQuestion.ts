type MbtiQuestion = {
  id?: string;
  question: string;
  dimension: string;
  meaning: string;
  direction: number;
  createdAt?: Date;
};

export default MbtiQuestion;
